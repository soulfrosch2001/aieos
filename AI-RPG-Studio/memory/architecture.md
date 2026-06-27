<!-- Memory architecture. Contract: ../../kernel/contracts/memory-register.md -->

# Memory Architecture
Status: stable
Type: memory-architecture
Owner: rpg-orchestrator
Extends: none

**Purpose:** describe how AI RPG Studio's local registers plug into the enterprise
memory hierarchy, so knowledge flows the way
[memory-flow](../../kernel/protocols/memory-flow.md) prescribes — down to inform,
up to commit.

## The hierarchy
```
Enterprise memory (../../memory/registers/)
        │  knowledge flows DOWN (schemas, precedents, lessons)
        ▼
Studio memory (this folder)
   ├── canon          ─ extends architecture-decisions
   ├── encounter-log  ─ extends lessons-learned
   └── campaign-ideas ─ extends future-improvements
        ▲
        │  decisions of consequence flow UP (precedents that bind beyond this studio)
        ▼
Workflow runs (../workflows/) append here as a step of "done"
```

## How each register plugs in
| Local register | Extends enterprise | Down-flow (inherits) | Up-flow (promotes) |
|----------------|--------------------|----------------------|--------------------|
| [canon](registers/canon.md) | [architecture-decisions](../../memory/registers/architecture-decisions.md) | ADR discipline: decisions are reversed, not edited; ids are cited, not re-argued. | A canon ruling that binds across lines is promoted as a studio precedent. |
| [encounter-log](registers/encounter-log.md) | [lessons-learned](../../memory/registers/lessons-learned.md) | The format of a reusable lesson and append-mostly hygiene. | A balance lesson that generalizes beyond one line rises to enterprise lessons. |
| [campaign-ideas](registers/campaign-ideas.md) | [future-improvements](../../memory/registers/future-improvements.md) | Weak-gravity parking-lot semantics: "noted, not promised." | An idea committed to a release is promoted out of the parking lot onto the plan. |

## Rules of the road
- **Down before up.** Before writing local canon, the lore-master reads the
  enterprise schema it extends; we do not re-invent ADR discipline.
- **Up only with consequence.** Only rulings that bind beyond this studio are
  promoted; routine entries stay local to avoid polluting enterprise memory.
- **One owner per register.** The owner in each register's identity block is
  accountable for its hygiene; orchestrator coordinates, never overwrites
  (Directive [#2](../../kernel/laws/prime-directives.md)).
- **Workflows are the only writers.** A register is appended by a named workflow
  step, so memory hygiene is the kernel's tenth quality dimension in practice.

See [../../kernel/protocols/memory-flow.md](../../kernel/protocols/memory-flow.md)
and [../../kernel/loader/resolution-order.md](../../kernel/loader/resolution-order.md).
