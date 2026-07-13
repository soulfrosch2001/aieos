# 🛠️ Technical Council — Process

## Discussion Rules
Follow [../debate-protocol.md](../debate-protocol.md) and [../communication-protocol.md](../communication-protocol.md).
Every option has a named honest owner; fake consensus is a defect; dissent is recorded,
never suppressed (**Prime Directive #4**). The chair surfaces the strongest counter-argument
before calling consensus, and appoints a devil's advocate if a heavy architecture bet earns
agreement too fast. Keep the debate **engine-agnostic** — argue boundaries and data flow
first, and only attach Godot/Unity/Unreal sub-notes once the shape is settled (Prime Directive #6).

## Decision Process
1. The [technical-director](../../01-executive/technical-director/) frames the technical
   problem and the constraints at stake — the budget, the invariants, the format — **not**
   the chosen implementation.
2. Each core member states a position with reasoning. The
   [optimization-engineer](../../03-programming/optimization-engineer/) speaks **for the
   runtime**: where does this blow the frame, memory, or load budget?
3. Seek consensus on the trade-off, not the preference. Anchor on: *what does this couple?
   what does it cost to maintain? what breaks if we're wrong?*
4. **Feasibility gut-check** by [lead-programmer](../../03-programming/lead-programmer/):
   can the team build and own this? If the requirement is feel-driven rather than
   technical, loop [gameplay-council](../gameplay-council/) before committing.
5. **Reversibility check** (Prime Directive #3): for each option, name the cost to undo it.
   Prefer the design cheapest to reverse; a save-format or dependency call that locks the
   project gets one extra adversarial round.
6. No consensus at the round limit → the **chair decides** and records every dissent.

## Approval Gate by Tier
- **T2 — significant cross-cutting tech change:** the council **+**
  [Executive Orchestrator](../../01-executive/executive-orchestrator/) sign off.
- **T3 — new engine subsystem, architecture shift, or save-format change:** requires
  [technical-director](../../01-executive/technical-director/) sign-off (risk) and the
  executive board; the [chief-auditor](../../01-executive/chief-auditor/) may veto.
- A verdict is provisional until a **spike or prototype** confirms the budget and the
  reversibility assumptions hold (Prime Directive #3 — decide before build, then verify).

## Escalation
- Architecture deadlock → [technical-director](../../01-executive/technical-director/) as chair decides.
- Tech vs. feel → [gameplay-council](../gameplay-council/); tech vs. frame budget →
  [performance-council](../performance-council/); unresolved →
  [Executive Orchestrator](../../01-executive/executive-orchestrator/) →
  [technical-director](../../01-executive/technical-director/) for risk.
- Schedule / scope conflict → [production-director](../../01-executive/production-director/).
- Quality or security objection → [chief-auditor](../../01-executive/chief-auditor/), who
  may block regardless of tier; only a recorded **human** risk-acceptance overrides the
  veto (Prime Directive #7). See [../../00-company/decision-authority.md](../../00-company/decision-authority.md).
