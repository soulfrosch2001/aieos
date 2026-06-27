# Architecture
Status: stable
Type: protocol
Owner: self
Extends: none

This is the authoritative account of how AIEOS is put together and why it holds.
AIEOS is an operating system, not a folder of prompts. It hosts an unlimited
number of AI companies inside Claude Code, and like any OS it earns that claim by
separating **the rules that never change** from **the things that vary**. The rest
of this document is that separation, made concrete.

---

## The five layers

AIEOS is a stack. Each layer depends only on the ones beneath it and knows nothing
of the ones above. This is the single property that makes the system scale: a new
company is added at the top and changes nothing below it.

```
  ┌───────────────────────────────────────────────────────────────┐
  │  5. USERLAND — Companies (plugins)                             │
  │     ai-software-company/  AI-Game-Studio/  marketing/ …        │
  │     Inherit everything below. Override only by name.           │
  ├───────────────────────────────────────────────────────────────┤
  │  4. GOVERNMENT — Coordination & sign-off                       │
  │     supreme-orchestrator + ceo/coo/cto/… (routes, never builds)│
  │     The only layer allowed to talk across companies.           │
  ├───────────────────────────────────────────────────────────────┤
  │  3. STANDARD LIBRARY — Base classes & defaults                 │
  │     templates/  workflows/  councils/  memory/                 │
  │     The reusable furniture every company gets for free.        │
  ├───────────────────────────────────────────────────────────────┤
  │  2. MECHANISM — Kernel runtime                                 │
  │     contracts/  loader/  registry/  protocols/                 │
  │     Validates entities, resolves inheritance, mounts plugins.  │
  ├───────────────────────────────────────────────────────────────┤
  │  1. LAW — Prime Directives, tiers, decision authority          │
  │     kernel/laws/ — overrides everything; only a human changes  │
  └───────────────────────────────────────────────────────────────┘
            ▲ knowledge flows DOWN      decisions of consequence flow UP ▲
```

**1. Law** — [../kernel/laws/](../kernel/laws/). Ten
[Prime Directives](../kernel/laws/prime-directives.md), the
[engagement tiers](../kernel/laws/engagement-tiers.md) (T0–T4), and
[decision authority](../kernel/laws/decision-authority.md). Law is the constitution.
No company, council, or agent may weaken it; a company may only add *stricter* local
rules. Only a human maintainer amends Law.

**2. Mechanism** — [../kernel/](../kernel/). The runtime that makes Law executable:
[contracts](../kernel/contracts/) (the interface each entity type must satisfy),
the [loader](../kernel/loader/) (validates and resolves inheritance), the
[registry](../kernel/registry/) (what is mounted), and the
[protocols](../kernel/protocols/) (orchestration, communication, memory-flow,
escalation, lifecycle). Mechanism contains **no** company-specific logic — a kernel
file that names a specific company is a layering bug.

**3. Standard Library** — [../templates/](../templates/) and
[../workflows/](../workflows/), plus the shared council and memory defaults. These
are the base classes: the agent/council/workflow templates and the default
processes every company inherits without writing a line. Stdlib knows nothing of any
particular company; it is what a company is *made of* before it specializes.

**4. Government** — [../government/](../government/). The coordination layer: the
[supreme-orchestrator](../government/supreme-orchestrator/) and the C-suite
([ceo](../government/ceo/), [coo](../government/coo/), [cto](../government/cto/), and
peers). The Government routes work and signs off on it — and by
[Directive #2](../kernel/laws/prime-directives.md) it **never builds**. It is also
the *only* layer permitted to mediate between companies
([Directive #5](../kernel/laws/prime-directives.md)).

**5. Userland** — the companies. Each is a **plugin**:
[ai-software-company](../ai-software-company/), [AI-Game-Studio](../AI-Game-Studio/),
and any future company. A company looks like a real organization — departments,
agents, councils, workflows, memory — but it owns almost no rules. It inherits them.

---

## Inherit, don't fork — and how resolution works

[Directive #6](../kernel/laws/prime-directives.md) is the load-bearing rule of the
whole design: **inherit, don't fork.** A company does not copy the stdlib; it points
at it and overrides only what must differ.

Override is **by name**. When the loader resolves an entity, it walks the layers and
the first definition wins:

```
  Resolution order (most specific wins):
    1. Company-local entity            (userland override)
    2. Government default               (coordination behavior)
    3. Standard library default         (templates/ workflows/ councils/ memory/)
    4. Kernel contract / law            (the floor — always present)
```

So a company that wants its own `code-review.md` workflow simply defines a workflow
of that name; the loader serves the local one and ignores the stdlib version *for
that company only*. Every other company keeps the default. A company that defines
nothing inherits everything. **Duplicated structure is a bug** — if two files say the
same thing, one of them should not exist.

This is why adding the hundredth company costs the same as adding the second: the
shared mass lives once, in the layers below userland.

---

## The 15-agent fan-out

[Directive #4](../kernel/laws/prime-directives.md), made operational by the
[orchestration protocol](../kernel/protocols/orchestration.md), is the default
*operating mode*, not an optimization:

> Decompose every non-trivial request into **up to 15 concurrent agent tracks with
> disjoint ownership**, run them in parallel, then integrate.

The mechanics, top to bottom:

1. **Size it** to a tier (T0–T4); the tier sets the fan-out ceiling and the
   ceremony (a [council](../kernel/contracts/council.md) for T2+).
2. **Decompose** into the smallest independent units.
3. **Partition ownership** so every track owns a *disjoint* set of files — no two
   tracks write the same file. Overlap is a decomposition error, and disjointness
   is exactly what makes the parallelism safe.
4. **Brief, fan out, integrate** — collect outputs, resolve seams, run the gates,
   update memory.

The orchestrator only routes and integrates ([Directive #2](../kernel/laws/prime-directives.md));
it never picks up a track itself. More than 15 independent pieces are *batched* —
run 15, integrate, run the next wave — never run concurrently beyond the ceiling.
This very document was produced under that rule: one track, disjoint ownership of
the `docs/` and `roadmap/` files.

---

## How knowledge and decisions flow

The arrows in the diagram are a law, not a metaphor.
[Directive #8](../kernel/laws/prime-directives.md) and the
[memory-flow protocol](../kernel/protocols/memory-flow.md) govern the two
directions:

- **Knowledge flows down.** Conventions, contracts, and stdlib defaults propagate
  from kernel → stdlib → government → company. A company reads what is above it and
  inherits it; it never reaches *up* to mutate a shared rule.
- **Decisions of consequence flow up.** When a company makes a call that affects
  shared structure, it surfaces through the [escalation protocol](../kernel/protocols/escalation.md)
  to the Government, and — if it touches the kernel or a shared contract — becomes a
  proposed framework change under [Directive #7](../kernel/laws/prime-directives.md)
  before anything changes.
- **Memory is append-mostly.** The record is corrected by *adding* to it, never by
  erasing it. [Memory registers](../kernel/contracts/memory-register.md) are
  append-mostly files with declared schemas, so institutional knowledge accumulates
  instead of being overwritten.

Cross-company knowledge never moves sideways. Two companies that need to coordinate
do so *through* the Government ([Directive #5](../kernel/laws/prime-directives.md)),
which keeps userland decoupled and keeps the blast radius of any one company's
choices inside that company.

---

## Why this shape

Three properties fall out of the five layers and the inherit-don't-fork rule, and
they are the whole reason the architecture exists:

- **Unlimited companies, fixed core.** Every company is a plugin mounted on top of a
  core that never grows when you add one. The marginal cost of a company is the
  company, not the system.
- **The OS explains itself.** One concept per file, every folder indexed, every
  reference a resolving relative link ([Directive #10](../kernel/laws/prime-directives.md)).
  The dependency graph *is* the documentation.
- **Change is deliberate.** Law is amended only by a human; the kernel and shared
  contracts change only by proposal-and-record ([Directive #7](../kernel/laws/prime-directives.md)).
  The parts that must be stable are hard to move on purpose, and the parts that must
  vary — the companies — are trivial to add.

For the decisions that produced this shape, see
[DESIGN-DECISIONS.md](DESIGN-DECISIONS.md). For where it goes next, see
[../roadmap/ROADMAP.md](../roadmap/ROADMAP.md).
