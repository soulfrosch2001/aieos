# Incident Council
Status: stable
Type: council
Owner: chair
Extends: none

> A **convened** council — it lives only during an incident. See
> [../README.md](../README.md) and [../debate-protocol.md](../debate-protocol.md).

## Identity
- **Name:** Incident Council (live).
- **Convened by:** the [COO](../../01-executive/coo/), or the standing
  **incident commander** if one is named.
- **Convened when:** a **T4** production incident — outage, breach, data loss —
  per [../../00-company/engagement-tiers.md](../../00-company/engagement-tiers.md).

## Participants
- **Chair:** [COO](../../01-executive/coo/) or the incident commander.
- **Core:** on-call engineer(s), the owning specialist for the failing system,
  a communications scribe.
- **Advisory:** Chief Auditor when a breach or data-integrity issue is in play.

## Objectives
- Restore service first; assign clear roles; keep a live timeline.
- Decide mitigation vs. rollback vs. hotfix in real time.
- Out of scope: planned releases (see [../release-council/](../release-council/)).

## Inputs
- The alert / detection signal and current blast radius.
- Access to the [incident-response](../../05-workflows/incident-response.md) and
  [hotfix](../../05-workflows/hotfix.md) workflows.

## Index
- [process.md](process.md) — live decision rules.
- [output.md](output.md) — timeline, post-incident, memory.
