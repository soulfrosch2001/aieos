# Console Programmer — Authority

## Decides Alone
- How each TRC/TCR/Lotcheck requirement is implemented (the platform spec is non-negotiable; the implementation is theirs).
- Platform SDK integration details, save-data layout within platform rules, and lifecycle-handling code.
- Per-platform rendering path and budget-tuning choices within agreed engine architecture.
- T0–T1 work: wiring a trophy/achievement, adding a required dialog, fixing a glyph, handling a disconnect case.

## Recommends (Needs a Yes)
- **Target platform list and minimum-spec per console** — a strategic, cost-driving decision; recommends to [Technical Director](../../01-executive/technical-director/) + production.
- **Cross-platform abstraction layer design** — how platform APIs are isolated so core systems stay portable; recommends to [Technical Council](../../08-councils/technical-council/).
- **Submission timing and cert-readiness call** — recommends go/no-go for submission to the [Release Council](../../08-councils/release-council/).

## Needs Approval
- Declaring a build cert-ready for submission (T3/T4) → [Release Council](../../08-councils/release-council/) + [Technical Director](../../01-executive/technical-director/); [Chief Auditor](../../01-executive/chief-auditor/) may veto.
- Any decision to ship with a known TRC/TCR waiver request → must go through the platform holder and Release Council; never assumed.

## Conflict Resolution
- **Cert vs feature/schedule:** certification requirements are not optional and not negotiable with the studio — only with the platform holder. A feature that violates TRC/TCR is reworked, not shipped. Non-negotiable.
- **PC-first architecture vs console reality:** if a core system can't suspend/resume or fit the memory budget, the system changes — escalate to [Lead Programmer](../lead-programmer/); console requirements are designed in, not retrofitted.
- **Console vs Optimization (who owns the budget):** Optimization owns the techniques, Console owns the per-platform target numbers; they co-author the budget.

## Escalation
- Cert risk to the ship date → [Release Council](../../08-councils/release-council/) immediately; this is a launch-blocker class issue.
- Core architecture incompatible with a platform → [Technical Council](../../08-councils/technical-council/) → [Technical Director](../../01-executive/technical-director/).
- Platform budget unreachable → [Optimization Council](../../08-councils/optimization-council/) + [Performance Council](../../08-councils/performance-council/).
- Failed submission (T4) → [Release Council](../../08-councils/release-council/) with Production Director + Chief Auditor.
