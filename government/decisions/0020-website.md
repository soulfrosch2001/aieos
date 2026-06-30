# Decision 0020 — AIEOS website
Type: report
Date: 2026-06-30
Tier: T2 (Tactical — distribution + presence)
Council: none (direct human mandate)
Status: CLOSED — built; one-time Pages enable remains (2026-06-30)

## Summary
Built the official AIEOS website — a home for downloads (installer **and** repository source) and
the privacy/consent page that the opt-in memory collection (0019) needs for LGPD. Hosted free on
GitHub Pages. Gate: **14 rules, 0/0**.

## Built (`site/`)
- **`index.html`** — landing page: brand hero, what AIEOS is, three feature cards (auto-config,
  auto-update, private-by-default), a **Download** section with both the **Windows installer**
  (→ GitHub Releases) and the **repository source** (`.zip` + `git clone`), a "how it works"
  walkthrough, and a data summary linking to privacy.
- **`privacy.html`** — privacy & data page (LGPD): what stays local, the **opt-in, default-off**
  sharing and exactly what the guard sends, what is NOT collected, auto-update is download-only,
  and deletion/contact rights.
- **`styles.css`** — shared AIEOS styling (navy/blue brand).
- **Hosting** — `.github/workflows/pages.yml` deploys `site/` to GitHub Pages on every push.

## Remaining (human, one-time)
Enable Pages: GitHub → **Settings → Pages → Source: GitHub Actions**. The site then goes live at
`https://soulfrosch2001.github.io/aieos/`. The installer button links to **Releases**, so tag a
version (`vX.Y.Z`) to populate the download.

## Memory updates
- This record; its audio summary (`resumo/audio/0020-resumo.*`); the CHANGELOG entry.
