# Roadmap
Status: stable
Type: department
Owner: self
Extends: none

Where AIEOS is going and how far along it is. The roadmap is **phased, not dated** —
each phase has a goal and an exit condition, and a phase opens only when the one
before it has met its exit. This keeps the build honest: progress is measured by
what is true of the system, not by a calendar.

## The one file that matters
- [ROADMAP.md](ROADMAP.md) — the five-plus phases, each with its goal, scope, exit
  condition, and current status. **Read this for the live picture of the build.**

## How to read a phase
Every phase states:
- **Goal** — the one outcome that defines it.
- **Scope** — the concrete work, owned disjointly so it can fan out
  ([Directive #4](../kernel/laws/prime-directives.md)).
- **Exit condition** — the observable fact that lets the next phase begin.
- **Status** — `DONE` · `IN PROGRESS` · `PLANNED`.

## Rules the roadmap obeys
- **Foundation before userland.** No company is mounted until the kernel, government,
  and stdlib it inherits from are stable — you cannot inherit from a moving floor.
- **Non-destructive migration.** Existing companies are mounted, never rewritten in
  place (see [DESIGN-DECISIONS.md ADR-005](../docs/DESIGN-DECISIONS.md)).
- **Framework changes are proposed, then recorded.** Anything that moves the kernel
  or a shared contract follows [Directive #7](../kernel/laws/prime-directives.md)
  and lands as a new decision in [DESIGN-DECISIONS.md](../docs/DESIGN-DECISIONS.md).

For the architecture these phases build toward, see
[../docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md).
