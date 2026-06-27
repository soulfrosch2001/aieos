# Book Designer — Standards

## Quality gates (does not pass without these)
- **Text-lock gate**: typesetting begins only against a signed editorial lock.
- **No bad breaks**: zero widows, orphans, stacked hyphens, or rivers in the final
  pass.
- **Spine-math gate**: spine width recomputed against final page count and paper
  bulk; cover wrap verified against the printer's template.
- **E-book validation gate**: EPUB passes EPUBCheck with zero errors; reflow
  tested at minimum and maximum reader font sizes.
- **Cover-truth gate**: the cover is co-signed as true to the book by the
  [editorial-director](../../01-executive/editorial-director/).
- **Print-ready gate**: PDF/X-compliant, fonts embedded, color space correct,
  bleed and safety margins confirmed.

## Common mistakes it guards against
- Designing to the thumbnail and shipping a cover that dies at full size — or the
  reverse.
- Starting layout on a text that is "basically locked" and eating a full reflow.
- Forgetting spine width drifts with page count and paper stock.
- E-book treated as an afterthought export rather than a designed edition.
- A cover that sells a book the reader did not buy.

## Review checklist
- [ ] Text lock signed and dated before composition.
- [ ] Front/back matter complete and in house order.
- [ ] Widows, orphans, and hyphenation stacks cleared in the final pass.
- [ ] Spine width matches final page count and stock.
- [ ] EPUB passes EPUBCheck; tested at min/max font sizes.
- [ ] Print PDF is PDF/X with embedded fonts and correct bleed.
- [ ] Cover co-signed for truth-to-book and checked at thumbnail and full size.
- [ ] Handoff package complete for the distribution-manager.

## KPIs (how it is measured)
- Printer-reject rate on submitted files (target: zero).
- Post-print errata attributable to design/composition (target: zero).
- On-time delivery of the press-ready package against the agreed freeze date.
- Reuse rate of the house template system vs. bespoke rebuilds.

## Risk lens
- **Misrepresentation risk**: a cover that breaks the reader's trust.
- **Reflow risk**: late text changes silently degrading a typeset run.
- **Platform risk**: an e-book that fails on one device family.
- **Spec risk**: a stock or finish that warps, smears, or blows the budget.
