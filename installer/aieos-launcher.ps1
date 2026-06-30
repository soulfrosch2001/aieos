# AIEOS Launcher — a small NATIVE window (not a browser) to check status and update the system
# with one click. Opened by the Desktop/Start-Menu shortcut the installer creates.
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

$navy  = [System.Drawing.Color]::FromArgb(17, 26, 46)
$blue  = [System.Drawing.Color]::FromArgb(58, 43, 255)
$paper = [System.Drawing.Color]::FromArgb(238, 241, 247)
$ok    = [System.Drawing.Color]::FromArgb(22, 163, 74)
$muted = [System.Drawing.Color]::FromArgb(91, 102, 120)

$form = New-Object System.Windows.Forms.Form
$form.Text = 'AIEOS'
$form.ClientSize = New-Object System.Drawing.Size(460, 340)
$form.StartPosition = 'CenterScreen'
$form.BackColor = [System.Drawing.Color]::White
$form.FormBorderStyle = 'FixedSingle'
$form.MaximizeBox = $false

# --- Header band (navy) with the drawn logo + wordmark ---
$header = New-Object System.Windows.Forms.Panel
$header.Size = New-Object System.Drawing.Size(460, 96)
$header.Location = New-Object System.Drawing.Point(0, 0)
$header.BackColor = $navy
$header.Add_Paint({
  param($s, $e)
  $g = $e.Graphics
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 7)
  $pen.StartCap = 'Round'; $pen.EndCap = 'Round'; $pen.LineJoin = 'Round'
  $pts = [System.Drawing.Point[]]@(
    (New-Object System.Drawing.Point(30, 70)),
    (New-Object System.Drawing.Point(52, 28)),
    (New-Object System.Drawing.Point(74, 70))
  )
  $g.DrawLines($pen, $pts)
  $bb = New-Object System.Drawing.SolidBrush($blue)
  $g.FillEllipse($bb, 47, 44, 10, 10)
  $g.FillRectangle($bb, 49, 56, 6, 15)
  $wf = New-Object System.Drawing.Font('Segoe UI', 22, [System.Drawing.FontStyle]::Bold)
  $g.DrawString('AIEOS', $wf, [System.Drawing.Brushes]::White, 96, 30)
})
$form.Controls.Add($header)

$verLbl = New-Object System.Windows.Forms.Label
$verLbl.Font = New-Object System.Drawing.Font('Segoe UI', 10)
$verLbl.ForeColor = $muted
$verLbl.AutoSize = $true
$verLbl.Location = New-Object System.Drawing.Point(28, 116)
$form.Controls.Add($verLbl)

$status = New-Object System.Windows.Forms.Label
$status.Font = New-Object System.Drawing.Font('Segoe UI', 15, [System.Drawing.FontStyle]::Bold)
$status.AutoSize = $true
$status.Location = New-Object System.Drawing.Point(26, 146)
$status.Text = 'Verificando...'
$form.Controls.Add($status)

$updBtn = New-Object System.Windows.Forms.Button
$updBtn.Text = 'Atualizar o sistema'
$updBtn.Font = New-Object System.Drawing.Font('Segoe UI', 11, [System.Drawing.FontStyle]::Bold)
$updBtn.Size = New-Object System.Drawing.Size(240, 48)
$updBtn.Location = New-Object System.Drawing.Point(26, 196)
$updBtn.FlatStyle = 'Flat'; $updBtn.FlatAppearance.BorderSize = 0
$updBtn.BackColor = $blue; $updBtn.ForeColor = [System.Drawing.Color]::White
$updBtn.Cursor = 'Hand'
$form.Controls.Add($updBtn)

$guideBtn = New-Object System.Windows.Forms.Button
$guideBtn.Text = 'Abrir guia'
$guideBtn.Font = New-Object System.Drawing.Font('Segoe UI', 11)
$guideBtn.Size = New-Object System.Drawing.Size(160, 48)
$guideBtn.Location = New-Object System.Drawing.Point(276, 196)
$guideBtn.FlatStyle = 'Flat'; $guideBtn.FlatAppearance.BorderColor = [System.Drawing.Color]::FromArgb(226, 230, 239)
$guideBtn.BackColor = [System.Drawing.Color]::White; $guideBtn.ForeColor = $navy
$guideBtn.Cursor = 'Hand'
$form.Controls.Add($guideBtn)

$msg = New-Object System.Windows.Forms.Label
$msg.Font = New-Object System.Drawing.Font('Segoe UI', 9)
$msg.ForeColor = $muted
$msg.AutoSize = $false
$msg.Size = New-Object System.Drawing.Size(410, 36)
$msg.Location = New-Object System.Drawing.Point(28, 256)
$form.Controls.Add($msg)

$foot = New-Object System.Windows.Forms.Label
$foot.Text = 'AIEOS - painel local'
$foot.Font = New-Object System.Drawing.Font('Segoe UI', 8)
$foot.ForeColor = $muted
$foot.AutoSize = $true
$foot.Location = New-Object System.Drawing.Point(28, 312)
$form.Controls.Add($foot)

function Refresh-Status {
  $local = Get-LocalVer
  $verLbl.Text = "Versao instalada: $local"
  $remote = Get-RemoteVer
  if ($null -eq $remote) {
    $status.Text = 'Status offline'; $status.ForeColor = [System.Drawing.Color]::Gray; $updBtn.Enabled = $false
  } elseif ($remote -ne $local) {
    $status.Text = "Atualizacao disponivel -> $remote"; $status.ForeColor = $blue; $updBtn.Enabled = $true
  } else {
    $status.Text = 'Tudo atualizado'; $status.ForeColor = $ok; $updBtn.Enabled = $true
  }
}

$updBtn.Add_Click({
  $updBtn.Enabled = $false; $msg.Text = 'Atualizando... isso pode levar um minuto.'; $form.Refresh()
  $p = Start-Process -FilePath 'node' -ArgumentList @((Join-Path $root 'scripts\update.mjs')) -WorkingDirectory $root -WindowStyle Hidden -PassThru -Wait
  if ($p.ExitCode -eq 0) { $msg.Text = 'Pronto! Sistema atualizado.' } else { $msg.Text = 'Houve um problema ao atualizar. Tente mais tarde.' }
  $updBtn.Enabled = $true; Refresh-Status
})

$guideBtn.Add_Click({
  $desktopGuide = Join-Path ([Environment]::GetFolderPath('Desktop')) 'AIEOS - Comece Aqui\AIEOS - Comece Aqui.html'
  $bundled = Join-Path $root 'installer\welcome\comece-aqui.html'
  if (Test-Path $desktopGuide) { Start-Process $desktopGuide }
  elseif (Test-Path $bundled) { Start-Process $bundled }
  else { $msg.Text = 'Guia nao encontrado.' }
})

$form.Add_Shown({ $form.Activate(); Refresh-Status })
[void]$form.ShowDialog()
