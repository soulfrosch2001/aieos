# Registry

Status: stable
Type: protocol
Owner: CTO (Government)
Extends: none

The registry is the manifest of what is installed in this AIEOS instance: which
companies exist and which plugins are mounted. It is the loader's source of truth
for *what* to discover — the loader resolves and mounts entities, the registry
records that they are present and in what state.

The registry holds names and status, not logic. It contains no company-specific
behavior — only the fact that a company is registered and where its tree lives.

## What the registry is

- A single, human-readable manifest: [registry.md](registry.md).
- One row per installed **company** or **plugin**.
- Each row carries a **Status** that tracks where the entity is in its lifecycle
  (see [../protocols/lifecycle.md](../protocols/lifecycle.md)), e.g.
  `to-be-mounted`, `mounted`, `retired`.

## What the registry is not

- It is **not** the entity's definition — that lives in the entity's own tree and
  is validated by the [loader](../loader/README.md) against the
  [contracts](../contracts/entity.md).
- It is **not** a place for cross-company wiring. Companies never talk to
  companies directly (Directive #5 — see
  [../laws/prime-directives.md](../laws/prime-directives.md)); the registry only
  lists them.

## Adding to the registry

A new company or plugin is added by appending a row (memory is append-mostly,
Directive #8). Registration is a proposal-gated act for anything structural
(Directive #7). Existing entries are **migrated non-destructively** — never
overwritten, never deleted — preserving the prior AIEOS estate.
