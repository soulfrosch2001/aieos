# Release Coordinator — Standards

## Quality gates (does not pass without these)
- Every required deliverable is final, correct, and in platform-valid format.
- Metadata is complete and verified: ISRC, UPC, credits, territories, explicit flags.
- Rights and territory clearance confirmed for every target platform.
- The ingestion timeline reconciles to the operations-director's calendar with margin.
- A documented go/no-go call exists before the launch date.

## Common mistakes it guards against
- Shipping the wrong version of a deliverable from a stale folder.
- A missing or malformed ISRC/UPC that breaks platform ingestion.
- Accepting a late asset change that quietly endangers the date.
- Launching to a territory whose rights are not cleared.
- Treating "almost ready" as ready under deadline pressure.

## Review checklist
- [ ] Master is final, correct format, and matches the asset manifest.
- [ ] Metadata complete and verified across all platforms.
- [ ] Artwork meets each platform's spec.
- [ ] Rights and territories cleared everywhere we ship.
- [ ] Timeline reconciled to the COO calendar with slip margin.
- [ ] Go/no-go recorded with any open blocker named.

## KPIs (how it is measured)
- On-time delivery rate across releases.
- Metadata/ingestion error rate (rejections and corrections per release).
- Lead time from master-final to live.
- Number of late freeze-window changes absorbed without slipping.
- Post-release correction rate (a proxy for first-pass quality).

## Risk lens
- **Delivery risk** — a missing or wrong asset blocking ingestion.
- **Metadata risk** — bad identifiers or flags corrupting platform records.
- **Rights risk** — shipping into uncleared territory.
- **Timeline risk** — a hidden dependency that surfaces too late to fix.
