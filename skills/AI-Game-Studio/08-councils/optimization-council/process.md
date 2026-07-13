# 🛠️ Optimization Council — Process

## Discussion Rules
Follow [../debate-protocol.md](../debate-protocol.md) and [../communication-protocol.md](../communication-protocol.md).
Here the strongest evidence wins, not the strongest opinion — and the evidence is a
**profiler capture**, not a hunch. Every proposed optimization has a named honest owner who
must state both the projected win **and** its risk to the player experience. Fake consensus
is a defect; dissent is recorded, never suppressed (**Prime Directive #4**). The chair
appoints a devil's advocate if the room agrees on a "free win" too fast — there is no such
thing as a free optimization, only ones whose cost you haven't found yet.

## Decision Process
1. **Profile first.** The [optimization-engineer](../../03-programming/optimization-engineer/)
   presents the capture and names the **single biggest hotspot** by cost. No capture on the
   table → the session is adjourned. We do not optimize from memory or vibes.
2. **Confirm the hotspot.** The [performance-tester](../../07-qa/performance-tester/) validates
   the measurement — right platform, right scene, repeatable, on the weakest target. A hotspot
   that can't be reproduced isn't one.
3. **Plan the campaign.** Each owner proposes an approach against *that* hotspot only.
   Anchor on three questions: *what is the projected ms/MB win? what does it cost in player
   experience? is it reversible?* Pursue the biggest, cheapest, safest win — in that order.
   Do **not** scatter effort across ten small wins while the one big hotspot stands.
4. **Measure the win.** Execute, then re-capture under the *same* conditions and record the
   **before/after delta**. An optimization with no measured win did not happen, no matter how
   clever it reads. If the player experience regressed, the campaign **failed** even if the
   number improved — we never trade frame time for worse feel.
5. **Reversibility check** — prefer the fix cheapest to undo; keep the slow-but-correct path
   behind a toggle until the fast path is proven.
6. No consensus at the round limit → the **chair decides** and records every dissent.

## Approval Gate by Tier
- **T2 — a local fix against a profiled hotspot:** the council **+**
  [Executive Orchestrator](../../01-executive/executive-orchestrator/) sign off, and the
  [performance-tester](../../07-qa/performance-tester/) confirms the before/after delta is
  real and the player experience did not regress.
- **T3 — the campaign implies a structural change:** this council does **not** decide alone.
  It hands the finding to the [performance-council](../performance-council/) /
  [technical-council](../technical-council/); the
  [technical-director](../../01-executive/technical-director/) signs off and may veto.
- A campaign is **provisional until the re-capture proves the win** on the weakest target
  platform. Projected savings are not savings.

## Escalation
- Technique deadlock → [optimization-engineer](../../03-programming/optimization-engineer/) as
  chair decides.
- Win vs. player experience → the win loses by default; unresolved →
  [gameplay-council](../gameplay-council/) owns the feel call.
- Fix exceeds a local change (structural) → [performance-council](../performance-council/) /
  [technical-council](../technical-council/) →
  [Executive Orchestrator](../../01-executive/executive-orchestrator/) →
  [technical-director](../../01-executive/technical-director/).
- Quality objection → [chief-auditor](../../01-executive/chief-auditor/), who may block
  regardless of tier. See [../../00-company/decision-authority.md](../../00-company/decision-authority.md).
- The standing workflow this council drives:
  [../../09-workflows/performance-optimization.md](../../09-workflows/performance-optimization.md).
