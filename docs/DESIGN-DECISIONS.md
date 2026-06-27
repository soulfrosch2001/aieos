# Design Decisions
Status: stable
Type: memory-register
Owner: self
Extends: none

The record of architectural decisions taken so far. Each entry states the decision,
the alternative we rejected, and why. This file is append-mostly
([Directive #8](../kernel/laws/prime-directives.md)): decisions are *superseded* by
later entries, never quietly edited away. Read [ARCHITECTURE.md](ARCHITECTURE.md)
first; this is the changelog of how that architecture came to be.

---

## ADR-001 — From a flat company tree to a layered OS
**Status:** accepted. **The decision that defines the project.**

We began with flat company trees — each company (for example
[ai-software-company](../ai-software-company/), with its `00-company`,
`01-executive`, `02-engineering`, … folders) was a self-contained organization that
carried its *own* copy of every template, workflow, council pattern, and law-like
rule. Adding a second company ([AI-Game-Studio](../AI-Game-Studio/)) immediately
proved the problem: the two trees shared roughly the same orchestration rules, the
same agent shape, the same memory discipline — and each had forked its own slightly
divergent copy. The shared mass was duplicated, and the duplicates had already begun
to drift.

We restructured the flat tree into four distinct layers:

- **kernel (mechanism)** — [../kernel/](../kernel/): the contracts, loader,
  registry, protocols, and laws. The rules that must be identical everywhere, lifted
  out of every company and made the floor.
- **stdlib (base classes)** — [../templates/](../templates/),
  [../workflows/](../workflows/), and shared councils/memory: the reusable furniture
  a company is built *from*, owned once.
- **government (coordination)** — [../government/](../government/): the routing and
  sign-off layer that was previously smeared across each company's executive folder.
- **companies (userland)** — the companies themselves, now reduced to *only* what
  makes them distinct.

**Why.** Three forces pushed the same direction. (1) Duplication is a bug
([Directive #6](../kernel/laws/prime-directives.md)) and the flat tree institutionalized
it. (2) "Unlimited companies" is impossible if each company carries the full weight
of the system — the marginal cost has to be near-constant, which requires a shared
core. (3) An operating system is *defined* by separating mechanism from policy from
userland; calling AIEOS an OS while shipping flat trees was a contradiction. The
layered model resolves all three at once.

**Rejected:** keeping flat trees and deduplicating with a linter or a shared `common/`
folder. That treats the symptom (copies drift) without fixing the cause (companies
own rules they should only inherit), and it gives no clean seam for the Government or
for mounting new companies.

---

## ADR-002 — Inherit by name; resolve most-specific-first
**Status:** accepted.

Inheritance is resolved **by name** with a fixed order — company-local beats
government beats stdlib beats kernel
(see [ARCHITECTURE.md](ARCHITECTURE.md#inherit-dont-fork--and-how-resolution-works)).
A company overrides a default by defining an entity of the *same name*; defining
nothing inherits everything.

**Why.** Name-based override needs no registration step, no manifest of "what I am
replacing," and no merge logic — the loader simply serves the first definition it
finds. It keeps overrides explicit (the file exists, named, in the company) and local
(other companies are untouched). **Rejected:** explicit config that lists overrides,
or deep-merging stdlib and local files. Both add ceremony and a second source of
truth, and merging makes it impossible to read a company's behavior from its own
folder.

---

## ADR-003 — The Government routes and never builds; companies never touch each other
**Status:** accepted.

Coordination is a *layer*, not a senior agent inside one company. The Government
([../government/](../government/)) decomposes and assigns work but never implements it
([Directive #2](../kernel/laws/prime-directives.md)), and it is the sole mediator of
cross-company communication ([Directive #5](../kernel/laws/prime-directives.md)).

**Why.** Separating coordination from construction keeps the orchestrator's
incentives clean — it can size, route, and integrate without being tempted to "just
do it," which is where parallelism quietly collapses back into one overloaded actor.
Forbidding direct company-to-company calls keeps userland decoupled: a company's
choices cannot ripple sideways into a peer, only up through the Government.
**Rejected:** letting companies call each other directly for speed. It trades a small
latency win for unbounded coupling — the exact failure the layering exists to prevent.

---

## ADR-004 — Fan-out is the default, capped at 15, with disjoint ownership
**Status:** accepted.

Up to 15 parallel agent tracks, each owning a disjoint set of files, is the default
operating mode ([Directive #4](../kernel/laws/prime-directives.md),
[orchestration protocol](../kernel/protocols/orchestration.md)) — not a tuning knob
reached for under load.

**Why.** Disjoint ownership is what makes concurrency *safe* without locks: if no two
tracks write the same file, they cannot conflict, and integration is a merge of
non-overlapping work. The cap exists because coordination cost grows faster than
throughput past a point; 15 is a deliberate ceiling, and excess work is batched into
waves. **Rejected:** unbounded parallelism (coordination and seam-resolution cost
explode) and serial-by-default (wastes the cheapest advantage an AI org has).

---

## ADR-005 — Mount existing companies non-destructively via adapters
**Status:** accepted; implementation scheduled in
[Phase 2](../roadmap/ROADMAP.md).

The three existing trees — [ai-software-company](../ai-software-company/),
[AI-Game-Studio](../AI-Game-Studio/), and the pre-existing government material — will
be brought under the kernel by **mounting**, through adapters, not by rewriting them
in place. [Convention](../shared/conventions.md): never rename or delete an existing
entity without explicit instruction.

**Why.** These trees represent real, working organizations; a destructive migration
risks losing institutional structure and memory for no functional gain. An adapter
lets a legacy tree satisfy the [entity contract](../kernel/contracts/entity.md) and
resolve its inheritance while its files stay where they are, so we can migrate
incrementally and reversibly. **Rejected:** a big-bang rewrite into the new layout —
high risk, all-or-nothing, and it throws away the suffix and naming signals the
convention tells us to preserve.

---

## ADR-006 — The OS documents itself; docs explain the whole
**Status:** accepted.

One concept per file, every folder carries a `README.md`, every reference is a
resolving relative link ([Directive #10](../kernel/laws/prime-directives.md)). This
`docs/` folder does **not** restate the per-file definitions; it explains the *whole*
and the *why* — the parts no single definition file can carry.

**Why.** A self-describing graph stays correct because it lives next to the thing it
describes and breaks loudly (a dead link) when it drifts. A separate, prose-heavy
manual rots silently. Keeping `docs/` to architecture-and-decisions avoids creating a
second, competing source of truth for things the kernel already states authoritatively.
**Rejected:** a comprehensive external handbook that duplicates the contracts and laws.
