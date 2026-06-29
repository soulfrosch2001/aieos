# installer/ — Native Windows Installer
Status: stable
Type: tooling
Owner: Supreme Orchestrator
Extends: none

A native, per-user Windows installer (`.exe`) that **installs AIEOS and configures it
machine-wide in one step** — like any normal desktop app. There is no separate "now run
setup" stage: configuration happens *during* installation.

## What it does

1. Copies the whole AIEOS repo into `%LOCALAPPDATA%\Programs\AIEOS` (per-user, **no admin
   rights required**).
2. While installing, runs [post-install.ps1](post-install.ps1), which performs:
   - `npm install --omit=dev` (install dependencies), then
   - `node scripts/install-command.mjs` — the equivalent of `npm run setup`, which
     registers the global `/aieos` command and the machine-wide bootstrap in `~/.claude`
     (see [../scripts/install-command.mjs](../scripts/install-command.mjs)).
3. On **uninstall** (Windows "Apps" / "Add or remove programs"), it runs
   `npm run teardown` first to clean `~/.claude`
   (see [../scripts/teardown-command.mjs](../scripts/teardown-command.mjs)), then removes
   the files.

## Prerequisite

**Node.js >= 18** must already be installed (download from <https://nodejs.org>). The
installer checks `node --version` up front and aborts with a clear message if Node is
missing or older than 18 — AIEOS cannot configure itself without it.

## Files

| File | What it is |
|------|------------|
| [aieos.iss](aieos.iss) | The [Inno Setup](https://jrsoftware.org/isinfo.php) script: per-user install, file copy with excludes, the configure-while-installing `[Run]` step, the uninstall teardown, and the Node.js preflight. |
| [post-install.ps1](post-install.ps1) | PowerShell run during install: `npm install` then the AIEOS setup. Error-tolerant — warnings do not fail the install; a genuine npm/node failure is surfaced clearly. |

## How it's built

The `.exe` is compiled with **Inno Setup** by CI on GitHub (Inno Setup is not required on
your machine). To build it locally instead, install Inno Setup and run from the repo root:

```
ISCC installer\aieos.iss
```

The compiled artifact is written to **`installer/Output/AIEOS-Setup-<version>.exe`**
(e.g. `installer/Output/AIEOS-Setup-0.1.0.exe`). The version comes from the `AppVersion`
define in [aieos.iss](aieos.iss) and must match `version` in
[../package.json](../package.json).

## How to uninstall

Open Windows **Settings → Apps → Installed apps** (or "Add or remove programs"), find
**AIEOS**, and choose **Uninstall**. The uninstaller runs `npm run teardown` to remove the
global `/aieos` command and the machine-wide AIEOS block from `~/.claude` before deleting
the program files.
