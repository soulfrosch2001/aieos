# Loader

Status: stable
Type: protocol
Owner: CTO (Government)
Extends: none

The loader is how AIEOS turns folders on disk into live, mounted entities. It
discovers candidates, validates each against its contract, resolves inheritance,
and mounts what passes. It is the gatekeeper: an entity that the loader rejects
does not exist as far as the running OS is concerned.

The loader contains no company-specific logic. It treats every entity by its
*type*, never by its name or domain.

## What the loader does, in order

1. **Discover.** Walk the entity tree — the standard library (`templates/`,
   `workflows/`, `councils/`, `memory/`) and every installed company recorded in
   the [registry](../registry/README.md). Each folder (or single file, for
   workflows and registers) is a mount candidate.
2. **Validate.** Check the candidate against the contract for its declared
   type. Every entity must satisfy the base
   [entity contract](../contracts/entity.md): a `kebab-case` name, a `README.md`
   with an identity block, a declared `Extends`, and the
   [conventions](../../shared/conventions.md). Type-specific contracts
   (`agent`, `council`, `workflow`, `memory-register`, …) add their own required
   files. **A candidate that fails validation is rejected, not silently fixed.**
3. **Resolve inheritance.** Apply the resolution order — company-local first,
   stdlib default of the same name as fallback. This is the single most important
   rule in the loader; it has its own file:
   [resolution-order.md](resolution-order.md).
4. **Enforce the laws.** Reject any entity that tries to weaken a Kernel Law
   (Directive #6 — see [../laws/prime-directives.md](../laws/prime-directives.md))
   or that places logic in the wrong layer (a kernel file naming a company; a
   company redefining a law).
5. **Mount.** Make the validated, resolved entity available to orchestrators and
   protocols, and record it in the registry.

## Validation is contract-driven, not ad hoc

The loader does not carry its own private list of rules. It reads the
[contracts](../contracts/entity.md) and enforces exactly those. To change what is
legal, you change a contract (by proposal — Directive #7), not the loader. This
keeps "what a valid entity looks like" in one place that humans read.

## Failure is loud

A rejected entity produces a named, actionable error (which contract clause
failed, on which file). The OS never boots a half-valid entity. See
[../protocols/lifecycle.md](../protocols/lifecycle.md) for create → validate →
mount → retire.
