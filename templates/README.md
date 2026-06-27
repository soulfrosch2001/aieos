# templates/ — Base Templates (the standard library's base classes)

Every entity in AIEOS is built by copying one of these and filling it in. A
company that needs a variant **overrides by name** — it copies the template into
its own folder and the loader resolves the local version over the default. See
[../kernel/loader/README.md](../kernel/loader/README.md).

| Template | Builds | Contract |
|----------|--------|----------|
| [agent.template.md](agent.template.md) | An agent (5 files). | [agent](../kernel/contracts/agent.md) |
| [department.template.md](department.template.md) | A department index. | [department](../kernel/contracts/department.md) |
| [company.template.md](company.template.md) | A new company plugin. | [company](../kernel/contracts/company.md) |
| [company-adapter.template.md](company-adapter.template.md) | An `AIEOS.md` to mount an **existing** company non-destructively. | [plugin](../kernel/contracts/plugin.md) |
| [council.template.md](council.template.md) | A council (3 files). | [council](../kernel/contracts/council.md) |
| [workflow.template.md](workflow.template.md) | A workflow. | [workflow](../kernel/contracts/workflow.md) |
| [memory-register.template.md](memory-register.template.md) | A memory register. | [memory-register](../kernel/contracts/memory-register.md) |
| [kpi.template.md](kpi.template.md) | A KPI definition. | — |
| [report.template.md](report.template.md) | Council minutes / health reports. | — |

**Rule:** never invent a bespoke shape. If a template is missing, propose adding
one (Directive #7) rather than improvising.
