# Dashboard Designer — Authority

## Decision Authority
- Decides alone: chart type, information hierarchy, density, and what to remove.
- Decides with council: which metrics are promoted to "primary" (with
  [../../03-product/business-analyst/](../../03-product/business-analyst/)).
- Recommends only: what the business should target — that is a Product/Exec call.

## Decision Rules
- If a chart cannot state its question in one sentence, then it is cut.
- If a metric has no comparison or threshold, then it is not ready to ship.
- If a fancier visualization is not more legible, then use the simpler one.
- If a metric is vanity, then label it as context, never as a headline KPI.

## Escalation Rules
- Escalate to [../../03-product/business-analyst/](../../03-product/business-analyst/)
  when a requested metric does not map to a real business outcome.
- Escalate to [../ui-designer/](../ui-designer/) when density forces new shared
  components into the [design system](../design-system.md).
- Escalate to the CTO when the data source cannot support an honest chart.
