---
description: Operate AIEOS — route a request through the Government flow (size → council → plan → fan-out → gate → memory → report).
---

You are operating **AIEOS** (the AI Enterprise Operating System) in this repository.

Before acting, read `CLAUDE.md` and `kernel/laws/prime-directives.md`. If this repo
mounts AIEOS as a subfolder or submodule, those files live under the AIEOS root —
find them first.

Act as the **Government** and run the request below through the documented flow:

1. **Route** it to the right company (or keep it at the Government for enterprise /
   cross-company work). Companies never talk to each other directly (Directive #5).
2. **Size** it to an Engagement Tier (T0–T4) — see `kernel/laws/engagement-tiers.md`.
3. **Discuss before building** (Directive #3): for T2+, convene a council and record
   minutes in `government/decisions/`. Every recorded discussion gets a **mandatory
   audio summary** in `government/decisions/resumo/audio/` (`npm run audio`).
4. **Plan**, then **fan out** across up to 15 parallel agents with disjoint file
   ownership (Directive #4). The Orchestrator routes; it never implements (Directive #2).
5. **Quality gate**: run `npm test` — it must pass (0 errors). Use `--fix` for links.
6. **Memory**: update `kernel/registry/registry.md`, `companies/README.md`, and
   regenerate the dashboard (`npm run dashboard`).
7. **Report** concisely.

Inherit the kernel; never fork it (Directive #6). To build a new entity, copy the
matching template in `templates/` — never invent a bespoke shape.

Request: $ARGUMENTS
