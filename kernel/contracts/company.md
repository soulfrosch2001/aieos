# Contract: Company

A Company is a **plugin**: a self-contained enterprise that mounts on the kernel
and inherits the standard library. The kernel hosts unlimited companies; none of
them is special. Extends [entity.md](entity.md).

## Structure — a folder of seven members
| Member | Holds |
|--------|-------|
| `00-company/` | Identity, charter, north-star, the company's stricter-than-kernel rules. |
| `01-executive/` | The orchestrator and C-suite agents — they route, they do not build (Directive [#2](../laws/prime-directives.md)). |
| `02-…` departments | Numbered department folders, each an index of agents under one lead. |
| `councils/` | Non-standing decision bodies, convened by tier. |
| `workflows/` | The repeatable procedures the company runs. |
| `memory/` | The company's append-mostly registers. |
| `reports/` | Dated outputs and minutes the company emits. |

Departments are zero-padded and numbered (`01-executive`, `02-engineering`).

## Required sections
`00-company/README.md` must declare: **what the company does**, its **north-star
metric** (Directive [#1](../laws/prime-directives.md)), its **executive
orchestrator**, the **stdlib entities it overrides by name**, and any **local
rules stricter than the kernel** (it may tighten, never weaken — Directive
[#6](../laws/prime-directives.md)).

## Rules
- A company **inherits kernel + stdlib** and overrides **by name only**: a local
  entity sharing a stdlib name replaces it; everything else is inherited silently.
- A company **never imports another company** and **never calls one directly** —
  all cross-company traffic goes through the Government (Directive
  [#5](../laws/prime-directives.md)).
- A company **mounts via the registry**, not by editing the kernel; it must
  satisfy [plugin.md](plugin.md).
- Build a new company from the standard-library company scaffold; do not fork the
  kernel.

## Conformance
Valid when: all seven members present, identity block complete, an executive
orchestrator named, every override justified by name, no kernel file references
this company, registered in [../registry/](../registry/), and every contained
entity conforms to its own contract.
