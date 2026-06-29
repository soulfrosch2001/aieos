# Decision 0011 — Integrity: council fork-detection + orphan agents
Type: report
Date: 2026-06-29
Tier: T2/T3 (conformance coverage + framework, Directives #6, #7)
Council: none (continuation of Decision 0008's deferred backlog)
Status: CLOSED — built and verified (2026-06-29)

## Summary
Closes the remaining integrity items from Decision
[0008](0008-people-entering-simulation-and-hardening.md): fork-detection now covers
**councils** (0009 covered workflows + registers), and a new rule warns on **orphan agents**
(valid but undiscoverable). One backlog item was re-examined and found already covered. Gate:
**14 rules, 0/0** in both scopes.

## Built
- **Council fork-detection** — extended `no-stdlib-fork.mjs` to compare each company council
  (its combined README+process+output content) against the stdlib councils, flagging a
  near-copy under a different name (same-name = legitimate by-name override). Measured first:
  real company councils score ≤ **0.05** vs stdlib; the 0.60 cutoff is safe.
- **Orphan-entity rule** (`orphan-entity.mjs`, warn) — an agent folder not referenced by its
  parent department README is flagged as an undiscoverable orphan. Measured first: all **189**
  existing agents are already listed (0 findings on the real repo); the rule protects against
  future orphans without polluting the baseline.

## Re-examined and dismissed
- **identity-block when an agent README is absent** — no fix needed. If an agent dir lacks a
  README, the `agent-structure` rule already ERRORs (missing required file), so the gate
  already blocks it. A second identity finding would be redundant, not a new safeguard.

## Verification
- Real repo: **0 findings** for both new behaviors; gate green at 14 rules.
- Negative tests: a stdlib council copied into a company under a new name was flagged
  (similarity 1.00); an agent dir not listed in its department README produced the orphan
  warning. Both reverted to 0/0.

## Scope / deferred (remaining)
- Agents have no stdlib agent library to fork from (they come from a template), so agent
  fork-detection is N/A by design.
- Remaining backlog: macOS `.pkg` installer and installer code-signing (distribution, not
  integrity).

## Memory updates
- This record; its audio summary (`resumo/audio/0011-resumo.*`); the CHANGELOG entry.
