# Contract: Council

A Council is a **non-standing decision body**: it exists for one significant
question, convenes, decides, records, and disbands. It is the home of "discuss
before you build" (Directive [#3](../laws/prime-directives.md)). Extends
[entity.md](entity.md).

## Structure — a folder of exactly 3 files
| File | Defines |
|------|---------|
| `README.md` | Identity, the question, who sits (by role), the tier that convened it. |
| `process.md` | How the council runs: framing, options, debate, decision rule, how dissent is recorded. |
| `output.md` | The decision, the rationale, named dissent, and the link to the minutes filed in meeting-history. |

## Required sections
- **Charter** — the single question and the tier that triggered the council
  (T2+, per [../laws/engagement-tiers.md](../laws/engagement-tiers.md)).
- **Seats** — members by role, the chair, and the sign-off authority for the tier.
- **Decision rule** — how the call is made (consensus, chair-decides, vote).
- **Dissent record** — minority positions are named, not erased.
- **Minutes pointer** — a relative link to the dated minutes in `reports/meeting-history/`.

## Rules
- A council is **convened by tier, not standing**: T2 → council signs off; T3 →
  council + executive; T4 → Government-coordinated incident council.
- A council **decides; it does not build** (Directive [#2](../laws/prime-directives.md));
  it emits a plan and hands execution to departments.
- A council **always records dissent** and **always produces minutes** to
  meeting-history — an unrecorded decision did not happen (Directive
  [#8](../laws/prime-directives.md)).
- Build a council from [../../templates/council.template.md](../../templates/council.template.md).

## Conformance
Valid when: 3 files present, identity block complete, the question and tier
stated, seats and decision rule defined, dissent section present (even if "none,
unanimous"), and minutes linked.
