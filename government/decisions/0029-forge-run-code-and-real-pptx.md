# Decision 0029 — Forge: run_code (opt-in) + real .pptx generation (kernel 1.13.0)
Type: report
Date: 2026-07-02
Tier: T3 (Strategic — crosses a previously-declined safety boundary and adds the project's
first new production dependency; both explicitly authorized by the maintainer)
Council: none (maintainer directly authorized both items after they were flagged in 0028)
Status: CLOSED — built (2026-07-02)

## Context
Decision 0028 flagged, but explicitly declined to build, two items: real code execution
(would cross the Forge's documented "no exec tool" boundary) and real Office binary
deliverables (would need a new dependency, breaking the Forge's zero-new-deps stance). Both
were surfaced as maintainer decisions, not built. The maintainer authorized both ("pode
seguir"). This decision builds them, with the safety/correctness care their risk warrants.

## Built

### `run_code` — opt-in code execution, honestly bounded
Gated behind `FORGE_ALLOW_EXEC=on` (default off), the same opt-in pattern as `delegate`.
Runs a Node.js script via `spawnSync` in a **genuinely separate OS process** (not `vm`, not
in-process `eval`) with:
- A hard wall-clock timeout (`FORGE_EXEC_TIMEOUT_MS`, default 10s) — SIGKILL on expiry.
- A capped environment: the child inherits only `PATH` (+ `SystemRoot` on Windows, needed to
  resolve `node.exe`) — no `ANTHROPIC_API_KEY` or any other secret in this process's
  environment reaches the child.
- The same output cap (`clip()`) every other tool already uses.

**What this explicitly does NOT do — documented in three places (tool description, code
comment, README) so it can never be mistaken for more than it is:** Node has no built-in
security sandbox. The Node docs say this outright about `vm`; a plain child process has
none either. The script can read/write any file the OS user running Forge can touch — it is
**not** confined to the agent workspace the way `write_file`/`write_csv`/`write_pptx` are,
because that confinement is enforced by this codebase's own `within()` check, and arbitrary
JS in a child process does not go through it. It can make network requests. `FORGE_ALLOW_EXEC=on`
is equivalent to letting the agent run any script the maintainer could run locally — "time-
boxed, no inherited secrets, separate process," not "sandboxed."

**Defense in depth, both old and new:** the flag is re-checked *inside* `runTool` itself
(`execEnabled()`), not just at schema-advertisement time — a stray `run_code` tool_use can
never execute just because it somehow arrived while the feature was off. Found the same gap
in the *existing* `delegate` handling while fixing this one (it only checked the depth cap,
not whether `FORGE_SUBAGENTS` was actually on) and closed it the same way, since it's the
identical bug class and trivially safe to fix.

### `write_pptx` — a real PowerPoint deliverable
Added the project's **first new production dependency**: [`pptxgenjs`](https://www.npmjs.com/package/pptxgenjs)
(0 vulnerabilities on install, MIT). Deliberately not hand-rolled: a `.pptx` is a ZIP of
OOXML, and getting that byte-correct from scratch — with no PowerPoint available here to
open the result and confirm it isn't subtly corrupt — is exactly the kind of thing better
left to a library thousands of people already depend on. `write_pptx` takes a simple
`{ path, title, slides: [{ title, bullets }] }` shape (not the full pptxgenjs API surface)
and is confined to the agent workspace exactly like `write_file`/`write_csv`.

## Verified (not just "returned ok")
- `run_code`: confirmed disabled by default (denied with the guardrail message, no
  execution attempted) and confirmed it genuinely executes when `FORGE_ALLOW_EXEC=on`
  (`console.log(2+2)` → real subprocess output `"4\n"`).
- `delegate`'s new defense-in-depth check: confirmed it is now refused when `FORGE_SUBAGENTS`
  is unset (previously it would have run).
- `write_pptx`: generated a real deck through the actual runtime (not an isolated script),
  then opened the resulting `.pptx` as a ZIP with `jszip` and inspected the internal
  structure directly — `ppt/slides/slide1.xml` and `slide2.xml` exist, and each contains the
  exact title/bullet text passed in. This is the level of verification a binary-format claim
  needs; a green `ok: true` alone would not have been enough.
- Full regression: all 8 dry-run sentinels (`--smoke`, `delegate`, `parallel-delegate`,
  `checkpoint`, `readmany`, `csv`, `runcode`, `pptx`) → `outcome: done`. Unit tests 13/13.
  Gate: 14 rules, 0/0.

## What's still open
- `.docx` / `.xlsx` binary formats — not built. `write_csv` already covers the spreadsheet
  case well enough that a second new dependency wasn't judged worth it in the same pass;
  `.docx` remains a natural next step on the same pattern (library + workspace confinement +
  deep verification) if wanted.

## Memory updates
- This record; its audio summary (`resumo/audio/0029-resumo.*`); `forge-lessons.md` gains
  entries from the verification runs above (automatic, trusted-runtime write).
