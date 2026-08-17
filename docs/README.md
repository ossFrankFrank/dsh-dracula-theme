# docs

## awesome-dsh-plugin entry

[`awesome-dsh-plugin-entry.yml`](awesome-dsh-plugin-entry.yml) is the listing
entry for the [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)
curated list — the file added as `data/plugins/ossFrankFrank__dsh-dracula-theme.yml`
in the submission PR. Keep it in sync if the plugin's description changes.

## Awesome list submission checklist

Requirements checked by the list's CI before a submission is reviewed:

- [x] Repo declares a `dsh.bundle` manifest (`package.json` → `dsh.bundle.patch`)
- [x] Repo is **at least 1 day old** and has **≥ 10 commits**
- [x] `dsh-plugin` topic set on the repo
- [x] Description is accurate (verified against the code by a maintainer)
- [x] Category `theme` matches what the plugin does
- [x] READMEs regenerated with `node scripts/generate-readme.mjs` in the list repo

Open the PR from the fork branch against upstream `main`:

```
https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/compare/main...ossFrankFrank:add-dsh-dracula-theme
```

CI runs `check-submission` (manifest, repo age, commit count, README sync);
then a maintainer reads the repo before merging.
