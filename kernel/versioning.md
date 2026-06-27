# Kernel Versioning
Status: stable
Type: reference
Owner: CTO (Government)
Extends: none

The kernel carries a semantic version in [VERSION](VERSION). Companies declare the
kernel range they were built against, so a kernel change can never silently break a
mounted company.

## What the version covers
The version applies to the kernel's **public surface**: the [contracts](contracts/),
the [protocols](protocols/), the [laws](laws/), and the loader's
[resolution order](loader/resolution-order.md). The standard library
(`templates/ workflows/ councils/ memory/`) follows the same line, since companies
inherit it.

## Semantics (semver)
- **MAJOR** — a breaking change to a contract, law, or protocol (a field removed, a
  rule tightened in a way that invalidates existing companies). Mounted companies may
  need migration.
- **MINOR** — a backwards-compatible addition (a new optional contract field, a new
  stdlib workflow/council, a new protocol). Existing companies keep working.
- **PATCH** — clarifications and fixes that change no obligations.

## How companies declare compatibility
Every company's mount adapter (`AIEOS.md`) declares the range it supports:

```
Requires kernel: ^1.0.0
```

`^1.0.0` means "any `1.x` kernel". The conformance checker
([../tests/conformance/](../tests/conformance/)) enforces that the declared range
satisfies the current [VERSION](VERSION).

## Version history
| Version | Change | Kind |
|---------|--------|------|
| 1.0.0 | Initial kernel: contracts, protocols, laws, loader, registry, stdlib. | — |
| 1.1.0 | Added the [reporting protocol](protocols/reporting.md) and the Government [dashboard](../government/dashboard/) that consumes it. Companies on `^1.0.0` stay compatible. | MINOR (additive) |
| 1.2.0 | Added the [operating doctrine](laws/operating-doctrine.md) — assertive, high-agency support habits inherited by every agent. | MINOR (additive) |
| 1.3.0 | Added the [Forge](../forge/) (agent creation + action engine, `npm run forge`) and the support-mode `resumo/` audio rule. | MINOR (additive) |
| 1.4.0 | Added the [Forge runtime](../forge/runtime/) — a model-agnostic executable agent loop (`npm run forge:run`) with tools, guardrails, and traces. Designed by a 7-lens council. | MINOR (additive) |
| 1.5.0 | Forge runtime capabilities (council [decision 0003](../government/decisions/0003-forge-runtime-capabilities.md)): memory & retrieval, live-run robustness, observability + `forge/inspect.mjs`, planning tool, structural self-check. | MINOR (additive) |

## Changing the kernel
Kernel changes are proposed before they are made ([Directive #7](laws/prime-directives.md)),
recorded in [../CHANGELOG.md](../CHANGELOG.md), and bump the version per the rules
above. The CTO owns the kernel's evolution.
