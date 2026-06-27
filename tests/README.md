# Tests

Status: stable
Type: department
Owner: Chief Auditor (Government)
Extends: none

Conformance is how AIEOS stays an operating system and not a pile of folders. The
[loader](../kernel/loader/README.md) rejects anything that fails its contract, and
the **Chief Auditor** runs the same checks as a standing gate
([Prime Directive #9](../kernel/laws/prime-directives.md)). This directory holds
those checks. They are contract-driven: they assert exactly what the
[contracts](../kernel/contracts/) require — nothing private, nothing ad hoc.

## Index

- [conformance/](conformance/) — the **runnable conformance checker** (the OS's
  compiler). Run it with `npm test` or `node tests/conformance/run.mjs`.
- [conformance-checklist.md](conformance-checklist.md) — the human checklist the
  automated checker enforces.

## Running the checker

```
npm test                 # check the kernel + stdlib + kernel-native companies
npm run conformance:all  # also scan the legacy companies (reconciliation debt)
```

Exit code 0 = conformant, 1 = at least one error. The checker is modular: each
rule is a file in [conformance/rules/](conformance/rules/). See
[conformance/README.md](conformance/README.md) to add one.

## How conformance runs

1. **Discover** every candidate — the standard library and every registered
   company (see the [registry](../kernel/registry/README.md)).
2. **Check** each candidate against the base [entity contract](../kernel/contracts/entity.md)
   and its type-specific contract.
3. **Resolve** inheritance and confirm no override weakens a law and no structure
   duplicates a stdlib default ([Directive #6](../kernel/laws/prime-directives.md)).
4. **Fail loud.** A failure names the contract clause and the file. The OS never
   mounts a half-valid entity.

A contribution is not done until it passes the checklist. See
[../CONTRIBUTING.md](../CONTRIBUTING.md).
