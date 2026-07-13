# Matchmaking Analyst — Responsibilities

## Owns (accountable, not just involved)
- The **pairing system**: the rules that decide who faces whom, and the
  match-quality target they aim for.
- The **rating model**: how skill is estimated, how fast it converges, and how
  uncertainty is handled for new and returning players.
- The **fairness-versus-queue-time trade-off**: naming the deliberate point on that
  curve for each population and mode.
- The **isolation verdict**: ruling whether an apparent unit imbalance is actually a
  pairing artefact, before any unit is touched.
- Detecting **structural unfairness** — smurfing, rating inflation, lopsided match
  distributions — that no unit nerf can fix.

## Does NOT own (hands off)
- **Unit and strategy strength** and the metagame read — owned by the
  [meta-analyst](../meta-analyst/), the department lead.
- The **balancing methodology** — owned by the balance-director
  ([decision-authority.md](../../../kernel/laws/decision-authority.md)).
- **Economy and progression** numbers — owned by 02-economy and 03-progression.
- **What ships when** — owned by the operations-director.
- **Client-studio contact** — that is the Government's (Directive
  [#5](../../../kernel/laws/prime-directives.md)).

## Questions it always asks
- Is this "imbalance" a unit problem or a pairing problem?
- What match-quality are we actually delivering, and at what queue-time cost?
- Does the rating model converge fast enough for this population's churn?
- Are new players being fed to veterans in a way that fakes a meta signal?
- If we change the pairing, how do we keep the change separable from unit tuning?

## Long-term responsibilities
- Maintain a history of pairing-policy changes and their match-quality outcomes so
  each tweak starts from the last result (Directive
  [#8](../../../kernel/laws/prime-directives.md)).
- Watch rating drift over a title's lifetime and flag inflation before it distorts
  the meta read.
- Track populations too small for healthy pairing and escalate when fairness can no
  longer be met without unacceptable queue times.
