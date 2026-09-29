# OTClient updater: split old 64-bit and new 32-bit clients

The updater request already sends `platform` (from `g_window.getPlatformType()`), so `updater.php` picks a channel from it:

| Client sends | Gets |
|---|---|
| `platform` starting with `WIN32-` (new client) | latest version (`client_checksum.json`), including the exe update |
| `"key": "<$latest_key>"` (optional password) | latest version |
| anything else (old `WIN64-*` client) | `files/legacy/` (`client_checksum_legacy.json`), **never** an exe |
| anything else, legacy not published yet | error box with `$legacy_message` |

## Server setup (once)

```sh
cd /home/update/files
cp -r 38 legacy                     # last version the old 64-bit exe can run
cp <this repo>/otclient-updater/legacy/modules/client_entergame/entergame.lua \
   legacy/modules/client_entergame/entergame.lua
php updater.php legacy              # writes client_checksum_legacy.json
```

- Replace the server's `updater.php` with this one first (same config values as yours).
- `legacy/` has no number in its name, so `php updater.php update` never counts it and `$keep_versions` never deletes it.
- After any change inside `files/legacy/`, run `php updater.php legacy` again.
- Publishing new versions is the same as before: `php updater.php update`.

## Rules for files in `files/legacy/`

Everything there must run on the **old 64-bit exe**. Use either plain-text `.lua` files or bytecode compiled with the old build. Never use bytecode from the new 32-bit build: 32-bit and 64-bit LuaJIT bytecode are not compatible. That mismatch causes the `cannot load incompatible bytecode` error.

The legacy `entergame.lua` is plain text. It opens a "Client Update Required" dialog at startup with **Download New Client** and **Exit** buttons, and it blocks login.

## Optional password

Set `$latest_key = "something"` in `updater.php`. Then add `key = "something",` to the `HTTP.postJSON(Services.updater, { ... })` table in the new client's `modules/updater/updater.lua`. Use this only if a non-32-bit build must get the latest version (Linux, testing, and so on).

## Players who already got the broken update

If an old client already downloaded the new files, it now fails at startup (for example `corelib/math.lua: cannot load incompatible bytecode`). The updater cannot run to repair it. That player must download the new client from the website, or delete the client's saved update data so the old exe falls back to its original files.
