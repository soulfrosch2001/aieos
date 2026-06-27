# Decision 0001 — Charter Four New Companies
Type: report
Date: 2026-06-27
Tier: T3 (Strategic)
Council: Enterprise Company-Creation Council (non-standing)

## Summary
The Government chartered four new kernel-native companies — **AI Film Studio**,
**AI Healthcare Clinic**, **AI Music Label**, **AI Consulting Firm** — to test AIEOS
by operating it: routing a real request through the documented flow (size → council →
plan → fan-out → gate → memory → report).

## Participants
- **Chief Innovation Officer** — proposed the four domains (the CIO owns new-company proposals).
- **CEO** — decides enterprise direction; greenlit the four.
- **CTO** — guards kernel coherence; confirmed all four mount on kernel `1.1.0` with no kernel change.
- **COO** — confirmed delivery via the standard fan-out.
- **Chief Auditor** — sets the gate: `npm test` must pass in both scopes before they are considered mounted.
- **Supreme Orchestrator** — chair; sizes the request and runs the fan-out.

## Consensus
Charter all four as **kernel-native plugins**, each inheriting the kernel and stdlib,
overriding only by name, declaring `Requires kernel: ^1.1.0`.

## Remaining concerns / dissent
- **Chief Auditor:** the *Healthcare Clinic* names a sensitive domain. **Resolution:**
  it models the **organizational structure of a clinic only** — roles, routing, and
  compliance process. It issues no medical advice; clinical judgment is explicitly out
  of scope. Recorded and accepted.
- No other dissent.

## Risks
- Sensitive-domain framing (healthcare, regulated) — mitigated by the org-only scope above.
- Fan-out seam errors (link depth, register paths) — mitigated by the `--fix` pass and the gate.

## Alternatives considered
- *Build one, then scale.* Rejected: the goal is to exercise the fan-out and gate at scale.
- *Reuse an existing domain.* Rejected: four fresh domains better test kernel generality.

## Recommendation
Proceed. Size **T3**: council (this record) + executive sign-off + fan-out up to 15
concurrent tracks ([orchestration.md](../../kernel/protocols/orchestration.md)).

## Implementation plan
1. Fan out 4 companies × 7 disjoint-ownership tracks (28 total), each built from the
   [templates](../../templates/) against the [contracts](../../kernel/contracts/).
2. Gate: `npm test --fix` then `npm test` and `npm run conformance:all` — both green.
3. Memory: register in [registry](../../kernel/registry/registry.md) and
   [companies/](../../companies/README.md); regenerate the [dashboard](../dashboard/).
4. Report.

## Owners & next steps
| Owner | Action |
|-------|--------|
| Supreme Orchestrator | Run the 28-track fan-out. |
| Chief Auditor | Run the conformance gate; block on any error. |
| CTO | Confirm no kernel change was needed (kernel stays `1.1.0`). |

## Memory updates
- This record (the enterprise decision log).
- [kernel/registry/registry.md](../../kernel/registry/registry.md) — four new rows.
- [companies/README.md](../../companies/README.md) — four new rows.
- [dashboard.md](../dashboard/dashboard.md) — regenerated.

## Outcome (2026-06-27)
**Executed and mounted.** 28-track fan-out produced four kernel-native companies
(~93 files each). The gate found 23 issues; `--fix` auto-repaired 17 links; the
Chief Auditor cleared the remaining 6 by hand (3 workflow identity blocks, 1
hallucinated decision link, 2 grandfathered names). Final: **both conformance
scopes green (0/0)**. The enterprise now hosts **15 companies, 258 agents, 42
councils** on kernel 1.1.0 — no kernel change was needed. Decision closed.
