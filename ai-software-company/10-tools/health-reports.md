# health-reports.md — Running a Health Report

> How to produce a project health report and where the outputs go.
> System: [quality-system.md](quality-system.md). Metrics: [metrics.md](metrics.md).

## Steps to Run
1. **Trigger** — a release gate, executive request, or major architecture change.
2. **Gather metrics** — collect per [metrics.md](metrics.md) at the right cadence.
3. **Score** — the [Chief Auditor](../01-executive/chief-auditor/) bands each of
   the 10 dimensions 0–5, adds a one-line justification and trend (↑↓→).
4. **Fill the template** — copy
   [../09-templates/health-report-template.md](../09-templates/health-report-template.md)
   and complete Scorecard, Top Risks, What Improved, Recommended Actions.
5. **Sign off** — Chief Auditor checks the box and dates it.

## Where Outputs Go
The finished report is the canonical artifact for that gate. Its findings are
then **appended** to the relevant memory registers (append-mostly):

- Recommended actions → [../07-memory/roadmap.md](../07-memory/roadmap.md) or
  `future-improvements.md`.
- New debt → [../07-memory/technical-debt.md](../07-memory/technical-debt.md).
- Insights → [../07-memory/lessons-learned.md](../07-memory/lessons-learned.md).
- The report event → [../07-memory/meeting-history.md](../07-memory/meeting-history.md).

## Cadence
Minimum at every release gate; on demand otherwise. Never rewrite a past report —
issue a new dated one and let the trend column tell the story.
