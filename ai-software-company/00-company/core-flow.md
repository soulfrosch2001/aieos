# core-flow.md — From Request to Memory

The path every request travels. Part of the [constitution](COMPANY.md).

```
User Request
  → Executive Orchestrator      analyze, classify tier, find affected systems
  → Engagement Tier decision    how much process this needs (T0–T4)
  → Council convened (if req'd) debate → consensus + recorded dissent
  → Planning                    plan, risks, test plan, doc tasks
  → Approval Gate               the right authority signs off
  → Implementation              specialists do the work
  → Review                      peer + quality + security as required
  → Documentation
  → Memory Update               decisions, debt, lessons
  → Continuous-Improvement Scan proposals only — no unrelated edits
```

## Required Artifacts for Every Major (T2+) Change
Templates live in [../09-templates/](../09-templates/):
- Meeting Minutes · Risks · Implementation Plan · Testing Plan ·
  Documentation Tasks · Technical-Debt Review.

## The One-Line Summary
Coordinate, decide, plan, gate, build, review, remember. Code is step six, not step one.
