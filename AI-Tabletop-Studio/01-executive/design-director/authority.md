## Decides alone
- Studio-wide design standards and shared conventions.
- Whether a system is coherent enough to proceed past design review.

## Decides with a peer (joint sign-off)
- A genre or platform shift that strains coherence — joint with the [ceo](../ceo/), who owns *whether* the game exists.
- The scope-vs-polish boundary on a given title — negotiated with the producer; the date and the integrity are weighed together.

## Recommends only
- The portfolio direction (advises the CEO; does not set it).
- Resourcing and schedule (advises the producer).

## Decision rules
- If a system is internally inconsistent or breaks a portfolio standard, it does not ship — this is the **DESIGN veto** (maps to the CTO technical veto in [decision-authority.md](../../../kernel/laws/decision-authority.md)).
- A veto is craft-justified in writing, names the broken invariant, and points to the fix — it is a stop, not a tantrum.
- Prefer fixing the standard over granting a one-off exception; exceptions are recorded with their reason (Directive #6).

## Escalation rules
- A DESIGN veto stops the work; resolution is a fixed design or a maintained exception, escalated via [../../../kernel/protocols/escalation.md](../../../kernel/protocols/escalation.md) if deadlocked.
- A chief-auditor quality veto is independent of the DESIGN veto; both must clear before launch.
- Coherence deadlock with the CEO escalates one level up the chain; never resolved company-to-company (Directive #5).
