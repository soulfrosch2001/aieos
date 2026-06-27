# Resolution Order

Status: stable
Type: protocol
Owner: CTO (Government)
Extends: none

This is the inheritance rule of AIEOS. It is how "inherit, don't fork"
(Directive #6 — see [../laws/prime-directives.md](../laws/prime-directives.md))
becomes a mechanical, predictable operation instead of a slogan.

## The rule

> When the loader resolves an entity, it looks for a **company-local** definition
> **first**, and falls back to the **standard-library default of the same name**
> if none exists.

Override is **by name**. A company that wants to customize a stdlib workflow,
council, template, or memory register creates an entity with the *same name* in
its own tree. The loader sees the local copy first and mounts it; the stdlib copy
becomes the fallback that is used everywhere the company did *not* override.

## Precedence (highest wins)

| Rank | Source | When it is used |
|------|--------|-----------------|
| 1 | **Company-local** entity | A company defines an entity of this name in its own tree. |
| 2 | **Standard-library default** (`templates/`, `workflows/`, `councils/`, `memory/`) | No company-local entity of that name exists. |

There is no rank 3. The kernel laws and contracts sit *above* this table — they
are not overridable by name and bind both ranks.

## Name collisions are the mechanism, not a bug

Sharing a name with a stdlib entity is *how* you override (see the entity
contract, [../contracts/entity.md](../contracts/entity.md)). The loader resolves
the collision by scope: local beats stdlib. Two *companies* never collide with
each other — each company's tree is its own namespace, and companies never reach
into one another (Directive #5).

If a company-local entity has a name that matches **no** stdlib default, it is
simply a new entity, not an override.

## A company may only ADD strictness, never weaken a law

Overriding is bounded. A local override may make a rule **stricter** — tighter
quality gates, more sign-off, narrower authority. It may **never** loosen a
Kernel Law, drop a required gate, or remove a contract obligation (Directive #6).
The loader rejects any override that does (see [README.md](README.md), step 4).

Practical reading:
- ✅ A company's `code-review` council *requires two approvers* where the stdlib
  default requires one. — stricter, allowed.
- ❌ A company's `code-review` council *skips the council for T2 work*. — weakens
  Directive #3, rejected.

## Why by-name and not by-path

By-name override survives folder moves and keeps inheritance legible: to find
what an entity *really* is, you ask "did the company override this name?" — one
question, one answer. Forking by copy-paste would scatter that answer across the
tree, which is precisely the duplication Directive #6 forbids.
