<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: content-production
Status: stable
Type: workflow
Owner: content-strategist
Extends: documentation

**Purpose:** Produce and review a single content piece — a post, article, script,
or asset — so it ships on-brand, on-brief, and correct.
**Default Tier:** [T1](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** content-strategist
**Extends:** stdlib [documentation](../../workflows/documentation.md)

## Trigger
A request for one content artifact against an existing brief or campaign — sized
[T1](../../kernel/laws/engagement-tiers.md) by the
[agency-orchestrator](../../kernel/protocols/orchestration.md). A whole campaign of
coordinated content is [campaign-launch](campaign-launch.md) (T2); a change to brand
voice itself is [brand-review](brand-review.md) (T3).

## Participants
- [agency-orchestrator](../../kernel/protocols/orchestration.md) — routes to a writer (never executes craft, Directive [#2](../../kernel/laws/prime-directives.md)).
- 1–3 content agents — [copywriter](../03-content/copywriter/), [social-media-manager](../03-content/social-media-manager/) (T1 fan-out).
- [content-strategist](../03-content/content-strategist/) — Gate A and Gate B sign-off (no council at T1).
- [strategy-director](../01-executive/strategy-director/) — brand veto if the piece drifts off-voice.

## Inputs
The brief or campaign the piece serves, the target audience and channel, and the
brand voice it must hold to.

## Steps
```
brief ─> [GATE A: brief + brand voice agreed] ─> draft ─> [GATE B: on-brand + accurate] ─> publish ─> record
```
1. **Scope** — content agent — confirm the brief, audience, channel, and voice. `[GATE A]`
2. **Draft** — content agent — produce the piece to the brief; one artifact per request.
3. **Self-check** — content agent — verify facts, claims, and links resolve ([conventions](../../shared/conventions.md)).
4. **Review** — content-strategist — check against brief, brand voice, and accuracy. `[GATE B]`
5. **Publish** — content agent — ship to the agreed channel.
6. **Record** — agency-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — brief + brand voice agreed:** the piece targets a defined audience,
  channel, and voice — not "content in general."
- **Gate B — on-brand + accurate:** the artifact matches the brief, holds brand
  voice, and every claim and link checks out
  (dimensions 2 and 9, [quality-standards](../../shared/quality-standards.md)).

## Approval Process
Content-strategist signs both gates. The strategy-director may veto on a brand-voice
violation; the [chief-auditor](../01-executive/chief-auditor/) may veto on a quality
violation. See [decision-authority](../../kernel/laws/decision-authority.md).

## Outputs
The published content piece, on-brand and on-brief, with claims verified and links
resolving.

## Completion Criteria
- [ ] Brief, audience, and brand voice agreed (Gate A).
- [ ] One artifact per request; facts and links verified.
- [ ] On-brand and accurate (Gate B); memory registers appended.

## Memory Updates
- [campaign-results](../memory/registers/campaign-results.md) — the piece's performance once measured, if it belongs to a campaign.
- [audience-insights](../memory/registers/audience-insights.md) — any audience reaction or hypothesis worth parking.

## Failure / Rollback
Off-voice or off-brief at Gate B → revise the draft (or file the gap back to the
campaign if the brief itself is wrong). A broken link or unverifiable claim blocks
publish — it is not cosmetic. The piece sprawls past one artifact → split the
request, never let it become an uncoordinated campaign.
