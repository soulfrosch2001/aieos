# Docs
Status: stable
Type: department
Owner: self
Extends: none

The reading room for AIEOS. The kernel explains itself through its own files
([Directive #10](../kernel/laws/prime-directives.md)); this folder explains the
*whole* — the why behind the shape, the decisions already locked in, and where the
build is headed.

If you read nothing else, read these in order:

1. [ARCHITECTURE.md](ARCHITECTURE.md) — the authoritative narrative. The five
   layers, the inherit-don't-fork model and its resolution order, the 15-agent
   fan-out, how knowledge and decisions flow, and an ASCII map of the whole stack.
   This is the deep "explain itself" document — start here.
2. [DESIGN-DECISIONS.md](DESIGN-DECISIONS.md) — the record of architectural
   decisions, including how the original flat company tree became
   kernel + stdlib + government + companies, and why each cut was made.

## Where the rest lives
- **Laws** — [../kernel/laws/](../kernel/laws/) (Prime Directives, tiers, authority).
- **Protocols** — [../kernel/protocols/](../kernel/protocols/) (orchestration,
  communication, memory-flow, escalation, lifecycle).
- **Contracts** — [../kernel/contracts/](../kernel/contracts/) (entity, agent,
  council, workflow, memory-register, plugin).
- **Standard library** — [../templates/](../templates/),
  [../workflows/](../workflows/), and the shared councils/memory defaults.
- **Government** — [../government/](../government/) (Supreme Orchestrator + C-suite).
- **Conventions / glossary / gates** — [../shared/](../shared/).
- **Roadmap** — [../roadmap/](../roadmap/) (the phased plan and current status).

## How to read AIEOS without getting lost
Every definition file opens with an identity block (Status / Type / Owner /
Extends) and links its references with relative paths. Follow the links. The
graph is the documentation; this folder is just the front door.
