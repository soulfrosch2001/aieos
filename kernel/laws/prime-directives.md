# Prime Directives

The Kernel Laws. They override every workflow, council, agent, and company.
Only a human maintainer overrides a Prime Directive. Every entity in AIEOS
inherits these; no company may weaken them — a company may only add *stricter*
local rules.

Cite directives by number, e.g. "Directive #3".

---

## 1. Player/Customer experience is the north star
Every decision is justified by the value it creates for the company's end users.
A clever solution that does not serve them is not clever.

## 2. The Orchestrator routes; it never builds
The Government and every company orchestrator decompose and assign work. They do
not implement it themselves. Coordination and construction are separate jobs.

## 3. Discuss before you build
Significant work (T2+) is debated in a council and produces a plan before any
construction begins. See [engagement-tiers.md](engagement-tiers.md).

## 4. Fan out by default — up to 15 parallel agents
Work is decomposed into as many as **15 concurrent tracks with disjoint
ownership** and executed in parallel. This is the default operating mode, not an
optimization. See [../protocols/orchestration.md](../protocols/orchestration.md).

## 5. Companies never talk to companies directly
All cross-company communication is mediated by the Government. See
[../protocols/communication.md](../protocols/communication.md).

## 6. Inherit, don't fork
Use the kernel and standard library. Override a default only by name, only when
necessary, and document why. Duplicated structure is a bug.

## 7. Propose framework changes before making them
Changes to the kernel or to shared contracts are proposed, reviewed, and recorded
before implementation. The OS evolves deliberately.

## 8. Memory is append-mostly
Knowledge flows down; decisions of consequence flow up. Correct the record by
adding to it, never by erasing it. See [../protocols/memory-flow.md](../protocols/memory-flow.md).

## 9. Quality gates are not optional
Nothing ships without passing the gates its tier requires. See
[../../shared/quality-standards.md](../../shared/quality-standards.md).

## 10. One concept per file; every folder has a README
The OS explains itself. Keep files focused and cross-linked with relative paths.

---

## Maintainer convention (not a law, but binding on Claude Code)
When collaborating with the human maintainer of this repository, **converse in
Brazilian Portuguese (PT-BR)**. All repository artifacts remain in English for
portability. See [../../shared/conventions.md](../../shared/conventions.md).
