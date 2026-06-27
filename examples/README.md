# Examples

Status: stable
Type: department
Owner: CTO (Government)
Extends: none

Worked examples that show AIEOS conventions in their smallest correct form. These
are teaching artifacts: they are deliberately minimal so the *shape* is obvious
and nothing distracts from it. Copy their patterns, not their domain.

## Index

- [hello-company/](hello-company/) — the smallest valid company plugin: one
  executive, one department, one agent, inheriting everything else from the
  standard library.

## How to read an example

Each example demonstrates one principle end to end:

- **Inherit, don't fork** ([Directive #6](../kernel/laws/prime-directives.md)) — an
  example mounts almost entirely on stdlib defaults and only writes the handful of
  files that are genuinely company-specific.
- **Resolution order** — what an example does *not* contain is the point. Anything
  it omits resolves to the stdlib default of the same name; see
  [resolution-order.md](../kernel/loader/resolution-order.md).
- **Contracts and templates** — every file in an example traces back to a
  [template](../templates/) and the [contract](../kernel/contracts/) it satisfies.

When you build a real company in [../companies/](../companies/), start from the
example closest to your need and grow it — do not start from a blank folder.
