# AIEOS Work Architecture Decisions
Status: proposed
Type: memory-register
Owner: Government CTO
Extends: none

This append-mostly register translates the AIEOS Work v0.1 specification into
implementation gates.

## ADR-W001 - Work is separate from the kernel
**Status:** accepted for W0. Work depends on kernel contracts; the kernel never
imports Work or product/provider-specific packages.

## ADR-W002 - Hosted control plane and local Bridge
**Status:** proposed. Coordination may be hosted, while provider sessions, user
credentials and local tools remain in a paired, revocable Bridge.

## ADR-W003 - Provider-neutral Brain contract
**Status:** accepted for W0. Brains express capability policy; providers implement
detection, auth status, durable threads, streamed turns and cancellation through
normalized events.

## ADR-W004 - Codex App Server is the first adapter
**Status:** proposed. The first vertical slice uses the officially supported Codex
harness with user-local authentication and streamed events.

## ADR-W005 - Forge evolves into Agent Factory
**Status:** accepted for W0. Agent architecture, readiness, evaluation and publishing
extend Forge; no parallel creation engine is introduced.

## ADR-W006 - Published agent versions are immutable
**Status:** accepted for W0. Every run pins an immutable agent-version identifier;
changes produce a new version and preserve evaluation provenance.

## ADR-W007 - Semantic ToolConnector and Browser Worker
**Status:** accepted for W0. Agents request domain actions. Connectors own execution
details, fail closed on ambiguity and attach evidence.

## ADR-W008 - Risk-based approvals
**Status:** accepted for W0. Writes may be conditional; bulk, destructive, financial,
credential and publication actions require approval according to policy.

## ADR-W009 - Operational persistence boundary
**Status:** proposed. Work may use PostgreSQL while existing file-backed definitions
and memory remain authoritative until an explicit adapter decision.

## ADR-W010 - Tenancy, encryption and secret storage
**Status:** proposed. Workspaces are data boundaries; secret material is encrypted
and local-first, with explicit sensitivity and retention.

## ADR-W011 - Billing policy forbids silent paid fallback
**Status:** accepted for W0. Paid API use requires `allow_paid_api`; otherwise
execution pauses with an actionable explanation.

## ADR-W012 - Append-only normalized audit
**Status:** accepted for W0. Corrections append a superseding event rather than
mutating history.

