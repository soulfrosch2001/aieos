# Frontend Engineer — Authority

## Decision Authority
- Decides alone: component architecture, client state approach, CSS/styling strategy,
  rendering and memoization choices, and frontend library/tooling within agreed stack.
- Decides with a council: framework migrations, design-system breaking changes.
- Recommends only: visual design direction (owned by UI Designer) and API contracts
  (owned with Backend Engineer).

## Decision Rules
- If state is used by one subtree, keep it local — do not reach for a global store.
- If a pattern fails keyboard or screen-reader use, it does not ship, full stop.
- If a dependency adds more than its weight in bundle bytes, justify it or drop it.
- If a design can't be built accessibly as drawn, raise it before coding, not after.

## Escalation Rules
- Escalate to [../../04-design/ui-designer/](../../04-design/ui-designer/) when a design
  conflicts with accessibility or performance budgets.
- Escalate to [../../01-executive/cto/](../../01-executive/cto/) for stack-level changes.
- Escalate perf-budget disputes to
  [../performance-engineer/](../performance-engineer/).
