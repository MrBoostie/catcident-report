# catcident-report

Generate deeply unserious cat incident reports from the command line or from a failed GitHub Actions pipeline.

Use this repo as a template when you want your CI failures to leave behind a tiny incident report instead of only a wall of red text.

## GitHub Actions

Add this as the last step in a job. It runs only when an earlier step fails and writes the report to the Actions step summary.

```yaml
- name: File catcident report
  if: ${{ failure() }}
  uses: MrBoostie/catcident-report@main
  with:
    seed: ${{ github.workflow }}-${{ github.run_id }}-${{ github.job }}
```

The action also exposes the report as an output:

```yaml
- name: File catcident report
  id: catcident
  if: ${{ failure() }}
  uses: MrBoostie/catcident-report@main

- name: Print report
  if: ${{ failure() }}
  run: printf '%s\n' '${{ steps.catcident.outputs.report }}'
```

## Template Repo

Click **Use this template** on GitHub to create your own version, then edit the report phrases in `src/generate.js`.

The included `.github/workflows/catcident-on-failure.yml` workflow shows the intended pattern.

## CLI

```bash
npm start
```

Or pick a seed for repeatable nonsense:

```bash
node ./bin/catcident.js --seed=mittens
```

Example:

```text
Case CAT-4821
Suspect: Toast, Night Shift Vase Auditor
Location: the hallway at 3:17 AM
Violation: declared breakfast was late despite breakfast having occurred
Evidence: a suspiciously warm keyboard
Severity: Critical, treats demanded
Outcome: released on recognizance and immediately reoffended
```

## Development

```bash
npm test
```
