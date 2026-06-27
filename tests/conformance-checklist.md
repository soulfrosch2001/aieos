# Conformance Checklist

Status: stable
Type: workflow
Owner: Chief Auditor (Government)
Extends: none

The checks the Chief Auditor runs against every entity before it mounts. They
restate the [contracts](../kernel/contracts/) as pass/fail assertions. An entity is
valid only when **all** checks for its type pass; a single failure rejects it and
names the clause and file ([Directive #9](../kernel/laws/prime-directives.md)).

## Every entity (base contract)

- [ ] Lives in its own `kebab-case` folder (or single file, for workflows and
      registers). See [entity.md](../kernel/contracts/entity.md).
- [ ] Has a `README.md` whose **first lines** are the identity block:
      `# <Name>` / `Status:` / `Type:` / `Owner:` / `Extends:`.
- [ ] `Type` matches the contract it is checked against.
- [ ] `Extends` is declared — a stdlib entity name or `none`.
- [ ] Every cross-reference is a **relative** markdown link that **resolves**.
- [ ] Satisfies [shared/conventions.md](../shared/conventions.md): one concept per
      file, every folder carries a `README.md`, artifacts in English.

## Agent (folder of exactly 5 files)

- [ ] Present: `README.md`, `responsibilities.md`, `authority.md`, `craft.md`,
      `standards.md` — **5 files**. See [agent.md](../kernel/contracts/agent.md).
- [ ] Every required dimension is addressed (an empty one is stated as "none" with
      a reason) — no "completely custom" agents.
- [ ] Belongs to exactly one department (or to the Government).
- [ ] Authority reconciles with [decision-authority.md](../kernel/laws/decision-authority.md).

## Council (folder of exactly 3 files)

- [ ] Present: `README.md`, `process.md`, `output.md` — **3 files**. See
      [council.md](../kernel/contracts/council.md).
- [ ] Charter states the single question and the tier (T2+) that convened it.
- [ ] Seats, chair, and decision rule are defined.
- [ ] Dissent section present (even if "none, unanimous"); minutes linked to
      `reports/meeting-history/` ([Directive #8](../kernel/laws/prime-directives.md)).

## Workflow

- [ ] One file (or a folder if it must exceed one). See
      [workflow.md](../kernel/contracts/workflow.md).
- [ ] Declares its tier (T0–T4) and the quality gates that tier requires.

## Memory register

- [ ] One file with a **declared schema**. See
      [memory-register.md](../kernel/contracts/memory-register.md).
- [ ] **Append-mostly**: entries are added, the record is never erased
      ([Directive #8](../kernel/laws/prime-directives.md)).

## Inheritance (every company)

- [ ] **No duplication of stdlib.** Structure that copies a stdlib default instead
      of inheriting it fails ([Directive #6](../kernel/laws/prime-directives.md)).
- [ ] Any override is **by name** and only **adds strictness** — never loosens a
      law, drops a gate, or removes a contract obligation. See
      [resolution-order.md](../kernel/loader/resolution-order.md).
- [ ] No existing entity renamed or deleted; retirements go through the
      [lifecycle protocol](../kernel/protocols/lifecycle.md).
