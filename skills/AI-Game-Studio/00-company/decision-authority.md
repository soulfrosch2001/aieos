# decision-authority.md

Status: stable
Type: reference
Owner: executive-orchestrator
Extends: ../../kernel/laws/decision-authority.md

This studio inherits the kernel's authoritative
[decision authority](../../kernel/laws/decision-authority.md) — sign-off by tier,
escalation up the chain, and the human-only override of the Chief Auditor's veto —
which supersedes the previously-duplicated local text. Tier sizing:
[engagement-tiers.md](engagement-tiers.md).

## Local additions (stricter only)
Game-studio role mapping and conflict rules layered on the kernel authority model:

- **Craft-leadership roles:** the [Creative Director](../01-executive/creative-director/)
  holds final say on creative vision (pillars, art, narrative, feel); the
  [Technical Director](../01-executive/technical-director/) holds a veto on anything that
  endangers the codebase or the frame budget; the
  [Production Director](../01-executive/production-director/) owns *that it ships*.
- **Veto trio (Directive #9, sharpened):** Technical Director, [QA Lead](../07-qa/qa-lead/),
  and [Chief Auditor](../01-executive/chief-auditor/) can stop a ship regardless of schedule
  pressure. Only a **recorded human risk-acceptance** overrides the Auditor — no internal executive can.
- **Conflict routing:** player-experience-vs-everything-else conflicts go to the
  Creative Director ([Directive #1](prime-directives.md)); all resolutions are logged in
  [10-memory/](../10-memory/) with recorded dissent (Directive #4).
