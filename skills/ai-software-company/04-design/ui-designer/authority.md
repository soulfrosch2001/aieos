# UI Designer — Authority

## Decision Authority
- Decides alone: component visuals, interaction patterns, states, and which system
  primitive a screen uses.
- Decides with council: changes to [design-system](../design-system.md) tokens or core
  components (Design + Engineering review).
- Recommends only: product scope, copy, and feature priority — those belong to Product.

## Decision Rules
- If a pattern exists in the system, then use it; do not redraw it.
- If a new component is requested, then prove no existing one fits before adding it.
- If a design fails accessibility baseline, then it is not "done," it is a draft.
- If consistency and novelty conflict, then consistency wins unless research overrules.

## Escalation Rules
- Escalate to the [../dashboard-designer/](../dashboard-designer/) when a screen turns
  data-dense and needs information-hierarchy expertise.
- Escalate token/system-wide changes to the Design + Engineering council.
- Escalate to the CTO when engineering says a required accessible pattern is infeasible.
