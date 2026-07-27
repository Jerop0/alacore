# Task 31 — Commit, push to remote, and verify all assets shipped

## Goal
When a task's work is finished, **commit and push it to the remote**, and prove that **every image, logo,
and font it references is actually tracked and on `origin`** — nothing left untracked, `.gitignore`d, or
stranded in a scratch/asset-pack folder where it would 404. Run this as the closing step of each task
(and as a final sweep after the queue).

## Read-first
`.gitignore`, `tasks/README.md` (commit convention), the current remote (`git remote -v`).

## Preconditions
- Remote `origin` is SSH: `git@github.com:Jerop0/alacore.git` (SSH key already configured). If it shows
  an `https://…` URL, switch it: `git remote set-url origin git@github.com:Jerop0/alacore.git`.
- `main` is the branch; pushes are fast-forward. **Never force-push `main`.**

## Steps
1. **Find every referenced asset.** Grep the built/rendered code for asset paths and collect the set:
   ```bash
   grep -rhoE '(/(brand|images|fonts)/[^"'"'"' )]+\.(png|jpg|jpeg|webp|avif|svg|woff2?))' src public 2>/dev/null | sort -u
   ```
   Include `astro:assets` imports (`src/assets/**`) and any `background-image`/`<img>`/`<link rel=preload>`/
   `og:image` references. Build the list of files the site actually needs.
2. **Prove each is tracked.** For every path in that list, confirm `git ls-files --error-unmatch <path>`
   succeeds (i.e. it is committed, not ignored). Any asset that only exists under
   `ala-core-website-assets/logos/newassets/` or another loose folder — but is referenced by the site —
   must first be moved into `public/` (see task 29 Step 0) and added. **No referenced asset may be untracked.**
3. **No accidental exclusion.** Confirm `.gitignore` does not swallow shipped assets (it should only ignore
   `dist/`, `.astro/`, `node_modules/`, logs, `.env`, `.DS_Store`, `.idea/`). Do **not** commit `dist/` or
   `node_modules/`. Large source-only dumps that the site does not reference need not ship, but anything
   referenced must.
4. **Commit** per convention: `feat(site): <task-nn> <short summary>` (scoped to the task; binary assets
   included in the same commit as the code that references them).
5. **Push:** `git push origin main` (fast-forward). Resolve non-fast-forward by `git pull --rebase` then
   re-push — never `--force` on `main`.
6. **Verify on the remote** (not just locally):
   ```bash
   git fetch origin
   test "$(git rev-parse main)" = "$(git rev-parse origin/main)"   # local == remote
   # every referenced asset is present in the pushed tree:
   for f in <asset list>; do git cat-file -e origin/main:"$f" || echo "MISSING ON REMOTE: $f"; done
   ```
   Every asset must exist in `origin/main`. If a preview/deploy URL is available, spot-check that the hero
   image, header logo, and any new fonts return `200` (no broken image / tofu).

## Files
No source changes of its own (beyond moving/adding stray assets into `public/` when found); this task
commits + pushes the work of the other tasks.

## Acceptance
- `git status` clean; `origin/main` == local `main` (fast-forward, no force).
- Every image/logo/font the site references is tracked **and** present in `origin/main`
  (the `git cat-file -e origin/main:<path>` loop reports nothing missing).
- No referenced asset stranded in a loose/un-served folder; `dist/`/`node_modules/` not committed.

## Done-when
Work committed and pushed to `origin/main`, and every referenced image, logo, and font is verified present
on the remote.
