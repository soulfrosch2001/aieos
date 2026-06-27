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
| 1.6.0 | Forge next-leap (council [decision 0004](../government/decisions/0004-forge-next-leap.md)): live-run smoke + preflight, sharper retrieval (chunk/recency/dedup), gated in-lane sub-delegation. Plus the solo-AI [position](../docs/forge-and-solo-ai.md) and [roadmap](../docs/solo-ai-roadmap.md) docs. | MINOR (additive) |
| 1.7.0 | Owned-memory v1 begins ([design](../docs/owned-memory.md)): BM25/IDF retrieval — rare terms win, with TF saturation + length normalization. Still dependency-free and model-free. | MINOR (additive) |
| 1.8.0 | **Directive #11 — [do no harm](laws/harm-prevention.md)** (supreme, non-overridable). Plus owned-memory v1 complete: episodic trace ingestion, every-outcome state digest, and a gated consolidation CLI (`npm run forge:consolidate`). | MINOR (additive) |
| 1.9.0 | **Harm-law integrity guard** (non-destructive): `forge/runtime/integrity.mjs` + the `harm-law-intact` gate rule + a runtime preflight. If Directive #11 is stripped/gutted, the gate fails and the runtime refuses to run — it never deletes, damages, or exfiltrates anything. | MINOR (additive) |

## Changing the kernel
Kernel changes are proposed before they are made ([Directive #7](laws/prime-directives.md)),
recorded in [../CHANGELOG.md](../CHANGELOG.md), and bump the version per the rules
above. The CTO owns the kernel's evolution.
