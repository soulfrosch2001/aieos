# Protocol: Lifecycle — From Proposed to Retired

Status: stable
Type: protocol
Owner: Supreme Orchestrator
Extends: none

How every Entity — agent, department, company, council, workflow, register,
plugin — is brought into existence, used, and wound down. The principle:
**entities are never silently deleted; their work is preserved.** This is the
operational counterpart to the [entity contract](../contracts/entity.md).

## The states

```
proposed → validated → mounted → active → deprecated → retired
```

| State | What it means |
|-------|---------------|
| **proposed** | The entity exists as a design/spec; nothing is wired in. |
| **validated** | Checked against its contract — it satisfies the shape its type requires, or it is rejected. |
| **mounted** | Loaded by the loader; resolvable and addressable, but not yet doing work. |
| **active** | In use, taking briefs and producing reports. |
| **deprecated** | Superseded; still resolvable so in-flight work survives, but no new work routes to it. |
| **retired** | Unmounted from active routing; its folder and memory are preserved as record. |

## Who approves each transition

| Transition | Approver |
|------------|----------|
| → **proposed** | Anyone may propose; a kernel/contract change first follows [Directive #7](../laws/prime-directives.md). |
| → **validated** | The loader, against the entity's [contract](../contracts/entity.md). A failed check returns the entity to `proposed`. |
| → **mounted** | The owning orchestrator (Government for companies; company orchestrator for its own entities). |
| → **active** | The owning lead / executive at the entity's tier (see [decision-authority.md](../laws/decision-authority.md)). |
| → **deprecated** | The same owner, plus a recorded successor or reason. |
| → **retired** | The owning executive; a [Chief Auditor](../laws/decision-authority.md) veto can block a premature retirement. |

## Preservation rules

- **Never silently delete.** Retiring an entity unmounts it from routing; it does
  **not** remove its folder or its memory. The work is the record.
- **Deprecate before you retire.** Give in-flight work a path to drain. Skipping
  `deprecated` for a still-used entity is a violation.
- **Supersession is by name, layered.** A replacement entity takes the name and
  inherits the predecessor's memory (Directive #6); the old one is marked
  `deprecated`, not erased (see [memory-flow.md](memory-flow.md)).
- **Every transition is appended to memory** — state, approver, timestamp, reason.

## Guardrails
- **No skipping forward.** An entity cannot go `proposed → active`; it must pass
  contract validation and be mounted first.
- **Validation is the gate.** An entity that fails its contract never mounts
  (Directive #9). Fix the entity, re-validate.
- **Retirement preserves; it does not destroy.** If the goal is truly to erase,
  that is a human-maintainer decision, recorded.
