# ⚡ Performance Council — Process

## Discussion Rules
Follow [../debate-protocol.md](../debate-protocol.md) and [../communication-protocol.md](../communication-protocol.md).
Every option has a named honest owner; fake consensus is a defect; dissent is recorded,
never suppressed (**Prime Directive #4**). One rule overrides argument here: **profile
first**. A claim about cost is not admissible without a measurement behind it — "it feels
fine" and "it should be cheap" are not positions. The chair surfaces the strongest
counter-argument before calling consensus, and appoints a devil's advocate if everyone
agrees a budget is safe too quickly.

## Decision Process
1. The [optimization-engineer](../../03-programming/optimization-engineer/) frames the
   **budget question** and the platform at risk — the number, the target, the headroom — **not** the fix.
2. The [performance-tester](../../07-qa/performance-tester/) presents the **measured
   numbers**: a profiler capture per target platform, the test scene, and the methodology.
   No capture, no verdict — the item goes back to be measured.
3. Each core member reads the data against their domain:
   [graphics-programmer](../../03-programming/graphics-programmer/) on GPU/VRAM,
   [engine-programmer](../../03-programming/engine-programmer/) on CPU/memory/streaming.
   Position with reasoning, anchored to the budget, not to taste.
4. Anchor on three questions: *does it fit the frame budget on the **weakest** target? does
   it fit the memory budget? does it hold the load-time target?* The worst platform rules.
5. If it doesn't fit, decide what gives — cut, scale per platform, defer, or take **debt**
   with a named paydown trigger. If a targeted campaign is the answer, hand it to the
   [optimization-council](../optimization-council/); this council does not do the work.
6. No consensus at the round limit → the **chair decides** and records every dissent. A
   frame-budget breach the [technical-director](../../01-executive/technical-director/)
   will not accept is **not** a tie to be voted away.

## Approval Gate by Tier
- **T2 — budget at risk inside existing targets:** the council **+**
  [Executive Orchestrator](../../01-executive/executive-orchestrator/) sign off. The
  [technical-director](../../01-executive/technical-director/) **vetoes any frame-budget
  breach** (Prime Directive #7) — only a recorded human risk-acceptance overrides it.
- **T3 — platform-target change or budget re-baseline:** requires
  [technical-director](../../01-executive/technical-director/) sign-off (technical risk) and
  the executive board; the [chief-auditor](../../01-executive/chief-auditor/) may veto.
- **T4 — release perf Go/No-Go:** a verdict is provisional until **measured on every target
  platform under representative load** — see
  [../../07-qa/performance-tester/](../../07-qa/performance-tester/). A red platform blocks ship.

## Escalation
- Measurement deadlock (whose number is right) → re-profile with an agreed scene; the
  [optimization-engineer](../../03-programming/optimization-engineer/) as chair decides.
- Feel vs. frame budget ← arrives from [gameplay-council](../gameplay-council/); pixel vs.
  frame from art. Unresolved → [Executive Orchestrator](../../01-executive/executive-orchestrator/)
  → [technical-director](../../01-executive/technical-director/), who holds the frame budget.
- Scope/ship vs. budget → [production-director](../../01-executive/production-director/).
- Quality objection → [chief-auditor](../../01-executive/chief-auditor/), who may block
  regardless of tier. See [../../00-company/decision-authority.md](../../00-company/decision-authority.md).
