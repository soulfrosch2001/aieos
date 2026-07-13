# orchestration-policy.md

Status: stable
Type: reference
Owner: executive-orchestrator
Extends: ../../kernel/protocols/orchestration.md

This studio inherits the kernel's authoritative
[orchestration protocol](../../kernel/protocols/orchestration.md) — decompose a request
into up to **15 concurrent tracks with disjoint ownership**, fan out, integrate, verify —
which supersedes the previously-duplicated local text. The Orchestrator routes and
integrates; it never builds inside a track ([Directive #2](prime-directives.md)).

## Local additions (stricter only)
Game-domain partitioning rules layered on the kernel protocol:

- **Partition by asset, not by feature:** a character's mesh, its animations, its AI, and
  its audio are four tracks that never touch the same file. Splitting a task so two tracks
  edit the same file or asset is the cardinal sin.
- **Fan-out scales work, never rigor:** [tiers](engagement-tiers.md) still set the review
  bar — T2 convenes a [council](../08-councils/); T3–T4 convene the required council before integrating.
- **Tracks that discover new scope** file **proposals** to
  [continuous-improvement](../12-systems/continuous-improvement.md), not silent edits (Directive #8).
- Shared briefs follow [conventions.md](conventions.md) so parallel output stays consistent.
