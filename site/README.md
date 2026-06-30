# site/ — the AIEOS website

The public website for AIEOS, hosted free on **GitHub Pages**:

- [index.html](index.html) — landing page: what AIEOS is, download (installer **and** repository
  source), and how it works.
- [privacy.html](privacy.html) — privacy & data page (LGPD): what stays local, the opt-in sharing,
  and how to request deletion.
- [styles.css](styles.css) — shared styling (AIEOS brand: navy `#111a2e`, blue `#3a2bff`).

## Publish (one time, maintainer)
Deployed by [.github/workflows/pages.yml](../.github/workflows/pages.yml) on every push to
`site/`. Enable it once: GitHub → **Settings → Pages → Build and deployment → Source: GitHub
Actions**. The site then goes live at `https://soulfrosch2001.github.io/aieos/`.

The installer download button points to the GitHub **Releases** page — tag a release (`vX.Y.Z`)
so the release workflow builds and attaches the `.exe`/`.pkg` for it to link to.
