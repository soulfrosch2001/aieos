# Workflow: hotfix

**Purpose:** Stop a live emergency — crash wave, progression blocker, exploit, monetization break — with the smallest safe change, shipped fast and verified.
**Default Tier:** **T4 — Crisis.** This is incident command, not normal development.

## Purpose
A hotfix trades scope for speed: the goal is to stop the bleeding, not to fix everything. Discipline under pressure prevents a hotfix from becoming a second incident. The [release-council](../08-councils/release-council/) and [security-council](../08-councils/security-council/) run this live, with the [production-director](../01-executive/production-director/) as incident commander.

## Participants
- [production-director](../01-executive/production-director/) — incident commander (the call-maker).
- [technical-director](../01-executive/technical-director/) — technical authority.
- On-call engineer for the affected system (e.g. [networking-programmer](../03-programming/networking-programmer/), [gameplay-programmer](../03-programming/gameplay-programmer/)).
- [build-engineer](../03-programming/build-engineer/) — emergency build + deploy.
- [qa-lead](../07-qa/qa-lead/) — fast verification.
- [release-council](../08-councils/release-council/) + [security-council](../08-councils/security-council/) (if exploit/security).
- [community-manager](../11-marketing/community-manager/) — player comms.
- [chief-auditor](../01-executive/chief-auditor/) — final veto on the ship.

## Inputs
- Live incident signal: telemetry spike, crash reports, exploit, store flag.
- Severity + blast radius (how many players, how badly).

## Steps
```
detect → declare incident → assess blast radius → mitigate (smallest safe change) →
fast verify → [GATE: ship?] → deploy → monitor → comms → postmortem → memory
```
1. **Declare** — production-director declares a T4 incident and assembles the room.
2. **Assess** — confirm severity, blast radius, and whether a rollback beats a fix.
3. **Mitigate** — smallest safe change (or feature flag / server-side toggle / rollback).
4. **Fast verify** — qa-lead verifies the fix and checks for obvious new breakage.
5. **Ship gate** — production-director + technical-director + chief-auditor approve the emergency deploy.
6. **Deploy & monitor** — build-engineer ships; watch telemetry for the metric to recover.
7. **Comms** — community-manager posts status updates.
8. **Postmortem** — blameless review; every hotfix owes the codebase a postmortem.
9. **Record** — log incident, fix, and follow-ups.

## Review Gates
- **Gate A — Smallest-safe-change gate:** no scope creep; the fix is targeted.
- **Gate B — Ship gate:** named emergency sign-off (commander + TD + auditor).
- **Gate C — Recovery gate:** post-deploy telemetry confirms the incident is resolved.

## Approval Process
T4: [production-director](../01-executive/production-director/) commands; emergency ship requires [technical-director](../01-executive/technical-director/) + [chief-auditor](../01-executive/chief-auditor/) per [Prime Directive 7](../00-company/COMPANY.md). Normal council debate is suspended for speed but documented after.

## Outputs
Deployed hotfix (or rollback), player comms, recovery confirmation, and a blameless postmortem.

## Completion Criteria
Incident resolved (telemetry recovered), comms posted, postmortem written, follow-up tasks filed, memory updated.

## Memory Updates
- [../10-memory/known-bugs.md](../10-memory/known-bugs.md) — incident + fix.
- [../10-memory/lessons-learned.md](../10-memory/lessons-learned.md) — **mandatory** postmortem entry.
- [../10-memory/technical-debt.md](../10-memory/technical-debt.md) — follow-up to do the *real* fix.
- [../10-memory/meeting-history.md](../10-memory/meeting-history.md) — incident timeline.
