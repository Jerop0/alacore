<?php
// CONFIG
//
// Migration from flat files/ layout (one-time on server):
// 1. Create files/next/
// 2. Move init.lua, data/, modules/, layouts/ (+ exe if any) into files/next/
// 3. Run: php updater.php update  (creates files/1/, checksums.txt, client_checksum.json)
// 4. Remove old files from flat files/ (keep next/, numeric dirs, checksums.txt, client_checksum.json)
// After changing $files_url, run update again so client_checksum.json gets the new URL.
//
// Legacy (old 64-bit client) channel, one-time setup:
// 1. cp -r files/38 files/legacy        (the last version the old exe can run)
// 2. Put the "download new client" entergame.lua into files/legacy/modules/client_entergame/
//    (plain-text Lua or bytecode compiled for the OLD exe, never bytecode from the new build)
// 3. Run: php updater.php legacy        (creates client_checksum_legacy.json)
// Re-run step 3 every time you change something inside files/legacy/.
// "legacy" is not a number, so "update" never counts it as a version and never deletes it.
//
$files_dir = "/home/update/files";
$files_url = "https://update.whispersofsolitude.org/files";
$staging_dir = "next";
$update_password = ""; // empty = web update disabled; set password to use ?update=
$checksum_file = "checksums.txt";
$client_checksum_file = "client_checksum.json"; // ready client JSON (generated on update)
$keep_versions = 5; // keep this many published version dirs (incl. current); 0 = never delete
$files_and_dirs = array("init.lua", "data", "layouts", "mods", "modules");

// Who gets the latest version. Everyone else gets the legacy channel.
$latest_platform_prefixes = array("WIN32-"); // new client is 32-bit
$latest_key = ""; // optional password: clients sending {"key": "..."} always get latest; empty = disabled

$legacy_dir = "legacy"; // files/legacy
$legacy_client_checksum_file = "client_checksum_legacy.json";
// Shown by the old updater if the legacy channel has not been published yet
$legacy_message = "Your client is outdated.\nPlease download the new client from:\nhttps://legacy.whispersofsolitude.org/downloads";

$binaries = array(
    "WIN64-WGL" => "otclient_gl_x64.exe",
    "WIN64-EGL" => "otclient_dx_x64.exe",
    "WIN32-WGL" => "otclient_gl.exe",
    "WIN32-EGL" => "otclient_dx.exe",

    "WIN64-WGL-GCC" => "otclient_gcc_gl_x64.exe",
    "WIN64-EGL-GCC" => "otclient_gcc_dx_x64.exe",
    "WIN32-WGL-GCC" => "otclient_gcc_gl.exe",
    "WIN32-EGL-GCC" => "otclient_gcc_dx.exe",

    "X11-GLX" => "otclient_linux",
    "X11-EGL" => "otclient_linux",
    "ANDROID-EGL" => "", // we can't update android binary
    "ANDROID64-EGL" => "", // we can't update android binary
);
// CONFIG END

function sendError($error, $code = 400)
{
    if (PHP_SAPI !== 'cli') {
        http_response_code($code);
        header('Content-Type: application/json');
    }
    echo json_encode(array("error" => $error));
    die();
}

function findMaxVersion($filesDir)
{
    $max = 0;
    if (!is_dir($filesDir)) {
        return 0;
    }
    $entries = scandir($filesDir);
    if ($entries === false) {
        return 0;
    }
    foreach ($entries as $entry) {
        if ($entry === '.' || $entry === '..') {
            continue;
        }
        $path = $filesDir . DIRECTORY_SEPARATOR . $entry;
        if (ctype_digit($entry) && is_dir($path)) {
            $version = (int) $entry;
            if ($version > $max) {
                $max = $version;
            }
        }
    }
    return $max;
}

function shouldSkipStagingFile($filename)
{
    return $filename === '.gitignore';
}

function isStagingEmpty($dir)
{
    if (!is_dir($dir)) {
        return true;
    }
    $iterator = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS)
    );
    foreach ($iterator as $file) {
        if ($file->isFile() && !shouldSkipStagingFile($file->getFilename())) {
            return false;
        }
    }
    return true;
}

function copyDirectory($src, $dst)
{
    $src = rtrim($src, DIRECTORY_SEPARATOR);
    $dst = rtrim($dst, DIRECTORY_SEPARATOR);
    if (!is_dir($src)) {
        return false;
    }
    if (!is_dir($dst) && !mkdir($dst, 0755, true)) {
        return false;
    }
    $iterator = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($src, RecursiveDirectoryIterator::SKIP_DOTS),
        RecursiveIteratorIterator::SELF_FIRST
    );
    foreach ($iterator as $item) {
        if ($item->isFile() && shouldSkipStagingFile($item->getFilename())) {
            continue;
        }
        $target = $dst . DIRECTORY_SEPARATOR . $iterator->getSubPathName();
        if ($item->isDir()) {
            if (!is_dir($target) && !mkdir($target, 0755, true)) {
                return false;
            }
        } else {
            $targetDir = dirname($target);
            if (!is_dir($targetDir) && !mkdir($targetDir, 0755, true)) {
                return false;
            }
            if (!copy($item->getPathname(), $target)) {
                return false;
            }
        }
    }
    return true;
}

function deleteDirectory($dir)
{
    if (!is_dir($dir)) {
        return false;
    }
    $iterator = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS),
        RecursiveIteratorIterator::CHILD_FIRST
    );
    foreach ($iterator as $item) {
        if ($item->isDir()) {
            if (!rmdir($item->getPathname())) {
                return false;
            }
        } else {
            if (!unlink($item->getPathname())) {
                return false;
            }
        }
    }
    return rmdir($dir);
}

function cleanupOldVersions($filesDir, $currentVersion, $keepVersions)
{
    $deleted = array();
    if ($keepVersions <= 0 || $currentVersion <= $keepVersions) {
        return $deleted;
    }
    $minKeep = $currentVersion - $keepVersions + 1;
    $entries = scandir($filesDir);
    if ($entries === false) {
        return $deleted;
    }
    foreach ($entries as $entry) {
        if ($entry === '.' || $entry === '..') {
            continue;
        }
        if (!ctype_digit($entry)) {
            continue;
        }
        $version = (int) $entry;
        if ($version >= $minKeep) {
            continue;
        }
        $path = $filesDir . DIRECTORY_SEPARATOR . $entry;
        if (!is_dir($path)) {
            continue;
        }
        if (deleteDirectory($path)) {
            $deleted[] = $version;
        }
    }
    sort($deleted);
    return $deleted;
}

function buildChecksums($versionDir)
{
    $dir = realpath($versionDir);
    if ($dir === false) {
        return false;
    }
    $checksums = array();
    $iterator = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS)
    );
    foreach ($iterator as $file) {
        if (!$file->isFile() || shouldSkipStagingFile($file->getFilename())) {
            continue;
        }
        $path = str_replace($dir, '', $file->getPathname());
        $path = str_replace(DIRECTORY_SEPARATOR, '/', $path);
        $checksums[$path] = hash_file("crc32b", $file->getPathname());
    }
    return $checksums;
}

function saveJsonFile($path, $data)
{
    $tmp = $path . ".tmp";
    if (file_put_contents($tmp, json_encode($data, JSON_PRETTY_PRINT)) === false) {
        return false;
    }
    return rename($tmp, $path);
}

function buildClientChecksumData($dirName, $checksums, $withBinaries = true)
{
    global $files_url, $files_and_dirs, $binaries;

    $data = array(
        "url" => rtrim($files_url, '/') . '/' . $dirName,
        "files" => array(),
        "keepFiles" => false,
        "binaries" => array()
    );

    $binaryToPlatforms = array();
    foreach ($binaries as $platformName => $binaryName) {
        if ($binaryName === '') {
            continue;
        }
        if (!isset($binaryToPlatforms[$binaryName])) {
            $binaryToPlatforms[$binaryName] = array();
        }
        $binaryToPlatforms[$binaryName][] = $platformName;
    }

    foreach ($checksums as $file => $checksum) {
        $parts = explode("/", ltrim($file, "/"));
        $base = trim($parts[0]);
        if (in_array($base, $files_and_dirs)) {
            $data["files"][$file] = $checksum;
        }
        if ($withBinaries && isset($binaryToPlatforms[$base])) {
            foreach ($binaryToPlatforms[$base] as $platformName) {
                $data["binaries"][$platformName] = array(
                    "file" => $file,
                    "checksum" => $checksum
                );
            }
        }
    }

    return $data;
}

function promoteUpdate()
{
    global $files_dir, $staging_dir, $checksum_file, $client_checksum_file, $keep_versions;

    $stagingPath = $files_dir . DIRECTORY_SEPARATOR . $staging_dir;
    if (!is_dir($stagingPath)) {
        return array("ok" => false, "error" => "Staging directory does not exist: " . $stagingPath);
    }
    if (isStagingEmpty($stagingPath)) {
        return array("ok" => false, "error" => "Staging directory is empty: " . $stagingPath);
    }

    $maxVersion = findMaxVersion($files_dir);
    $newVersion = $maxVersion + 1;
    $versionPath = $files_dir . DIRECTORY_SEPARATOR . $newVersion;

    if (is_dir($versionPath)) {
        return array("ok" => false, "error" => "Version directory already exists: " . $versionPath);
    }

    if (!copyDirectory($stagingPath, $versionPath)) {
        return array("ok" => false, "error" => "Failed to copy staging directory to version " . $newVersion);
    }

    $checksums = buildChecksums($versionPath);
    if ($checksums === false) {
        return array("ok" => false, "error" => "Failed to build checksums for version " . $newVersion);
    }

    $checksumPath = $files_dir . DIRECTORY_SEPARATOR . $checksum_file;
    if (!saveJsonFile($checksumPath, array("version" => $newVersion, "files" => $checksums))) {
        return array("ok" => false, "error" => "Failed to save checksum file: " . $checksumPath);
    }

    $clientPath = $files_dir . DIRECTORY_SEPARATOR . $client_checksum_file;
    $clientData = buildClientChecksumData($newVersion, $checksums);
    if (!saveJsonFile($clientPath, $clientData)) {
        return array("ok" => false, "error" => "Failed to save client checksum file: " . $clientPath);
    }

    $deletedVersions = cleanupOldVersions($files_dir, $newVersion, $keep_versions);

    return array(
        "ok" => true,
        "version" => $newVersion,
        "files" => count($checksums),
        "deleted_versions" => $deletedVersions
    );
}

// Rebuilds client_checksum_legacy.json from files/legacy/.
// No binaries: old clients must never get the new exe (needs new DLLs).
function publishLegacy()
{
    global $files_dir, $legacy_dir, $legacy_client_checksum_file;

    $legacyPath = $files_dir . DIRECTORY_SEPARATOR . $legacy_dir;
    if (isStagingEmpty($legacyPath)) {
        return array("ok" => false, "error" => "Legacy directory is missing or empty: " . $legacyPath);
    }

    $checksums = buildChecksums($legacyPath);
    if ($checksums === false) {
        return array("ok" => false, "error" => "Failed to build checksums for " . $legacyPath);
    }

    $clientPath = $files_dir . DIRECTORY_SEPARATOR . $legacy_client_checksum_file;
    if (!saveJsonFile($clientPath, buildClientChecksumData($legacy_dir, $checksums, false))) {
        return array("ok" => false, "error" => "Failed to save legacy client checksum file: " . $clientPath);
    }

    return array("ok" => true, "files" => count($checksums));
}

function isLatestClient($data)
{
    global $latest_platform_prefixes, $latest_key;

    if ($latest_key !== '' && $data && isset($data->key) && is_string($data->key)
        && hash_equals($latest_key, $data->key)) {
        return true;
    }

    $platform = ($data && isset($data->platform) && is_string($data->platform)) ? $data->platform : "";
    foreach ($latest_platform_prefixes as $prefix) {
        if ($prefix !== '' && strpos($platform, $prefix) === 0) {
            return true;
        }
    }
    return false;
}

if (PHP_SAPI === 'cli' && isset($argv[1]) && $argv[1] === 'update') {
    $result = promoteUpdate();
    if ($result["ok"]) {
        echo "OK: published version " . $result["version"] . " (" . $result["files"] . " files)\n";
        if (!empty($result["deleted_versions"])) {
            echo "Removed old versions: " . implode(", ", $result["deleted_versions"]) . "\n";
        }
        exit(0);
    }
    fwrite(STDERR, "ERROR: " . $result["error"] . "\n");
    exit(1);
}

if (PHP_SAPI === 'cli' && isset($argv[1]) && $argv[1] === 'legacy') {
    $result = publishLegacy();
    if ($result["ok"]) {
        echo "OK: published legacy channel (" . $result["files"] . " files)\n";
        exit(0);
    }
    fwrite(STDERR, "ERROR: " . $result["error"] . "\n");
    exit(1);
}

if (isset($_GET["update"])) {
    if ($update_password === '') {
        sendError("Update via web is disabled", 403);
    }
    if ($_GET["update"] !== $update_password) {
        sendError("Invalid update password", 403);
    }
    $result = promoteUpdate();
    if (!$result["ok"]) {
        sendError($result["error"], 500);
    }
    header('Content-Type: application/json');
    $response = array(
        "ok" => true,
        "version" => $result["version"],
        "files" => $result["files"]
    );
    if (!empty($result["deleted_versions"])) {
        $response["deleted_versions"] = $result["deleted_versions"];
    }
    echo json_encode($response);
    die();
}

$data = json_decode(file_get_contents("php://input"));

$platform = ($data && isset($data->platform) && is_string($data->platform)) ? $data->platform : "";

if (isLatestClient($data)) {
    $clientPath = $files_dir . DIRECTORY_SEPARATOR . $client_checksum_file;
} else {
    $clientPath = $files_dir . DIRECTORY_SEPARATOR . $legacy_client_checksum_file;
    if (!file_exists($clientPath)) {
        // Legacy channel not published: the old updater shows this text in an error box
        sendError($legacy_message, 200);
    }
}

if (!file_exists($clientPath)) {
    sendError("No published version");
}

$clientData = json_decode(file_get_contents($clientPath), true);
if (!is_array($clientData) || !isset($clientData["url"]) || !isset($clientData["files"]) || !is_array($clientData["files"])) {
    sendError("No published version");
}

$ret = array(
    "url" => $clientData["url"],
    "files" => $clientData["files"],
    "keepFiles" => isset($clientData["keepFiles"]) ? $clientData["keepFiles"] : false
);

if (
    $platform !== ""
    && isset($clientData["binaries"])
    && is_array($clientData["binaries"])
    && isset($clientData["binaries"][$platform])
) {
    $ret["binary"] = $clientData["binaries"][$platform];
}

header('Content-Type: application/json');
echo json_encode($ret, JSON_PRETTY_PRINT);
