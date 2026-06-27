# Forge — Examples
Status: experimental
Type: reference
Owner: CTO (Government)
Extends: none

Agents created by the [Forge tool](../create-agent.mjs) to demonstrate the creation
loop. Each is a normal, contract-valid agent (5 files) with `forge:` placeholders left
to be enriched.

- [balance-scout/](balance-scout/) — forged from the intent *"Find balance outliers in
  live telemetry."*

Regenerate or add more:
```
npm run forge -- forge/examples <agent-name> "<one-line mission>"
```
