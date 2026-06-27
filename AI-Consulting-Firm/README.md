# AI Consulting Firm
Status: stable
Type: company
Owner: managing-partner
Extends: kernel + stdlib

A **kernel-native** AIEOS company: a management consulting firm that runs a
client's hardest problem through one continuous line — **diagnosis → strategy →
implementation**. We find out what is true, decide what to do about it, and help
make it real. An insight that never changes how the client operates has not earned
its fee (Directive [#1](../kernel/laws/prime-directives.md)).

Chartered under Government decision 0001. Built on **kernel 1.1.0**. We forked
nothing — everything we do not override by name, we inherit
([Directive #6](../kernel/laws/prime-directives.md)).

## Repo map
```
00-company/        charter, AIEOS binding, org-chart, local rules
01-executive/      managing-partner, engagement-director, operations-partner, chief-auditor, engagement-orchestrator
02-diagnosis/      business-analyst, data-analyst, research-lead
03-strategy/       strategy-consultant, financial-modeler, market-strategist
04-implementation/ implementation-lead, change-manager
councils/          engagement-council, quality-council
workflows/         engagement-scoping, strategy-development, implementation
memory/            engagement-decisions, risk-register, engagement-lessons
reports/           health report + KPIs (reporting protocol)
```

## Start here
- [00-company/COMPANY.md](00-company/COMPANY.md) — the charter and local rules (stricter only).
- [00-company/AIEOS.md](00-company/AIEOS.md) — the binding adapter to the kernel.

## Departments
- [02-diagnosis](02-diagnosis/) — finding out what is true; led by the business-analyst.
- [03-strategy](03-strategy/) — deciding what to do about it; led by the strategy-consultant.
- [04-implementation](04-implementation/) — making it real; led by the implementation-lead.

## Councils
- [councils/engagement-council](councils/engagement-council/) — chaired by the engagement-director; gates analytical approach (extends stdlib feature-council).
- [councils/quality-council](councils/quality-council/) — chaired by the chief-auditor; gates deliverable quality (extends stdlib architecture-council).

## Workflows
- [workflows/engagement-scoping.md](workflows/engagement-scoping.md) — T2, scope and staff a new engagement.
- [workflows/strategy-development.md](workflows/strategy-development.md) — T2, build and defend a recommendation.
- [workflows/implementation.md](workflows/implementation.md) — T3, deliver and embed the change.

## Memory & reports
- [memory/](memory/) — append-mostly registers (Directive [#8](../kernel/laws/prime-directives.md)).
- [reports/](reports/) — health report against the ten quality dimensions, exposed upward.

## Inherited from AIEOS
- [../kernel/](../kernel/) — laws, protocols, contracts, loader. Source of truth.
- [../templates/](../templates/) — how every entity in this firm is built.

This company is listed as `mounted (kernel-native)` in the
[kernel registry](../kernel/registry/registry.md).
