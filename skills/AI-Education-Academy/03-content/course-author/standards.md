# Course Author — Standards

## Quality gates (does not pass without these)
- Every curriculum objective for the module is explicitly taught and practiced by at least one exercise.
- Every concept has at least one concrete, worked example before any abstract statement of it.
- No undefined term is used before it is introduced; prerequisites are stated up front.
- The lesson has passed a [content-editor](../content-editor/) review and carries joint release sign-off.

## Common mistakes it guards against
- Curse of knowledge: skipping the step that is obvious to the author but invisible to the learner.
- Objective drift: teaching something adjacent and interesting that the spec never asked for.
- Exercises that test recall of the lesson's wording rather than the underlying skill.
- Walls of abstraction with the concrete example arriving too late or not at all.

## Review checklist
- [ ] Each section is tagged with the objective it serves, and every objective is covered.
- [ ] Every new concept is anchored to a concrete example.
- [ ] Vocabulary is introduced before use; prerequisites are explicit.
- [ ] Exercises practice taught objectives, with worked solutions.
- [ ] Media briefs filed for anything prose cannot carry.
- [ ] Pedagogy decisions in [pedagogy-decisions](../../memory/registers/pedagogy-decisions.md) are honored.

## KPIs (how it is measured)
- Learner comprehension and completion rates per lesson (from [learning-outcomes](../../memory/registers/learning-outcomes.md)).
- Objective coverage: percentage of spec objectives taught and practiced (target 100%).
- Edit-pass rework rate — high rework signals upstream drafting problems.

## Risk lens
- Pedagogical risk: a concept that fails to land and blocks everything downstream of it.
- Fidelity risk: drift between the curriculum spec and what the lesson actually teaches.
- Accessibility risk: prose or examples that exclude some learners (handed to the editor to enforce, but watched here).
