# Migration: Mounting Existing Companies onto the Kernel

Status: stable
Type: protocol
Owner: CTO (Government)
Extends: none

This is the Phase 2 playbook: how a company that existed **before** AIEOS gets
onto the kernel without losing a single file. The governing rule is
non-destructive — we never rename, move, overwrite, or delete pre-kernel work
([Directive #7](../kernel/laws/prime-directives.md)). We add one thing — an
adapter — and let the loader do the rest.

## The mount model in one sentence

A legacy company is **mounted**, not rewritten: a single `AIEOS.md` adapter at the
company root binds the company's existing tree to the kernel and stdlib, declaring
what it inherits, what it overrides by name, and how its old artifacts map onto the
standard library.

## What an `AIEOS.md` adapter is

The adapter is the company's mount point. It is the only new file mounting
requires, and it is built from
[../templates/company-adapter.template.md](../templates/company-adapter.template.md).
It does four jobs and changes nothing else:

1. **Declares inheritance** — laws, protocols, and every stdlib default the
   company does not override become the source of truth.
2. **Maps the executive** — local roles (CEO, CTO-equivalent, auditor,
   orchestrator) onto kernel decision-authority levels.
3. **Records overrides by name** — local entities that intentionally replace a
   stdlib default of the same name, per
   [../kernel/loader/resolution-order.md](../kernel/loader/resolution-order.md).
   An override may only ADD strictness, never weaken a law
   ([Directive #6](../kernel/laws/prime-directives.md)).
4. **Maps the memory registers** — legacy registers onto stdlib schemas (see
   below).

The adapter satisfies the [plugin contract](../kernel/contracts/plugin.md). When it
is present, the executive maps cleanly, the register mapping is complete, and the
company is listed in [../kernel/registry/registry.md](../kernel/registry/registry.md)
as `mounted`, the company is live.

## Legacy governance: superseded but retained

A pre-kernel company almost always carries its own copies of prime directives,
engagement tiers, and the like. We do **not** delete them. The rule is:

> Local governance that duplicates kernel law is **superseded by the kernel** and
> **retained for history**. The kernel is authoritative wherever they disagree.

The adapter records each such file in a "Legacy governance (superseded, retained)"
table that points each local file at the kernel law that now governs. Reconciling
or pruning the duplicates is a later, deliberate step — never a side effect of
mounting ([Directive #7](../kernel/laws/prime-directives.md)). This keeps the audit
trail intact: anyone can see what the company believed before the kernel, and what
overrode it.

## Memory-register mapping

Legacy companies stored memory their own way. Rather than migrate the data
destructively, the adapter declares a **mapping** from each local register to the
stdlib schema it corresponds to, tagging the relationship:

| Relationship | Meaning |
|--------------|---------|
| inherits | the local register simply uses the stdlib schema as-is |
| extends | the local register adds fields on top of the stdlib schema (stricter, allowed) |
| company-only | a register with no stdlib equivalent; remains local |

Resolution still follows the by-name rule: a local register that shares a stdlib
name overrides it; one that does not is simply company-only. See
[../kernel/loader/resolution-order.md](../kernel/loader/resolution-order.md).

## MOUNTED (legacy) vs. KERNEL-NATIVE

Two ways a company can be on the kernel — the registry status names which:

| | MOUNTED (legacy) | KERNEL-NATIVE |
|---|---|---|
| Origin | Existed before AIEOS | Built fresh on the kernel |
| Adapter | Yes — `AIEOS.md` at company root | None |
| Legacy files | Preserved; governance superseded but retained | None to preserve |
| Inherits stdlib | Via the adapter's declarations | Directly, from its own definitions |
| Registry status | `mounted (adapter: <company>/AIEOS.md)` | `mounted (kernel-native)` |

In this instance, **ai-software-company** and **AI-Game-Studio** are MOUNTED legacy
estates — each carries an `AIEOS.md` adapter over its existing files.
**AI-Tabletop-Studio** is KERNEL-NATIVE — it was built on the kernel from the start,
inherits the stdlib directly, and needs no adapter.

## Conformance

A legacy company is mounted when: its `AIEOS.md` adapter is present, executives map
to decision-authority levels, the memory-register mapping is complete, the legacy
governance table is filled, and the registry lists it as `mounted`. A kernel-native
company is mounted when it satisfies the
[company](../kernel/contracts/company.md) and
[plugin](../kernel/contracts/plugin.md) contracts directly and is registered.
