# AI Film Studio Councils
Status: stable
Type: council-index
Owner: studio-orchestrator
Extends: none

## Purpose
The rooms where the studio's significant decisions are debated before anyone
builds (Directive [#1](../../kernel/laws/prime-directives.md)). A council decides;
it never directs the work and never edits the film (Directive
[#2](../../kernel/laws/prime-directives.md)). Each council here inherits a stdlib
council and overrides it by name — it forks nothing (Directives
[#5](../../kernel/laws/prime-directives.md),
[#6](../../kernel/laws/prime-directives.md)).

## The councils
- [greenlight-council/](greenlight-council/README.md) — decides whether a film gets
  made. Chair: [ceo](../01-executive/ceo/README.md). Extends the stdlib
  [feature-council](../../councils/feature-council/README.md).
- [creative-council/](creative-council/README.md) — adjudicates creative and story
  direction across films. Chair:
  [creative-director](../01-executive/creative-director/README.md). Extends the
  stdlib [architecture-council](../../councils/architecture-council/README.md).

## When a council is convened
By engagement tier, never standing — see
[engagement-tiers.md](../../kernel/laws/engagement-tiers.md). The
[studio-orchestrator](../01-executive/studio-orchestrator/README.md) sizes the
request and convenes the right room; it routes but never decides the content
(Directive [#2](../../kernel/laws/prime-directives.md)).

## Shared rules
- Dissent is recorded, never suppressed
  ([communication.md](../../kernel/protocols/communication.md)).
- Minutes are appended to a memory register and never erased; correct by adding
  (Directive [#7](../../kernel/laws/prime-directives.md),
  [memory-flow.md](../../kernel/protocols/memory-flow.md)).
- Deadlocks escalate per [escalation.md](../../kernel/protocols/escalation.md).
