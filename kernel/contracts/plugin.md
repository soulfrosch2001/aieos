# Contract: Plugin

A Plugin is **how anything mounts on the kernel** without modifying it. Every
company is a plugin; so is every extension. The kernel is host-only — it never
imports plugin-specific logic (Directive [#6](../laws/prime-directives.md)).
Extends [entity.md](entity.md).

## Structure — a self-contained, mountable folder
A plugin is a folder that the kernel discovers through the registry. It carries
everything it needs and reaches into the kernel only through declared inheritance.

## Required sections
- **Declare `Extends`** — name the kernel + stdlib it inherits; a plugin that
  extends nothing is rejected (there are no orphan plugins).
- **Satisfy the company contract** — a plugin that hosts an enterprise must
  conform to [company.md](company.md); a smaller extension conforms to the
  contract of whatever it provides (workflow, council, register, agent).
- **Register** — an entry in [../registry/](../registry/) that the loader reads
  to mount it; the kernel is never edited to add a plugin.
- **Overrides by name** — any stdlib default it replaces is named explicitly,
  with a reason.

## Rules
- The **kernel never imports a plugin**: no kernel or stdlib file may reference a
  specific company or extension. Dependency points one way — plugin → kernel.
- A plugin **mounts via the registry**, conforms to its contract, and **passes
  conformance** before it is active; a non-conforming plugin does not load.
- Plugins **never talk to each other directly** — coordination is mediated by the
  Government (Directive [#5](../laws/prime-directives.md)).
- **Inherit, don't fork** — duplicated kernel structure inside a plugin is a bug
  (Directive [#6](../laws/prime-directives.md)).

## Conformance
Valid when: `Extends` is declared and resolves, the plugin satisfies the contract
of what it provides, a registry entry exists, all overrides are named, no kernel
file references it, and the loader mounts it without error.
