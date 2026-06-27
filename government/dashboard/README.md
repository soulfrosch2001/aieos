# Government Dashboard
Status: stable
Type: department
Owner: Supreme Orchestrator
Extends: none

The enterprise's single pane of glass. The Government rolls every mounted company's
status into one view via the [reporting protocol](../../kernel/protocols/reporting.md)
— a **read-only aggregation** (Directive #2: the Government never reaches into a
company to compute its numbers; it reads what the company publishes).

## Contents
| File | What it is |
|------|------------|
| [dashboard.md](dashboard.md) | The generated enterprise roll-up (regenerate any time). |
| [build-dashboard.mjs](build-dashboard.mjs) | The generator: scans the registry and each company, emits `dashboard.md`. |

## Regenerate
```
npm run dashboard
```
It reads [../../kernel/registry/registry.md](../../kernel/registry/registry.md) and each
company's tree (executives, departments, councils, workflows, registers, health report,
declared kernel range) and writes [dashboard.md](dashboard.md). It writes nothing inside
any company.

## Who reads it
The [Supreme Orchestrator](../supreme-orchestrator/) for coordination load, the
[Chief Auditor](../chief-auditor/) for quality posture, and the
[CEO](../ceo/) for cross-company priorities.
