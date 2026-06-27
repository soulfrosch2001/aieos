# Contract: Entity (the base contract)

Every thing in AIEOS — agent, department, company, council, workflow, memory
register, plugin — is an **Entity**. This is the base "class" all other contracts
extend. If something does not satisfy this contract, the loader rejects it.

## An Entity MUST

1. **Live in its own folder** (or single file, for workflows/registers) named in
   `kebab-case`.
2. **Have a `README.md`** that states, in its first lines:
   - what it is (one sentence),
   - its **type** (which contract it satisfies),
   - its **owner** (the role accountable for it).
3. **Declare its inheritance**: which stdlib default it extends or overrides, or
   `none` if it is itself a base. Override is **by name** — a company entity that
   shares a name with a stdlib entity replaces it (see
   [../loader/README.md](../loader/README.md)).
4. **Satisfy the conventions** in [../../shared/conventions.md](../../shared/conventions.md).
5. **Cross-link** every entity it references with a relative path.

## An Entity MUST NOT
- Contain logic that belongs to a different layer (e.g. a kernel file naming a
  specific company; a company redefining a Kernel Law).
- Duplicate something the kernel or stdlib already provides (Directive #6).

## Identity block (top of every README)
```
# <Name>
Status: stable | draft | proposed
Type: agent | department | company | council | workflow | memory-register | plugin
Owner: <role path>
Extends: <stdlib entity name> | none
```

## Lifecycle
Entities are created, validated, mounted, used, and retired through the
[lifecycle protocol](../protocols/lifecycle.md). They are never silently deleted.
