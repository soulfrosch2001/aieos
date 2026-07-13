# Workflow: release-campaign
Status: stable
Type: workflow
Owner: label-orchestrator
Extends: release
**Purpose:** Release a finished record and run the promotion campaign around it.
**Default Tier:** T3  ·  **Owner:** operations-director
**Extends:** release

## Trigger
One or more masters have cleared track-production and the operations-director
schedules a release date with a campaign around it.

## Participants
- operations-director — owns the release schedule and decides sequencing alone.
- release-coordinator — owns delivery to distribution and the launch checklist.
- marketing-manager — owns the campaign narrative, assets, and channel plan.
- label-head — confirms the release fits label direction and timing.
- chief-auditor — gates delivery readiness; never produces, never directs.
- label-orchestrator — fans out marketing, delivery, and assets in parallel.

## Inputs
- Conforming masters from [track-production](track-production.md).
- A release slot and territory plan from the schedule.
- Artist availability for promotion from the artist-manager.

## Steps
```
masters → operations-director (set slot)
   ├─ marketing-manager (narrative · assets · channels)
   └─ release-coordinator (metadata · distribution · checklist)
   → [GATE A: delivery-ready] → chief-auditor (readiness audit)
       → go-live
       → [GATE B: launch verified] → measure → debrief
           → record outcome → release-log
```
1. **Schedule** — operations-director — fix the release date and sequence the slot.
2. **Build (parallel)** — marketing-manager + release-coordinator — campaign and distribution package in disjoint ownership ([Directive #4](../../kernel/laws/prime-directives.md), [orchestration](../../kernel/protocols/orchestration.md)).
3. **Audit** — chief-auditor — verify metadata, rights, and delivery readiness.
4. **Launch & measure** — release-coordinator + marketing-manager — go live and capture launch signal.
5. **Record** — update the memory registers below.

## Review Gates
- **Gate A — delivery-ready:** go-live is blocked until metadata, rights, artwork, and distribution package pass the chief-auditor's readiness audit.
- **Gate B — launch verified:** the release is not marked done until live availability is confirmed across the planned channels; a failed verification triggers rollback before the campaign spends further.

## Approval Process
T3 releases are approved by the operations-director (COO-level, sequencing) with
the label-head (CEO-level) confirming direction and the chief-auditor holding the
quality veto, per [../../kernel/laws/decision-authority.md](../../kernel/laws/decision-authority.md).
T3 convenes the [catalog-council](../councils/catalog-council/) when the release
reshapes catalog strategy.

## Outputs
- A live release across planned territories and channels.
- A campaign report and launch metrics per [../../kernel/protocols/reporting.md](../../kernel/protocols/reporting.md).

## Completion Criteria
- [ ] Delivery package passes the readiness audit.
- [ ] Live availability verified across planned channels.
- [ ] Launch metrics and lessons written to the registers below.

## Memory Updates
- [release-log](../memory/registers/release-log.md) — release outcome, launch metrics, and lessons learned.
- [catalog-decisions](../memory/registers/catalog-decisions.md) — sequencing and positioning decisions that shape the catalog.

## Failure / Rollback
A failed Gate A holds the release date; the slot is re-scheduled rather than
shipped incomplete. A failed Gate B rolls back the go-live (take-down or hold) and
pauses spend until availability is corrected. All changes are appended as dated
entries, never erased ([Directive #7](../../kernel/laws/prime-directives.md)).
