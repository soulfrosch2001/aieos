# technical-debt.md — Technical Debt Register

> Corporate Memory register of debt the company knowingly carries. Debt is taken
> on purpose and tracked openly. Append-mostly: add new debt and status updates;
> never erase a debt's history. See [architecture-decisions.md](architecture-decisions.md).

## Entry Format
Columns: `ID | Description | Owner | Severity | Interest (cost of delay) | ADR | Status`
- Severity: `low | medium | high | critical`.
- Interest: what it costs us each period we leave it unpaid.
- Status: `open | paying-down | paid | accepted`.

| ID | Description | Owner | Severity | Interest (cost of delay) | ADR | Status |
|----|-------------|-------|----------|--------------------------|-----|--------|
| TD-001 | Memory registers seeded with one example row each; backfill real entries | product-manager-02 | low | minor confusion until real data lands | — | open |

## How to Append
Add a new row with the next `TD-NNN` id. Link the ADR that incurred the debt.
When paid, append a dated note and set Status to `paid` — keep the row.
