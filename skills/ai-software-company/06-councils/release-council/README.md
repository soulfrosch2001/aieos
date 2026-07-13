# Release Council
Status: stable
Type: council
Owner: chair
Extends: none

> A **convened** council — it does not stand. See
> [../README.md](../README.md) and [../debate-protocol.md](../debate-protocol.md).

## Identity
- **Name:** Release Council (go / no-go).
- **Convened by:** the [COO](../../01-executive/coo/) (chair).
- **Convened when:** **every T2+ release**, per
  [../../00-company/engagement-tiers.md](../../00-company/engagement-tiers.md).

## Participants
- **Chair:** [COO](../../01-executive/coo/) — owns *that it ships*.
- **Blocking veto:** [Chief Auditor](../../01-executive/chief-auditor/) — may **block**
  any release on quality, security, or integrity grounds, regardless of tier.
- **Core:** release owner, QA lead, the implementing specialist(s).

## Objectives
- A single **go / no-go** call on a candidate build.
- Confirm rollback readiness and the release checklist is green.
- Out of scope: live incidents (see [../incident-council/](../incident-council/)).

## Inputs
- Test + review results; the change's tier and risk register.
- A working **rollback plan** and the [release](../../05-workflows/release.md) checklist.
- Any open Chief Auditor objections.

## Index
- [process.md](process.md) — go/no-go rules.
- [output.md](output.md) — minutes & memory updates.
