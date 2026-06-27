# scripts/ — Tooling

Helper scripts for working on AIEOS.

| Script | What it does |
|--------|--------------|
| [pre-commit](pre-commit) | Git pre-commit hook: runs the conformance checker and blocks a non-conformant commit. |
| [install-hooks.sh](install-hooks.sh) | Installs the hook above into the current git repository. |
| [gen-audio.mjs](gen-audio.mjs) | Generates a spoken audio summary (free pt-BR neural TTS) for a council/decision. `npm run audio -- <in.txt> <out.mp3> [voice]`. |

## Continuous integration

Two gates run the same checker:

- **Local** — install the pre-commit hook with `sh scripts/install-hooks.sh`. Every
  commit then runs `npm test` first.
- **CI** — [.github/workflows/conformance.yml](../.github/workflows/conformance.yml)
  runs `npm test` and `npm run conformance:all` on every push and pull request.

Both fail loud on a broken contract, broken link, or missing identity block. To
auto-repair fixable issues (broken links), run `node tests/conformance/run.mjs --fix`.
