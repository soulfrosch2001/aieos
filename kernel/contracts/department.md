# Contract: Department

A Department is an **index, not an actor**: a `README.md` that groups a set of
agents under one accountable lead. It coordinates; it does not itself decide or
build. Extends [entity.md](entity.md).

## Structure — a folder whose README is the contract
| Element | Holds |
|---------|-------|
| `README.md` | Identity block, the department's mission, its **lead**, and a table of member agents with one line each. |
| agent subfolders | One folder per agent, each conforming to [agent.md](agent.md). |

The README is the only required file; everything else is an agent or a nested
index.

## Required sections
The `README.md` must declare: **mission** (the slice of the company it owns),
the **lead** (the single agent accountable for the department), the **member
roster** (each linked by relative path), and **which memory registers the
department feeds** (Directive [#8](../laws/prime-directives.md)).

## Rules
- A department **belongs to exactly one company** and has **exactly one lead**.
- A department **routes work to its agents**; the lead signs off T1 work and
  escalates T2+ to a council (see [../laws/engagement-tiers.md](../laws/engagement-tiers.md)).
- A department **does not own agents in another department**; ownership is
  disjoint, which is what makes parallel fan-out safe (Directive
  [#4](../laws/prime-directives.md)).
- A department **feeds memory** — its decisions of consequence flow up, the
  knowledge it produces flows down.

## Conformance
Valid when: a single `README.md` with a complete identity block, exactly one
named lead, every member agent listed and resolving, the fed registers named,
and no agent claimed by two departments.
