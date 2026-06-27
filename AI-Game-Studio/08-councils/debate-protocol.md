# 🗣️ debate-protocol.md — How Councils Disagree Productively

`Status: stable`

> The engine every council in [08-councils/](README.md) runs on. Fake consensus is a
> defect, not a courtesy — this protocol is the enforcement of
> **Prime Directive #4: Disagreement is a feature** ([../00-company/prime-directives.md](../00-company/prime-directives.md)).
> Authority by tier lives in [../00-company/decision-authority.md](../00-company/decision-authority.md).

## Every Option Has an Honest Owner
No option enters a debate as an orphan. Before discussion starts, the chair assigns
each viable option a **named owner** who must argue it in good faith — its strengths,
its real costs, and the conditions under which it wins. An owner who secretly hates
their option must say so and hand it to someone who will fight for it. An option no
one will own is dead on arrival, and that fact is recorded.

## No Fake Consensus
- "Sounds good" is not a position. State your reasoning or **abstain explicitly** —
  silence is not agreement.
- The chair must surface the **strongest counter-argument** out loud before calling
  consensus on anything non-trivial.
- If everyone agrees instantly on a T2+ call, the chair appoints a **devil's advocate**
  and runs at least one adversarial round before proceeding.
- Seniority does not win arguments. The strongest reasoning wins; rank only breaks ties.

## Recording Dissent (Prime Directive #4)
- Dissent is **never deleted, softened, or anonymized**. It is written into the minutes'
  *Remaining Concerns* with the dissenter's name and reasoning.
- A dissenter may **flag an objection for re-review** at a named future checkpoint
  (e.g. "revisit at first playtest"). The chair records the trigger.
- "Disagree and commit" is allowed and encouraged — but the disagreement still goes on
  the record. Committing does not erase the warning.

## Drive to a Decision
A debate is not done until it yields, in order:
1. **Consensus** — what everyone genuinely agrees on.
2. **Remaining Concerns** — unresolved worries, attributed by name.
3. **Risks** — likelihood · impact · owner · mitigation.
4. **Alternatives Considered** — options weighed and why each lost.
5. **Decision** — the actual call, with the owner of the winning option.
6. **Implementation Plan** — who does what next, and which workflow executes it.

Endless debate is also a defect. The chair drives toward a written decision every session.

## Time & Round Limits
- **Standard council:** 2 rounds, then the chair decides. A round = one pass where each
  member may speak once.
- **T3 strategic:** up to 3 rounds; unresolved → escalate to the executive board.
- **T4 / live incident:** 1 round; the chair (or incident commander) decides immediately.

## Deadlock Resolution
1. **Reversibility check** — when uncertain, prefer the option cheapest to undo. A
   reversible decision is not worth a deadlock.
2. **Chair decides** — at the round limit with no consensus, the chair makes the call
   and records every dissent verbatim.
3. **Escalate out of mandate** — if the decision exceeds the chair's authority, escalate
   per [communication-protocol.md](communication-protocol.md): craft deadlock → council
   chair; cross-department → [Executive Orchestrator](../01-executive/executive-orchestrator/)
   → Creative Director (vision) or Technical Director (risk).
4. **Veto override** — a [Chief Auditor](../01-executive/chief-auditor/), Technical
   Director, or QA Lead block is **not** a deadlock to be voted away. Only a recorded
   **human risk-acceptance** overrides a quality/security veto (Prime Directive #7).
