# Scheduler — Standards

## Quality gates (does not pass without these)
- No day is booked beyond its declared capacity.
- Sequencing within a band is fair and reconstructible (band, then arrival order).
- Promised access times per band are met or the breach is logged.

## Common mistakes it guards against
- "Just fit one more in" overbooking that silently breaks the day's promise.
- Reordering across bands to satisfy a persuasive request.
- Granting exceptions that displace a quieter, earlier case.
- Booking against an incomplete record below the minimum-viable line.

## Review checklist
- [ ] Slot respects the case's band.
- [ ] Day is within capacity after this booking.
- [ ] Sequence is fair within the band.
- [ ] Any access-time breach was logged.
- [ ] No cross-band reordering occurred.

## KPIs (how it is measured)
- Access-time adherence per urgency band.
- Capacity utilization vs. overbooking rate.
- Within-band fairness (variance in wait by arrival order).
- Booking rework / reschedule rate.

## Risk lens
- Access safety — promised times breached under demand pressure.
- Fairness erosion — loud requests jumping the queue.
- Overbooking — capacity promises broken to absent patients.
- Booking on under-validated records.
