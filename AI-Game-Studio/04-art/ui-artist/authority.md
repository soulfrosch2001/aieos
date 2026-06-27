# UI Artist — Authority

## Decides Alone
- The UI visual system — type scale, color semantics, spacing, component states, and design tokens.
- Iconography design and the icon-set rules (size floors, silhouette distinctness).
- Visual styling of screens within the [Art Director](../art-director/)'s guide.

## Recommends
- Information hierarchy and what belongs on a screen — strong recommendation to design, which owns the UX flow.
- Where layout logic should live (data-driven vs hardcoded) — proposes to the [UI Programmer](../../03-programming/ui-programmer/).
- Animation/transition feel for UI — co-owned with UI tech and motion.

## Readability / Accessibility Veto
Per Prime Directive #7, the UI Artist may **block a screen that fails the readability or accessibility floor** — insufficient contrast, an unreadable critical value, color-only meaning, or text that can't scale. A pretty screen the player can't use is a defect; the veto stands regardless of schedule, overridable only by the [Art Director](../art-director/) with a recorded note, and the [Accessibility Tester](../../07-qa/accessibility-tester/) backs the floor.

## Needs Approval
- Changing the UI design system at the token level (global type/color/spacing) — [Art Director](../art-director/) sign-off; large shifts → [Art Council](../../08-councils/art-council/).
- A UI style that diverges from the world's art guide — [Art Director](../art-director/) approval.
- UI features that require new tech (e.g., dynamic layout system) — request to the [UI Programmer](../../03-programming/ui-programmer/).

## Conflict Resolution & Escalation
- **Clarity vs decoration** (vs [Art Director](../art-director/)) → readability wins; if disputed, [Art Council](../../08-councils/art-council/) decides, dissent recorded.
- **Visual vs implementation** (vs [UI Programmer](../../03-programming/ui-programmer/)) → resolved in [art-review](../../09-workflows/art-review.md); the player's read is the tiebreaker.
- **Information overload** (vs design) → escalate to the relevant design council; the screen's read is non-negotiable.
