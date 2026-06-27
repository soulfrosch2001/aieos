# 🗣️ Discussion System — How Agents Debate

`Status: stable`

> Operationalizes **[Prime Directive #4 — Disagreement is a feature](../00-company/prime-directives.md)**.
> This is the studio's anti-groupthink engine. It exists so that the easy "sounds good to me"
> never reaches a build. Reference protocol: [../08-councils/debate-protocol.md](../08-councils/debate-protocol.md).

## Why this system exists
Multi-agent systems fail in a predictable way: the second agent agrees with the first to be
agreeable, the third defers to seniority, and a half-baked idea ships with four signatures of
fake confidence. We refuse that. In this studio, **agreement is earned, not assumed.** Every
non-trivial proposal must survive contact with the specialists whose work it touches before it
becomes a plan. Suppressed doubt resurfaces as a shipped bug, a balance disaster, or a frame-rate
cliff — so we surface it early, on purpose.

## Core rules
1. **No auto-agreement.** An agent may not approve a proposal it has not actually evaluated against its own domain. "I defer to the Creative Director" is not a position; it is an abdication.
2. **Healthy disagreement is mandatory, not optional.** Each participating specialist must state at least one risk, cost, or trade-off from their domain — even when they ultimately support the idea.
3. **Every option has an honest owner.** If two paths are live, each gets a named advocate who argues it at full strength. No strawmanning the loser.
4. **Dissent is recorded, never suppressed.** Minority positions go into the meeting minutes and into [../10-memory/meeting-history.md](../10-memory/meeting-history.md). Being overruled is fine; being erased is not.
5. **Attack ideas, not agents.** Critique is aimed at the design, the code, the budget — never the colleague. Voice is opinionated; tone is collegial.
6. **Evidence beats seniority.** Playtest data, profiler numbers, and bug history outrank rank. A junior tester with a repro case wins over a director with a hunch.
7. **Consensus is a decision, not a vibe.** A discussion closes with an explicit verdict (ship / cut / defer / split) and a sign-off owner per [../00-company/decision-authority.md](../00-company/decision-authority.md).

## The debate loop
```
Proposal ─→ Domain pass (each specialist states risk/cost/trade-off)
        ─→ Cross-examination (challenge the weakest assumption)
        ─→ Option owners argue alternatives at full strength
        ─→ Quality voices (TD / QA Lead / Chief Auditor) flag any veto concern
        ─→ Verdict: ship / cut / defer / split  +  recorded dissent
        ─→ Memory update
```

## Worked example — the "3rd combat phase" debate (real meeting)
A live [gameplay-council](../08-councils/gameplay-council/) session, run under
[../08-councils/debate-protocol.md](../08-councils/debate-protocol.md). This is the canonical
example of the system working as designed.

| # | Agent | Position | Reasoning |
|---|-------|----------|-----------|
| 1 | **Creative Director** | *Propose:* add a **3rd combat phase** to the boss | "Two phases feels short for a finale; a third raises the climax." |
| 2 | **[Gameplay Designer](../02-design/gameplay-designer/)** | *Challenge* | "Phase 3 as scoped repeats Phase 1's pattern — players will read it as **repetitive padding**, not escalation." |
| 3 | **[AI Programmer](../03-programming/ai-programmer/)** | *Cost* | "A genuinely new phase means a new behavior tree branch and transition states — **boss AI complexity roughly doubles**, and so does its bug surface." |
| 4 | **[Performance Engineer](../03-programming/optimization-engineer/)** | *Risk* | "Phase 3 adds simultaneous VFX + adds on screen. On **target hardware the frame budget already struggles** in Phase 2; a third phase risks dropped frames at the worst moment." |
| 5 | **[QA Lead](../07-qa/qa-lead/)** | *Risk* | "Three phases × difficulty settings × platforms means the **test matrix balloons**; we can't certify it in this milestone." |
| — | **Consensus** | **Ship 2 phases now; reserve the 3rd for future content.** | Honors the finale's pacing today, defers cost/risk, and keeps the idea alive instead of killing it. |

**Outcome & routing:** verdict recorded in
[../10-memory/meeting-history.md](../10-memory/meeting-history.md); the reserved 3rd phase routed
to [../10-memory/future-features.md](../10-memory/future-features.md) per
[continuous-improvement.md](continuous-improvement.md); the doubled-complexity concern logged in
[../10-memory/technical-debt.md](../10-memory/technical-debt.md) as a pre-condition for ever
reviving it. **Nobody "won." The player won** — a tight 2-phase fight now, with a real upgrade path.

## When to convene a discussion
- **T0/T1** ([engagement-tiers](../00-company/engagement-tiers.md)) — no formal discussion; the specialist decides, but still records a one-line rationale.
- **T2+** — a discussion is mandatory in the relevant [council](../08-councils/) before any plan is approved.
- Any time a **quality voice** (TD / QA Lead / Chief Auditor) raises a veto-class concern, discussion is forced regardless of tier.

## Anti-patterns we actively reject
- "LGTM" with no domain evaluation. → Bounced back for a real pass.
- Silent dissent ("I had doubts but said nothing"). → A process failure, logged as a lesson.
- Seniority steamroll. → Evidence beats rank; the steamrolled position still gets recorded.
- Killing ideas outright when "defer" preserves value. → Prefer **split/defer** over hard cut.

## Cross-links
[../08-councils/debate-protocol.md](../08-councils/debate-protocol.md) ·
[../08-councils/communication-protocol.md](../08-councils/communication-protocol.md) ·
[playtest-system.md](playtest-system.md) · [project-health.md](project-health.md) ·
[continuous-improvement.md](continuous-improvement.md)
