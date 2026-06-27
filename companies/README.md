# Companies

Status: stable
Type: department
Owner: CTO (Government)
Extends: none

The registry of companies that run on AIEOS. A **company is a plugin**: a self-
contained tree that inherits the kernel and the standard library and adds only what
is specific to it. The OS hosts unlimited companies; this folder is where they
mount.

## A company is a plugin, not a fork

Every company inherits the [Prime Directives](../kernel/laws/prime-directives.md),
the protocols (communication, orchestration, escalation, memory-flow, lifecycle),
and the stdlib defaults (templates, workflows, councils, memory schemas). It does
**not** copy them. When a company needs to customize a default, it overrides **by
name** and the loader prefers the local copy — see
[resolution-order.md](../kernel/loader/resolution-order.md). An override may only
make a rule *stricter*; it can never weaken a law
([Directive #6](../kernel/laws/prime-directives.md)). Companies never talk to each
other directly — all cross-company traffic is mediated by the Government
([Directive #5](../kernel/laws/prime-directives.md)).

## Existing companies are preserved

Three companies already exist and are **mounted in Phase 2**. They are preserved
as-is: do not rename, restructure, or delete them. Until Phase 2 lands they live
outside this scaffold; when mounted, each appears here as its own `kebab-case`
folder built from [templates/company.template.md](../templates/company.template.md)
and recorded in [../kernel/registry/](../kernel/registry/). The contract they
satisfy is [plugin.md](../kernel/contracts/plugin.md).

## How to add a new company

1. **Propose** if you are changing shared ground; a new company alone is not a
   framework change (see [../CONTRIBUTING.md](../CONTRIBUTING.md)).
2. **Copy** [templates/company.template.md](../templates/company.template.md) into
   a new `kebab-case` folder here. Fill the charter, executive, departments.
3. **Inherit** the stdlib — do not copy workflows, councils, or schemas. Override
   only by name, only when necessary, documented in the company's local-overrides
   table.
4. **Satisfy** the [plugin](../kernel/contracts/plugin.md) and
   [company](../kernel/contracts/company.md) contracts; every nested agent,
   council, and workflow satisfies its own contract too.
5. **Pass conformance** ([../tests/conformance-checklist.md](../tests/conformance-checklist.md))
   and **register** the company in [../kernel/registry/](../kernel/registry/) so the
   loader mounts it.

The smallest legal company is worked through in
[../examples/hello-company/](../examples/hello-company/) — start there before
building a real one.

## Mounted companies

Three companies run on AIEOS today. Two are legacy estates mounted
**non-destructively** through an `AIEOS.md` adapter (original files untouched,
legacy governance superseded but retained); one is **kernel-native**, built fresh
on the kernel with no adapter. The mount model is documented in
[../docs/MIGRATION.md](../docs/MIGRATION.md).

| Company | Mount kind | Adapter |
|---------|------------|---------|
| [ai-software-company](../ai-software-company/) | mounted (legacy) | [../ai-software-company/AIEOS.md](../ai-software-company/AIEOS.md) |
| [AI-Game-Studio](../AI-Game-Studio/) | mounted (legacy) | [../AI-Game-Studio/AIEOS.md](../AI-Game-Studio/AIEOS.md) |
| [AI-Tabletop-Studio](../AI-Tabletop-Studio/) | kernel-native | — (none; inherits stdlib directly) |
| [AI-Marketing-Agency](../AI-Marketing-Agency/) | kernel-native | [../AI-Marketing-Agency/00-company/AIEOS.md](../AI-Marketing-Agency/00-company/AIEOS.md) |
| [AI-Publishing-House](../AI-Publishing-House/) | kernel-native | [../AI-Publishing-House/00-company/AIEOS.md](../AI-Publishing-House/00-company/AIEOS.md) |
| [AI-Finance-Company](../AI-Finance-Company/) | kernel-native | [../AI-Finance-Company/00-company/AIEOS.md](../AI-Finance-Company/00-company/AIEOS.md) |
| [AI-Research-Lab](../AI-Research-Lab/) | kernel-native | [../AI-Research-Lab/00-company/AIEOS.md](../AI-Research-Lab/00-company/AIEOS.md) |
| [AI-RPG-Studio](../AI-RPG-Studio/) | kernel-native | [../AI-RPG-Studio/00-company/AIEOS.md](../AI-RPG-Studio/00-company/AIEOS.md) |
| [AI-Architecture-Studio](../AI-Architecture-Studio/) | kernel-native | [../AI-Architecture-Studio/00-company/AIEOS.md](../AI-Architecture-Studio/00-company/AIEOS.md) |
| [AI-Legal-Advisors](../AI-Legal-Advisors/) | kernel-native | [../AI-Legal-Advisors/00-company/AIEOS.md](../AI-Legal-Advisors/00-company/AIEOS.md) |
| [AI-Education-Academy](../AI-Education-Academy/) | kernel-native | [../AI-Education-Academy/00-company/AIEOS.md](../AI-Education-Academy/00-company/AIEOS.md) |
| [AI-Film-Studio](../AI-Film-Studio/) | kernel-native | [../AI-Film-Studio/00-company/AIEOS.md](../AI-Film-Studio/00-company/AIEOS.md) |
| [AI-Healthcare-Clinic](../AI-Healthcare-Clinic/) | kernel-native | [../AI-Healthcare-Clinic/00-company/AIEOS.md](../AI-Healthcare-Clinic/00-company/AIEOS.md) |
| [AI-Music-Label](../AI-Music-Label/) | kernel-native | [../AI-Music-Label/00-company/AIEOS.md](../AI-Music-Label/00-company/AIEOS.md) |
| [AI-Consulting-Firm](../AI-Consulting-Firm/) | kernel-native | [../AI-Consulting-Firm/00-company/AIEOS.md](../AI-Consulting-Firm/00-company/AIEOS.md) |
| [AI-Game-Balancing-Studio](../AI-Game-Balancing-Studio/) | kernel-native | [../AI-Game-Balancing-Studio/00-company/AIEOS.md](../AI-Game-Balancing-Studio/00-company/AIEOS.md) |

> Note: the existing companies remain at the repository root (preserved in place by
> the non-destructive Phase 2 mount); they are linked here, not relocated into this folder.
