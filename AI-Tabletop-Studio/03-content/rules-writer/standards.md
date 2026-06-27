# Rules Writer — Standards

## Quality gates (does not pass without these)
- A "blind teach": a reader who has never seen the game plays a full round correctly from the book alone.
- Every term in the glossary appears with exactly one meaning everywhere.
- Every keyword and edge case has a worked example.
- Zero forward references that aren't resolved (no "see later" dead ends).

## Common mistakes it guards against
- The same concept named two ways ("discard pile" vs. "graveyard").
- Rules that assume designer context the reader does not have.
- Flavor smuggled into a rule sentence, creating two readings.
- "Obvious" edge cases left unwritten because the designer never hit them.

## Review checklist
- [ ] Blind-teach passed with non-playtesters.
- [ ] Glossary one-term-one-meaning audit clean.
- [ ] Every keyword has an example.
- [ ] Turn order and timing fully ordered, no ties left unresolved.
- [ ] Iconography legend matches [component-designer](../component-designer/) exactly.

## KPIs (how it is measured)
- Errata issued per title after launch (target: trending to zero).
- Time-to-first-turn for a blind group.
- Comprehension-failure rate in [playtest-feedback](../../memory/registers/playtest-feedback.md).

## Risk lens
- Ambiguity risk — the rule that survives QA but breaks at a real table.
- Continuity risk — an expansion silently contradicting base rules.
- Drift risk — terminology eroding across revisions.
