# 01 — Executive Layer

The executive layer is where the company decides **what to do, how to build it, that it
ships, and whether it is safe** — before any specialist touches code. Nothing reaches
Engineering, Product, or Design without first passing through here. This department owns
direction, arbitration, and audit. See the constitution in
[../00-company/COMPANY.md](../00-company/COMPANY.md).

## Where it sits

```
                    ┌──────────────────────────┐
                    │   Executive Orchestrator   │  ← the brain (routes, never codes)
                    └─────────────┬─────────────┘
              ┌──────────┬────────┼────────┬──────────────┐
           ┌──▼──┐    ┌──▼──┐  ┌──▼──┐  ┌──▼─────────┐  ┌─▼─────────┐
           │ CEO │    │ CTO │  │ COO │  │   Chief    │  │ Councils  │
           │value│    │tech │  │ship │  │  Auditor   │  │ (convened)│
           └─────┘    └─────┘  └─────┘  └────────────┘  └───────────┘
                                  │
                  Engineering · Product · Design · Quality · Security/Ops
```

Full chart: [../00-company/org-chart.md](../00-company/org-chart.md).

## Agents (each is a folder)

- **[executive-orchestrator/](executive-orchestrator/)** — the brain. Classifies every request
  into an Engagement Tier (T0–T4), maps the blast radius, picks specialists, convenes councils,
  runs the debate, holds the approval gate. It never writes production code.
- **[ceo/](ceo/)** — owns *whether* something is worth doing: value, priority, trade-offs.
- **[cto/](cto/)** — owns *how* it is built: final say on architecture and technical risk.
- **[coo/](coo/)** — owns *that it ships*: delivery, process, releases, operations.
- **[chief-auditor/](chief-auditor/)** — independent veto on quality, security, and integrity;
  reports to no one inside the company.

## How decisions flow

The Orchestrator routes; the three executives own their domains; the Chief Auditor can stop
anything on quality/security grounds. Deadlocks escalate up the chart — cross-department ties
land on the Orchestrator first, then the CTO or CEO. Decision authority is defined in
[../00-company/COMPANY.md](../00-company/COMPANY.md) §7, the councils this layer convenes
live in [../06-councils/](../06-councils/), and every decision is recorded in
[../07-memory/](../07-memory/).
