# MTG-002 — Framework Self-Audit

**Meeting:** Architecture Council (framework governance session)
**Date:** 2026-06-26 · **Tier:** T2 · **Chair:** CTO
**Participants:** software-architect, documentation-engineer, product-manager-02, Chief Auditor
**Request / Context:** Operate the AI Software Company on itself — audit and improve the
framework. Source scan: [continuous-improvement](../../05-workflows/continuous-improvement.md).

### Consensus
- Append-only logs (ADR log, minutes) cannot coexist with the 50-line cap — they grow.
- Resolution: unbounded logs become **index files** pointing to **per-entry record files**.
- The councils README mislabels folder-based councils as "legacy files" — a real defect; fix now.

### Remaining Concerns
- *documentation-engineer:* two-step append (record + index row) is easy to forget — mitigate
  with the updated templates. *Chief Auditor:* migrating ADR-0001 must not lose its text.

### Risks
| Risk | Likelihood | Impact | Owner | Mitigation |
|------|-----------|--------|-------|-----------|
| Record/index drift | med | low | documentation-engineer | templates enforce both steps |
| Lost history on migrate | low | high | Chief Auditor | copy ADR-0001 verbatim, don't delete |

### Alternatives Considered
Raise the 50-line cap (rejected — it is Prime Directive #9); one monolithic log (rejected — breaks cap).

### Recommendation
Adopt **[ADR-0002](../adr/ADR-0002-logs-as-index-and-entries.md)**. Fix councils README. Log
the rest as proposals (FI-002…FI-004).

### Implementation Strategy
Create `07-memory/adr/` + `07-memory/minutes/`; convert the two logs to indexes; update the
two templates; via [governance](../../00-company/governance.md).

### Owners & Next Steps
- [x] ADR-0002 recorded — CTO
- [x] councils README corrected — documentation-engineer
- [ ] backfill real entries as work flows — product-manager-02

### Memory Updates Triggered
- [x] [adr/ADR-0002](../adr/ADR-0002-logs-as-index-and-entries.md) · [x] [lessons-learned](../lessons-learned.md) · [x] [future-improvements](../future-improvements.md)
