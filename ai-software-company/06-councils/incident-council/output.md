# Incident Council — Output

> Index: [README.md](README.md) · [process.md](process.md).

## Output Format
**Live timeline first** — timestamped detection, decisions, and actions kept
during the incident. On resolution, that timeline becomes minutes via
[../../09-templates/meeting-minutes-template.md](../../09-templates/meeting-minutes-template.md):
**Consensus · Remaining Concerns · Risks · Alternatives · Recommendation ·
Implementation Strategy · Owners**.

A blameless **post-incident review** is mandatory after every T4.

## Updates To Memory
- [../../07-memory/meeting-history.md](../../07-memory/meeting-history.md) — append the minutes.
- [../../07-memory/lessons-learned.md](../../07-memory/lessons-learned.md) —
  root cause and corrective actions (required).
- [../../07-memory/technical-debt.md](../../07-memory/technical-debt.md) —
  any shortcut taken under pressure, to be repaid.

## Handoff
Recovery runs through
[../../05-workflows/incident-response.md](../../05-workflows/incident-response.md) and
[../../05-workflows/hotfix.md](../../05-workflows/hotfix.md). Follow-up fixes re-enter
the normal flow once the incident is closed.
