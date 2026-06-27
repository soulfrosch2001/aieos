# Forge Eval Rubric
Status: experimental
Type: reference
Owner: CTO (Government)
Extends: none

The rubric the Forge runtime's **structural self-check** follows. After the loop ends,
the runtime derives a deterministic verdict from the trace it already holds — **no model
call, no I/O** — so it runs identically under `--dry-run`. The verdict is **advisory**:
it never gates `finish`, it only reports. It lands in `trace.data.evaluation` and prints
as one `verdict:` line. Implemented in
[runtime/eval.mjs](runtime/eval.mjs).

## Structural checks
Each check is a boolean read off the trace.

| Check | Passes when |
|-------|-------------|
| `finished` | The run ended because the model called `finish` (`outcome: done`), not because a stop condition tripped. |
| `goalAddressed` | The closing summary or step text references a substantive term from the goal — the run engaged with what was asked, not a generic sign-off. |
| `gatePassed` | If any file was written, the conformance gate passed since the last write. Vacuously true for a read-only goal. |
| `producedWrites` | At least one file was written. Informational only — a read-only goal legitimately produces none. |
| `noStuck` | The loop did not end as `stuck`, `incomplete`, or `budget_exhausted`. |

## Verdict
- **pass** — `finished` AND `goalAddressed` AND `gatePassed` AND `noStuck`.
- **fail** — the gate did not pass after writes, OR the run did not finish by the model's
  own decision.
- **partial** — finished and gate-clean, but a softer check (e.g. `goalAddressed`) did not
  hold. `producedWrites` never demotes a verdict on its own.

## Scope and non-goals
This rubric is deliberately structural and offline. It answers "did the run do the
mechanical right things?" — terminate cleanly, gate its writes, stay on the goal — not
"is the output good?". A model-judged quality rubric is **deferred** until there is a run
corpus to calibrate it against; an uncalibrated judge with no key would be advisory noise.
Until then the structural verdict closes the loop for every run, including `--dry-run`.
