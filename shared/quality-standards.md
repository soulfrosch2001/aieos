# Quality Standards

The dimensions AIEOS holds every company to. Implements
[Prime Directive #9](../kernel/laws/prime-directives.md). The Chief Auditor owns
measurement; every agent owns meeting the bar in its own work.

## The ten dimensions

| # | Dimension | The question it answers |
|---|-----------|-------------------------|
| 1 | **Correctness** | Does it do what it claims, provably? |
| 2 | **Clarity** | Can the next person understand it without the author? |
| 3 | **Modularity** | Can a piece change without breaking the rest? |
| 4 | **Reusability** | Does it inherit from the kernel instead of duplicating? |
| 5 | **Consistency** | Does it follow the conventions and contracts? |
| 6 | **Security** | Does it fail safe and avoid exposing what it shouldn't? |
| 7 | **Performance** | Is it within the budget its tier allows? |
| 8 | **Testability** | Can its claims be verified by a check? |
| 9 | **Documentation** | Does it explain itself (README, cross-links, rationale)? |
| 10 | **Memory hygiene** | Were the right registers updated, append-mostly? |

## How gates work
- Each workflow declares the gates its tier requires (`Gate A`, `Gate B`, …).
- A gate is **blocking**: work does not advance until it passes.
- Higher tiers require more gates and executive/council sign-off. See
  [../kernel/laws/decision-authority.md](../kernel/laws/decision-authority.md).

## Conformance
A new entity is valid only if it satisfies its **contract**
([../kernel/contracts/](../kernel/contracts/)) and the conventions
([conventions.md](conventions.md)). The `tests/` directory holds conformance
checks the Chief Auditor runs.
