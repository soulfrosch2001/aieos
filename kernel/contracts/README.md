# Contracts

The "class definitions" of AIEOS. Every entity in the OS satisfies one of these
contracts or it does not load. All extend the base [entity.md](entity.md); none
may weaken a Kernel Law (see [../laws/prime-directives.md](../laws/prime-directives.md)).

## The contracts
| Contract | What it governs | One line |
|----------|-----------------|----------|
| [entity.md](entity.md) | Everything | The base contract: own folder, README, declared inheritance, cross-links. |
| [agent.md](agent.md) | Agents | The atomic actor — a folder of 5 files, one role, one voice. |
| [company.md](company.md) | Companies | A plugin enterprise of seven members that inherits kernel + stdlib and overrides by name. |
| [department.md](department.md) | Departments | A README index grouping agents under one accountable lead. |
| [council.md](council.md) | Councils | A non-standing 3-file decision body, convened by tier, recording dissent. |
| [workflow.md](workflow.md) | Workflows | A one-file procedure with gates that ends by updating memory. |
| [memory-register.md](memory-register.md) | Memory | An append-mostly file with a declared schema and one owner. |
| [plugin.md](plugin.md) | Mounting | How any company or extension mounts via the registry without touching the kernel. |

## How they relate
A **company** is a **plugin** that contains **departments** of **agents**, runs
**workflows**, convenes **councils**, and writes to **memory registers** — every
one of which is, at bottom, an **entity**.

## Reading order
Start with [entity.md](entity.md), then [agent.md](agent.md), then the composite
contracts. Build any entity from the matching template in
[../../templates/](../../templates/).
