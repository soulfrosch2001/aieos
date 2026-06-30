# AIEOS app launcher (the clickable "AIEOS" program). Opens the modern hub window
# ("Navy Aurora") as a borderless app window when a Chromium browser (Edge/Chrome) is
# available; otherwise falls back to the native WinForms launcher. No terminal, no browser tab.
$ErrorActionPreference = 'SilentlyContinue'
$root = Split-Path -Parent $PSScriptRoot

$edge = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
) | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1

if ($edge) {
  # The hub starts a local 127.0.0.1 server and opens itself as an app window; it self-quits
  # when the window closes (pagehide beacon -> /api/quit).
  Start-Process node -ArgumentList ('"' + (Join-Path $root 'scripts\hub.mjs') + '"') -WorkingDirectory $root -WindowStyle Hidden
} else {
  # No Chromium browser: fall back to the self-contained native window so the user never
  # lands in a browser tab.
  & (Join-Path $PSScriptRoot 'aieos-launcher.ps1')
}
