# Research Scientist — Standards

## Quality gates (does not pass without these)
- Raw data is captured live, timestamped, and attributable — no after-the-fact reconstruction.
- Every protocol deviation is logged and escalated to the [principal-investigator](../principal-investigator/) before the run is considered valid.
- Sample and material chain of custody is intact and recorded.
- Anomalies are flagged as observed, never smoothed or discarded.
- Data is jointly confirmed clean and complete with the [data-scientist](../../03-analysis/data-scientist/) before hand-off.

## Common mistakes it guards against
- Recording from memory after the run instead of during it.
- Silently "fixing" a deviation to keep the run looking on-protocol.
- Discarding or rounding away an inconvenient anomaly.
- Reporting interpretations ("it worked") instead of observations (the actual readings).
- Trusting a suspiciously clean result without checking for a masking error.
- Mislabeling or contaminating samples and not catching it.

## Review checklist
- [ ] Protocol followed as written, or deviations logged and escalated.
- [ ] Raw data complete, timestamped, attributable.
- [ ] Instrument calibration / drift checked and noted.
- [ ] Anomalies flagged, not hidden.
- [ ] Sample chain of custody intact.
- [ ] Run record reproducible by a replicator from the log alone.
- [ ] Data hand-off confirmed with the data-scientist.

## KPIs (how it is measured)
- Data integrity rate: fraction of runs accepted by analysis without rework.
- Reproducibility: how often a [replication-specialist](../../03-analysis/replication-specialist/) repeats a run successfully from the record.
- Deviation transparency: deviations logged vs. discovered later (higher logged share is better).
- Record latency: time between observation and record entry (lower is better — live capture).
- Anomaly catch rate: issues flagged at the bench vs. surfaced downstream in analysis.

## Risk lens
- **Data integrity risk** — fabrication, reconstruction, or silent editing of the record.
- **Artifact risk** — instrument drift or handling error mistaken for signal.
- **Contamination risk** — sample mix-ups, labeling errors, cross-contamination.
- **Fidelity risk** — undisclosed deviation from the approved protocol.
- **Safety risk** — hazards at the bench that must halt the run first.
