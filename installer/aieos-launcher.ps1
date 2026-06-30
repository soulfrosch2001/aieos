# AIEOS Launcher — a small NATIVE window (not a browser) to check status and update the system
# with one click. Opened by the Desktop/Start-Menu shortcut the installer creates. No terminal,
# no dependencies beyond what ships with Windows + the Node that AIEOS already uses.
$ErrorActionPreference = 'SilentlyContinue'
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

# Install root = parent of installer\ (this script lives in installer\).
$root = Split-Path -Parent $PSScriptRoot
$pkgPath = Join-Path $root 'package.json'

function Get-LocalVer { try { (Get-Content $pkgPath -Raw | ConvertFrom-Json).version } catch { '0.0.0' } }
function Get-RemoteVer {
  try {
    $url = (Get-Content $pkgPath -Raw | ConvertFrom-Json).repository.url
    if ($url -match 'github\.com[:/]+([^/]+)/([^/.]+)') {
      $slug = "$($Matches[1])/$($Matches[2])"
      return (Invoke-RestMethod -Uri "https://raw.githubusercontent.com/$slug/main/package.json" -TimeoutSec 6).version
    }
  } catch { }
  return $null
}

$navy = [System.Drawing.Color]::FromArgb(17, 26, 46)
$blue = [System.Drawing.Color]::FromArgb(58, 43, 255)
$paper = [System.Drawing.Color]::FromArgb(238, 241, 247)
$ok = [System.Drawing.Color]::FromArgb(22, 163, 74)

$form = New-Object System.Windows.Forms.Form
$form.Text = 'AIEOS'
$form.Size = New-Object System.Drawing.Size(440, 300)
$form.StartPosition = 'CenterScreen'
$form.BackColor = $paper
$form.FormBorderStyle = 'FixedSingle'
$form.MaximizeBox = $false

$title = New-Object System.Windows.Forms.Label
$title.Text = 'AIEOS'
$title.Font = New-Object System.Drawing.Font('Segoe UI', 22, [System.Drawing.FontStyle]::Bold)
$title.ForeColor = $navy
$title.AutoSize = $true
$title.Location = New-Object System.Drawing.Point(24, 20)
$form.Controls.Add($title)

$verLbl = New-Object System.Windows.Forms.Label
$verLbl.Font = New-Object System.Drawing.Font('Segoe UI', 10)
$verLbl.ForeColor = [System.Drawing.Color]::FromArgb(91, 102, 120)
$verLbl.AutoSize = $true
$verLbl.Location = New-Object System.Drawing.Point(26, 66)
$form.Controls.Add($verLbl)

$status = New-Object System.Windows.Forms.Label
$status.Font = New-Object System.Drawing.Font('Segoe UI', 13, [System.Drawing.FontStyle]::Bold)
$status.AutoSize = $true
$status.Location = New-Object System.Drawing.Point(26, 100)
$status.Text = 'Verificando...'
$form.Controls.Add($status)

$updBtn = New-Object System.Windows.Forms.Button
$updBtn.Text = 'Atualizar o sistema'
$updBtn.Font = New-Object System.Drawing.Font('Segoe UI', 11, [System.Drawing.FontStyle]::Bold)
$updBtn.Size = New-Object System.Drawing.Size(220, 46)
$updBtn.Location = New-Object System.Drawing.Point(26, 150)
$updBtn.FlatStyle = 'Flat'
$updBtn.FlatAppearance.BorderSize = 0
$updBtn.BackColor = $blue
$updBtn.ForeColor = [System.Drawing.Color]::White
$form.Controls.Add($updBtn)

$msg = New-Object System.Windows.Forms.Label
$msg.Font = New-Object System.Drawing.Font('Segoe UI', 9)
$msg.ForeColor = [System.Drawing.Color]::FromArgb(91, 102, 120)
$msg.AutoSize = $false
$msg.Size = New-Object System.Drawing.Size(390, 40)
$msg.Location = New-Object System.Drawing.Point(26, 208)
$form.Controls.Add($msg)

function Refresh-Status {
  $local = Get-LocalVer
  $verLbl.Text = "Versao instalada: $local"
  $remote = Get-RemoteVer
  if ($null -eq $remote) {
    $status.Text = 'Status offline'; $status.ForeColor = [System.Drawing.Color]::Gray
    $updBtn.Enabled = $false
  } elseif ($remote -ne $local) {
    $status.Text = "Atualizacao disponivel -> $remote"; $status.ForeColor = $blue
    $updBtn.Enabled = $true
  } else {
    $status.Text = 'Tudo atualizado'; $status.ForeColor = $ok
    $updBtn.Enabled = $true
  }
}

$updBtn.Add_Click({
  $updBtn.Enabled = $false
  $msg.Text = 'Atualizando... isso pode levar um minuto.'
  $form.Refresh()
  $p = Start-Process -FilePath 'node' -ArgumentList @((Join-Path $root 'scripts\update.mjs')) -WorkingDirectory $root -WindowStyle Hidden -PassThru -Wait
  if ($p.ExitCode -eq 0) { $msg.Text = 'Pronto! Sistema atualizado.' } else { $msg.Text = 'Houve um problema ao atualizar. Tente de novo mais tarde.' }
  $updBtn.Enabled = $true
  Refresh-Status
})

$form.Add_Shown({ $form.Activate(); Refresh-Status })
[void]$form.ShowDialog()
