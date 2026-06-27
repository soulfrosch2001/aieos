# Kernel

Status: stable
Type: protocol
Owner: CTO (Government)
Extends: none

The kernel is the fixed core of AIEOS — the laws, contracts, protocols, and the
machinery that mounts entities. Everything else (the standard library, the
companies) is built *on* it and *inherits from* it. The kernel is small on
purpose: if it grew company-specific logic, every company would be entangled in
every other. It does not.

> **The kernel contains no company-specific logic.** It never names a company,
> a product, or a domain. It defines the rules of the game, not the players. A
> file in `kernel/` that mentions a specific company is a bug — see
> [contracts/entity.md](contracts/entity.md).

## Subsystems

| Subsystem | What it owns | Entry point |
|-----------|--------------|-------------|
| **Laws** | The non-negotiable rules every entity obeys. | [laws/README.md](laws/README.md) |
| **Contracts** | The "interfaces" each entity type must satisfy. | [contracts/entity.md](contracts/entity.md) |
| **Protocols** | How entities coordinate (orchestration, communication, memory). | [protocols/orchestration.md](protocols/orchestration.md) |
| **Loader** | How AIEOS discovers, validates, and mounts entities. | [loader/README.md](loader/README.md) |
| **Registry** | The manifest of what is installed. | [registry/README.md](registry/README.md) |

## How the pieces fit

The **laws** bind everyone. The **contracts** say what shape an entity must have
to be legal. The **loader** enforces those contracts at mount time and resolves
inheritance (see [loader/resolution-order.md](loader/resolution-order.md)). The
**registry** records what ended up mounted. The **protocols** govern how the
mounted entities then work together.

Nothing in the kernel is forkable. Companies extend the standard library by
name, never by copying the kernel (Directive #6 — see
[laws/prime-directives.md](laws/prime-directives.md)). The kernel evolves only
by proposal (Directive #7).
