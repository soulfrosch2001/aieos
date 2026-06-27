# Balance Council
Status: stable
Type: council
Owner: balance-director
Extends: performance-council

## Purpose
The body that **reviews numeric balance changes against playtest and telemetry
evidence** and rules whether each change ships, gets revised, or is held. It decides
*is this number justified by what we measured* — it does not invent the change and
does not write the patch (Directive
[#2](../../../kernel/laws/prime-directives.md)). It extends the stdlib
[performance-council](../../../councils/performance-council/), substituting balance
budgets (win-rate spread, economy flow, difficulty curves, match quality) for
performance budgets. It does **not** rule on whether the *methodology* is sound —
that is the [methodology-council](../methodology-council/).

## Participants
- **Chair** (breaks deadlocks): **balance-director** — owns the methodology and
  holds the methodology veto ([decision-authority.md](../../../kernel/laws/decision-authority.md));
  an unsound or unevidenced change does not pass.
- **Core** (must attend): the department lead proposing the change (economy-balancer,
  progression-balancer, or meta-analyst) and the chief-auditor (quality/process
  veto, never tunes, never directs).
- **Advisory** (as needed): the operations-director when sequencing is at stake, and
  any peer agent whose numbers the change touches.

## When convened
At [T2](../../../kernel/laws/engagement-tiers.md) — a balance pass, a playtest read,
or a patch's numeric review — per
[engagement-tiers.md](../../../kernel/laws/engagement-tiers.md). Convened, not
standing (Directive [#1](../../../kernel/laws/prime-directives.md)).

## Inputs
- The proposed change, the number before and after, and the **diagnosis** behind it.
- The **playtest and/or telemetry evidence**, with method, sample, and window stated.
- The blast radius — what else the change touches across economy, progression, and
  competitive.
- Prior related decisions from the
  [balance-decisions](../../memory/registers/balance-decisions.md) register.

## Index
- [process.md](process.md)
- [output.md](output.md)
