<#
.SYNOPSIS
  AIEOS post-install configuration. Run by the Inno Setup installer right after files
  are copied. Installs dependencies and registers AIEOS machine-wide (the /aieos command
  and the ~/.claude bootstrap), i.e. the equivalent of `npm install` + `npm run setup`.

.NOTES
  Error-tolerant by design: npm/node warnings must NOT fail the install. The script exits
  0 on warnings and only surfaces a hard error (and exits non-zero) if npm or node is
  genuinely missing or the setup step cannot run.
#>
param(
    # Install directory, passed by the installer as {app}. Falls back to this script's
    # parent folder (installer\ -> repo root) when run standalone.
    [string]$InstallDir
)

$ErrorActionPreference = 'Continue'

if ([string]::IsNullOrWhiteSpace($InstallDir)) {
    $InstallDir = Split-Path -Parent $PSScriptRoot
}

Write-Host '============================================'
Write-Host ' Configuring AIEOS'
Write-Host "   install dir: $InstallDir"
Write-Host '============================================'

if (-not (Test-Path $InstallDir)) {
    Write-Host "ERROR: install directory not found: $InstallDir" -ForegroundColor Red
    exit 1
}
Set-Location $InstallDir

# --- Locate npm / node -------------------------------------------------------
$npm = Get-Command npm -ErrorAction SilentlyContinue
$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
    Write-Host 'ERROR: Node.js was not found on PATH. Install Node.js >= 18 from https://nodejs.org and re-run setup.' -ForegroundColor Red
    exit 1
}
if (-not $npm) {
    Write-Host 'ERROR: npm was not found on PATH. Install Node.js >= 18 (which includes npm) from https://nodejs.org.' -ForegroundColor Red
    exit 1
}

Write-Host ("node: " + (& node --version))
Write-Host ("npm:  " + (& npm --version))

# --- Step 1: install dependencies -------------------------------------------
Write-Host ''
Write-Host '[1/2] Installing dependencies (npm install --omit=dev)...'
# npm on Windows is npm.cmd; call through cmd so the shim resolves reliably.
& npm install --omit=dev
if ($LASTEXITCODE -ne 0) {
    Write-Host "WARNING: 'npm install --omit=dev' exited with code $LASTEXITCODE. Retrying with full install..." -ForegroundColor Yellow
    & npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: npm install failed (exit $LASTEXITCODE). AIEOS files are installed but dependencies are missing." -ForegroundColor Red
        Write-Host "You can finish setup manually: open a terminal in '$InstallDir' and run 'npm install' then 'npm run setup'." -ForegroundColor Red
        exit 1
    }
}
Write-Host 'Dependencies installed.'

# --- Step 2: register AIEOS machine-wide (npm run setup) ---------------------
Write-Host ''
Write-Host '[2/2] Registering AIEOS machine-wide (node scripts/install-command.mjs)...'
& node scripts/install-command.mjs
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: AIEOS setup failed (exit $LASTEXITCODE). Run 'npm run setup' manually from '$InstallDir'." -ForegroundColor Red
    exit 1
}

Write-Host ''
Write-Host '============================================'
Write-Host ' AIEOS configured. The /aieos command and machine-wide bootstrap are active.'
Write-Host '============================================'

# Success — exit 0 even if individual steps printed warnings.
exit 0
