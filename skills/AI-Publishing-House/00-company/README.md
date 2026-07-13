# AI Publishing House — Company Root
Status: stable
Type: index
Owner: ceo
Extends: kernel + stdlib

## What this folder is
`00-company/` holds the house's charter, its kernel mount adapter, its org chart,
and the local rules that bind the whole company. It is the entry point for the
kernel-native **AI Publishing House** — a book publishing house running
acquisitions, editorial, and production/distribution on AIEOS, forking nothing
([Directive #6](../../kernel/laws/prime-directives.md)).

## Files in this folder
| File | Purpose |
|------|---------|
| [COMPANY.md](COMPANY.md) | Charter — what the house does, what it inherits, the stricter local rules it adds. |
| [AIEOS.md](AIEOS.md) | Kernel-native mount adapter — executive→authority mapping, local overrides, register mapping. |
| [org-chart.md](org-chart.md) | Reporting structure across the five executives and three departments. |
| [README.md](README.md) | This index. |

## The rest of the house
- **Executives** — [01-executive/](../01-executive/): ceo, editorial-director,
  production-director, chief-auditor, house-orchestrator.
- **Departments** — [02-acquisitions/](../02-acquisitions/),
  [03-editorial/](../03-editorial/), [04-production/](../04-production/).
- **Councils** — [acquisition-council](../councils/acquisition-council/),
  [editorial-council](../councils/editorial-council/).
- **Workflows** — [manuscript-acquisition](../workflows/manuscript-acquisition.md),
  [editing-pipeline](../workflows/editing-pipeline.md),
  [book-release](../workflows/book-release.md).
- **Memory** — [memory/](../memory/): catalog-decisions, editorial-standards,
  rights-and-sales.
- **Reports** — [reports/](../reports/): KPI and health.

## Kernel anchors
- [Prime Directives](../../kernel/laws/prime-directives.md) ·
  [Engagement tiers (T0–T4)](../../kernel/laws/engagement-tiers.md) ·
  [Decision authority](../../kernel/laws/decision-authority.md)
- [Resolution order](../../kernel/loader/resolution-order.md) ·
  [Protocols](../../kernel/protocols/)
