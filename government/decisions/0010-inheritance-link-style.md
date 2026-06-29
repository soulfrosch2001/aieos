# Decision 0010 — Inheritance check covers link-style override tables
Type: report
Date: 2026-06-29
Tier: T2 (Tactical — conformance coverage, Directive #7)
Council: none (continuation of Decision 0008's deferred backlog)
Status: CLOSED — built and verified (2026-06-29)

## Summary
Closes the override-table inconsistency the careless-contributor simulation found
(Decision [0008](0008-people-entering-simulation-and-hardening.md)): the
`inheritance-claims-resolve` rule only parsed **backtick** override rows
(`` `councils/x` ``), so the ~half of companies that write their "Local overrides (by
name)" tables in **markdown-link** style (`[campaign-council](../councils/...)`) had their
inheritance claims unchecked by this rule. The rule now handles both. Gate: **13 rules,
0/0** in both scopes.

## Built
- Extended `tests/conformance/rules/inheritance-claims-resolve.mjs` to resolve either style:
  - **backtick** `` `councils/review-council` `` → path relative to the **company root**.
  - **markdown link** `[campaign-council](../councils/campaign-council/)` → target relative
    to the **AIEOS.md file** (like a normal link). http/mailto/placeholder targets are skipped.

## Verification
- Real repo: **0 findings** — every link-style override across the fleet resolves; gate green.
- Negative test (synthetic adapter): a link-style row pointing at a missing
  `../councils/ghost-council/` was flagged, while an existing `../councils/real-council/`
  was correctly ignored.

## Note
The `links` rule already backstopped link existence; this makes the *inheritance* rule
itself consistent across both table styles, so the same logical mistake is caught the same
way in every company.

## Scope / deferred (remaining 0008 backlog)
- Fork-check for councils/agents (workflows + registers done in 0009).
- `identity-block` when an agent README is absent; orphan-entity warning; macOS installer;
  installer code-signing.

## Memory updates
- This record; its audio summary (`resumo/audio/0010-resumo.*`); the CHANGELOG entry.
