<!-- TEMPLATE — Company plugin. Contract: ../kernel/contracts/company.md -->

# <Company Name>
Status: draft
Type: company
Owner: <its CEO>
Extends: kernel + stdlib

## Charter
<What this company does, who it serves, its north star.>

## Inherited from AIEOS
- Laws: all [Prime Directives](../kernel/laws/prime-directives.md).
- Protocols: communication, orchestration (15-agent), escalation, memory-flow, lifecycle.
- Stdlib defaults: templates, workflows, councils, memory schemas.

## Local overrides (by name)
| Entity | Overrides stdlib | Why |
|--------|------------------|-----|
| <name> | <stdlib name> | <reason> |

## Structure
```
00-company/     local charter, org-chart, local rules (stricter only)
01-executive/   CEO, CTO, COO, Chief Auditor (mapped to decision-authority levels)
0N-<dept>/      departments → agents
councils/       local councils (extends stdlib blueprints)
workflows/      local workflows (extends stdlib library)
memory/         local registers (extends stdlib schemas)
reports/        KPI + health reports
```

## Departments
- <NN-name> — <owns>

## KPIs
<Top-level measures — link kpi.template.md instances.>

## Mounting
Registered in [../kernel/registry/](../kernel/registry/). See
[../kernel/contracts/plugin.md](../kernel/contracts/plugin.md).
