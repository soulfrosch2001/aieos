# Workflow: release-candidate

**Purpose:** Promote a feature-complete build to a release candidate (RC) — stabilize, certify, and earn a Go/No-Go from the [release-council](../08-councils/release-council/).
**Default Tier:** **T3 — Strategic** (a planned release), escalating toward T4 discipline as the ship date nears.

## Purpose
The RC workflow is where ambition meets reality. Feature work stops; only stabilization counts. The bar is binary: would we be proud to put our name on this build for players? The [release-council](../08-councils/release-council/) runs a formal Go/No-Go with veto holders present.

## Participants
- [producer](../06-production/producer/) / [executive-producer](../06-production/executive-producer/) — run the release.
- [build-engineer](../03-programming/build-engineer/) — produces signed, reproducible builds.
- [qa-lead](../07-qa/qa-lead/) + [regression-tester](../07-qa/regression-tester/) + [console-tester](../07-qa/console-tester/) — certification passes.
- [release-council](../08-councils/release-council/) — the Go/No-Go body.
- [technical-director](../01-executive/technical-director/), [chief-auditor](../01-executive/chief-auditor/), [production-director](../01-executive/production-director/) — veto holders.
- [marketing-director](../11-marketing/marketing-director/) — launch readiness.

## Inputs
- A feature-complete build + the must-fix bug list from [../10-memory/known-bugs.md](../10-memory/known-bugs.md).
- Cert requirements (platform TRC/XR/lotcheck) and the release checklist.
- Roadmap commitment from [../10-memory/roadmap.md](../10-memory/roadmap.md).

## Steps
```
feature freeze → RC build → full regression + cert pass → soak/perf on all targets →
must-fix triage → [GATE: Go/No-Go] → sign-off → handoff to release/store → memory
```
1. **Feature freeze** — only stabilization commits past this line; every change is risk-assessed.
2. **RC build** — build-engineer produces a signed, reproducible candidate.
3. **Certification** — full regression, platform cert, [performance-optimization.md](performance-optimization.md) checks on all target hardware.
4. **Soak test** — long-run stability (memory leaks, save corruption, crash-free %).
5. **Must-fix triage** — release-council ranks blockers; only blockers get fixed (re-spin RC if needed).
6. **Go/No-Go gate** — release-council convenes; each veto holder votes.
7. **Sign-off & handoff** — on Go, hand to [patch.md](patch.md)/store submission; on No-Go, re-spin.
8. **Record** — producer logs the verdict and crash-free baseline.

## Review Gates
- **Gate A — Cert gate:** platform certification passes; no cert blockers.
- **Gate B — Stability gate:** crash-free % and soak targets met (hard block).
- **Gate C — Go/No-Go gate:** [release-council](../08-councils/release-council/) consensus; any veto holder can No-Go.

## Approval Process
T3: [release-council](../08-councils/release-council/) Go/No-Go. [technical-director](../01-executive/technical-director/), [qa-lead](../07-qa/qa-lead/), and [chief-auditor](../01-executive/chief-auditor/) each hold veto per [Prime Directive 7](../00-company/COMPANY.md). [production-director](../01-executive/production-director/) owns the ship call.

## Outputs
A signed RC build, certification record, Go/No-Go verdict, release notes draft, and a stability baseline.

## Completion Criteria
Cert + stability gates passed, Go recorded with named sign-offs, build handed to submission, memory updated.

## Memory Updates
- [../10-memory/meeting-history.md](../10-memory/meeting-history.md) — **mandatory** Go/No-Go record.
- [../10-memory/known-bugs.md](../10-memory/known-bugs.md) — known-shipped issues, ranked.
- [../10-memory/roadmap.md](../10-memory/roadmap.md) — release status.
- [../10-memory/performance-reports.md](../10-memory/performance-reports.md) — final stability baseline.
