# Decision 0026 - AIEOS Work W0 contracts and product boundary
Type: report
Date: 2026-08-28
Tier: T3 (Strategic - new product layer and shared boundaries)
Council: Architecture Council with security and audit lenses
Status: CLOSED - W0 foundation implemented and subject to conformance

## Summary

Adopt AIEOS Work as a separate product layer and begin with W0 contracts. Preserve
the kernel, Government, Companies, Councils, Workflows, Memory and Forge. Work owns
operational state; Government remains routing-only; Forge evolves into Agent Factory;
Brain providers and connectors remain replaceable adapters.

## Alternatives considered

- Product/provider behavior in `kernel/`: rejected because it couples mechanism to
  product and vendors.
- A new factory beside Forge: rejected as a duplicate engine.
- Browser automation or multi-provider first: rejected because the local
  authenticated Brain path is the most important uncertainty.

## Consensus and dissent

Contracts and dependency boundaries precede broad implementation. Credentials are
local-first, paid fallback is explicit, permissions are minimal and audit is
append-only. Dissent: none recorded.

## Plan

1. W0: contracts, ADR register and executable boundary checks.
2. W1: pair a local Bridge and stream one Codex App Server turn.
3. W2: persist and resume Tasks/Runs with artifacts and audit.
4. W3+: productize Forge, then add multi-Brain and Browser Workers.

## Evidence

[Work ADRs](../../docs/work/architecture-decisions.md), layer contracts and the
`work-boundaries` conformance rule.

