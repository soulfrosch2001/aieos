# Decision 0009 — Fork-detection rule (stdlib copies)
Type: report
Date: 2026-06-29
Tier: T3 (Strategic — framework evolution, Directives #6, #7)
Council: none (continuation of Decision 0008's deferred backlog)
Status: CLOSED — built and verified (2026-06-29)

## Summary
Closes the single biggest integrity gap the careless-contributor simulation found
(Decision [0008](0008-people-entering-simulation-and-hardening.md)): a company that
**copies** a stdlib workflow/register verbatim under a new name — instead of overriding it
**by name** — passed every structural check. A new conformance rule now catches it. Gate:
**13 rules, 0/0** in both scopes.

## Built
- **`tests/conformance/rules/no-stdlib-fork.mjs`** (error level). For each company workflow
  and memory register, it computes Jaccard similarity (over non-trivial content lines)
  against the stdlib files of the same type and flags any whose best match is ≥ **0.60**.
  Same-named files are exempt — those are legitimate **by-name overrides**; the fork pattern
  is a near-copy under a *different* name (Directive #6: inherit, don't fork).

## Why the threshold is safe
Measured on the real repo first: legitimate, distinct company entities score ≤ **0.16**
against any stdlib file; a verbatim copy scores **1.00**. The 0.60 cutoff sits far from both
— distinct work passes, copies (even lightly edited) are caught.

## Verification
- Real repo: **0 findings** (no false positives), gate green at 13 rules.
- Negative test: copying `workflows/research.md` into a company as a new name was flagged
  `looks forked from stdlib workflows/research.md (similarity 1.00)`; removing it restored 0/0.

## Scope / deferred
- Covers single-file entities (workflows, memory registers). **Councils** (3-file dirs) and
  agents are not yet fork-checked. The other 0008 backlog items remain open
  (inheritance link-style parsing, identity-block without README, orphan-entity warning,
  macOS installer, code-signing).

## Memory updates
- This record; its audio summary (`resumo/audio/0009-resumo.*`); the CHANGELOG entry.
