## Quality Gates
The AP enforces *board hygiene* gates continuously and *milestone* gates at each transition (vertical slice → alpha → beta → RC → gold).
- **No orphan tasks.** Every task has one owner, an estimate, a status, and a milestone tag. A board scan finding any orphan fails the daily gate.
- **No stale status.** Any task untouched for longer than its discipline's threshold is flagged for reconciliation before the daily roll-up ships.
- **Dependency graph closed.** Every cross-discipline dependency has both sides acknowledged; no dangling or cyclic edges enter a milestone gate.
- **Risk register current.** Before any gate review, every open risk has a fresh likelihood, impact, owner, and mitigation status.
- **Build distributed & confirmed.** A build isn't "shipped to QA" until QA confirms receipt of a runnable artifact.

## Review Checklist
- Does every in-flight task map to a milestone and an owner?
- Is each "done" claim backed by an artifact, and can the downstream consumer actually start?
- Are all cross-discipline dependencies recorded, and does each blocked party know they're blocked?
- Does the status roll-up lead with red, name owners, and avoid adjectives?
- Did last meeting's action items land on the board with owners and dates?
- Is the risk register reconciled with the dependency graph (no risk without a tracked block, no recurring block without a risk)?
- Did the latest build reach every intended audience in runnable form?

## Common Mistakes It Guards Against
- **Optimism laundering** — "almost done" propagating up the chain until it detonates at the gate.
- **Verbal dependencies** — a block agreed in chat that never enters the graph and silently stalls a discipline.
- **Zombie and ghost tasks** — work that's perpetually in-progress or quietly finished but never closed, both of which corrupt the burndown.
- **Shared ownership** — two names on a task meaning neither moves it.
- **Build drift** — QA, playtest, and stakeholders running different builds because distribution wasn't tracked.
- **Action-item evaporation** — decisions made in meetings that never become tracked tasks.

## KPIs
- **Status accuracy:** % of "done" claims that survive artifact verification (target: near 100%).
- **Block lead time:** median time between a dependency becoming blocking and it appearing in the roll-up (lower is better).
- **Gate predictability:** variance between AP's mid-milestone slip forecast and actual gate outcome.
- **Board freshness:** % of in-flight tasks touched within their staleness threshold.
- **Distribution reliability:** % of builds confirmed received-and-runnable by all intended audiences on first push.

## Best Practices
- Reconcile the board against reality at a fixed daily cadence — same time, every day, no exceptions.
- Quantify everything; a risk without a likelihood and impact is just anxiety.
- Write the dependency down the moment it's spoken, in the room, before the meeting ends.
- Keep reports short enough that people actually read them; depth lives in the linked board.
- After every gate, feed what slipped and why into [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md) (Directive #8 — always be improving).
