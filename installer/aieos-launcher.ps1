# AIEOS Launcher — a small NATIVE window (not a browser) to check status and update the system
# with one click. Opened by the Desktop/Start-Menu shortcut the installer creates.
$ErrorActionPreference = 'SilentlyContinue'
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

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
$blueD = [System.Drawing.Color]::FromArgb(42, 29, 224)
$ok    = [System.Drawing.Color]::FromArgb(22, 163, 74)
$gray  = [System.Drawing.Color]::FromArgb(120, 130, 145)
$muted = [System.Drawing.Color]::FromArgb(74, 85, 104)

$form = New-Object System.Windows.Forms.Form
$form.Text = 'AIEOS'
$form.ClientSize = New-Object System.Drawing.Size(460, 320)
$form.StartPosition = 'CenterScreen'
$form.BackColor = [System.Drawing.Color]::White
$form.FormBorderStyle = 'FixedSingle'
$form.MaximizeBox = $false

# --- Header band (navy) with drawn logo + two-color "AIEOS" wordmark ---
$header = New-Object System.Windows.Forms.Panel
$header.Size = New-Object System.Drawing.Size(460, 96)
$header.Location = New-Object System.Drawing.Point(0, 0)
$header.BackColor = $navy
$header.Add_Paint({
  param($s, $e)
  $g = $e.Graphics
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
  $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 7)
  $pen.StartCap = 'Round'; $pen.EndCap = 'Round'; $pen.LineJoin = 'Round'
  $pts = [System.Drawing.Point[]]@(
    (New-Object System.Drawing.Point(30, 70)), (New-Object System.Drawing.Point(52, 28)), (New-Object System.Drawing.Point(74, 70)))
  $g.DrawLines($pen, $pts)
  $bb = New-Object System.Drawing.SolidBrush($blue)
  $g.FillEllipse($bb, 47, 44, 10, 10)
  $g.FillRectangle($bb, 49, 56, 6, 15)
  # Wordmark "AIEOS" vertically centered, with a blue "I"
  $wf = New-Object System.Drawing.Font('Segoe UI', 22, [System.Drawing.FontStyle]::Bold)
  $white = [System.Drawing.Brushes]::White
  $fmt = [System.Drawing.StringFormat]::GenericTypographic
  $x = 95.0; $y = 33.0
  foreach ($seg in @(@('A', $white), @('I', $bb), @('EOS', $white))) {
    $g.DrawString($seg[0], $wf, $seg[1], $x, $y, $fmt)
    $x += $g.MeasureString($seg[0], $wf, 1000, $fmt).Width
  }
})
$form.Controls.Add($header)

$verLbl = New-Object System.Windows.Forms.Label
$verLbl.Font = New-Object System.Drawing.Font('Segoe UI', 10)
$verLbl.ForeColor = $muted; $verLbl.AutoSize = $true
$verLbl.Location = New-Object System.Drawing.Point(28, 116)
$form.Controls.Add($verLbl)

$status = New-Object System.Windows.Forms.Label
$status.Font = New-Object System.Drawing.Font('Segoe UI', 14, [System.Drawing.FontStyle]::Bold)
$status.AutoSize = $true
$status.Location = New-Object System.Drawing.Point(26, 142)
$status.Text = 'Verificando...'
$form.Controls.Add($status)

$updBtn = New-Object System.Windows.Forms.Button
$updBtn.Text = 'Buscar atualizacao'
$updBtn.Font = New-Object System.Drawing.Font('Segoe UI', 11, [System.Drawing.FontStyle]::Bold)
$updBtn.Size = New-Object System.Drawing.Size(240, 46)
$updBtn.Location = New-Object System.Drawing.Point(26, 186)
$updBtn.FlatStyle = 'Flat'; $updBtn.FlatAppearance.BorderSize = 0
$updBtn.BackColor = $blue; $updBtn.ForeColor = [System.Drawing.Color]::White; $updBtn.Cursor = 'Hand'
$updBtn.FlatAppearance.MouseOverBackColor = $blueD
$updBtn.FlatAppearance.MouseDownBackColor = $navy
$form.Controls.Add($updBtn)

$guideBtn = New-Object System.Windows.Forms.Button
$guideBtn.Text = 'Abrir guia'
$guideBtn.Font = New-Object System.Drawing.Font('Segoe UI', 11)
$guideBtn.Size = New-Object System.Drawing.Size(160, 46)
$guideBtn.Location = New-Object System.Drawing.Point(276, 186)
$guideBtn.FlatStyle = 'Flat'
$guideBtn.FlatAppearance.BorderColor = [System.Drawing.Color]::FromArgb(226, 230, 239)
$guideBtn.BackColor = [System.Drawing.Color]::White; $guideBtn.ForeColor = $navy; $guideBtn.Cursor = 'Hand'
$guideBtn.FlatAppearance.MouseOverBackColor = [System.Drawing.Color]::FromArgb(238, 241, 247)
$form.Controls.Add($guideBtn)

$msg = New-Object System.Windows.Forms.Label
$msg.Font = New-Object System.Drawing.Font('Segoe UI', 9.5)
$msg.ForeColor = $muted; $msg.AutoSize = $false
$msg.Size = New-Object System.Drawing.Size(410, 34)
$msg.Location = New-Object System.Drawing.Point(28, 244)
$form.Controls.Add($msg)

$foot = New-Object System.Windows.Forms.Label
$foot.Text = 'Para usar: digite  /aieos  no Claude Code'
$foot.Font = New-Object System.Drawing.Font('Segoe UI', 9)
$foot.ForeColor = $muted; $foot.AutoSize = $true
$foot.Location = New-Object System.Drawing.Point(28, 290)
$form.Controls.Add($foot)

function Set-Updatable($enabled) {
  $updBtn.Enabled = $enabled
  if ($enabled) { $updBtn.BackColor = $blue } else { $updBtn.BackColor = [System.Drawing.Color]::FromArgb(176, 182, 194) }
}

function Refresh-Status {
  $verLbl.Text = "Versao instalada: $(Get-LocalVer)"
  $remote = Get-RemoteVer
  $local = Get-LocalVer
  if ($null -eq $remote) {
    $status.Text = "$([char]0x25CB) Status offline"; $status.ForeColor = $gray; Set-Updatable $false
  } elseif ($remote -ne $local) {
    $status.Text = "$([char]0x25CF) Atualizacao disponivel: $remote"; $status.ForeColor = $blue; Set-Updatable $true
  } else {
    $status.Text = "$([char]0x2713) Tudo atualizado"; $status.ForeColor = $ok; Set-Updatable $true
  }
}

$updBtn.Add_Click({
  Set-Updatable $false; $msg.Text = 'Atualizando... isso pode levar um minuto.'
  $status.Text = "$([char]0x25CF) Atualizando..."; $status.ForeColor = $blue
  [System.Windows.Forms.Application]::DoEvents()
  $p = Start-Process -FilePath 'node' -ArgumentList @((Join-Path $root 'scripts\update.mjs')) -WorkingDirectory $root -WindowStyle Hidden -PassThru -Wait
  if ($p.ExitCode -eq 0) { $msg.Text = 'Pronto! Sistema atualizado.' } else { $msg.Text = 'Houve um problema ao atualizar. Tente mais tarde.' }
  Refresh-Status
})

$guideBtn.Add_Click({
  $d = Join-Path ([Environment]::GetFolderPath('Desktop')) 'AIEOS - Comece Aqui\AIEOS - Comece Aqui.html'
  $b = Join-Path $root 'installer\welcome\comece-aqui.html'
  if (Test-Path $d) { Start-Process $d } elseif (Test-Path $b) { Start-Process $b } else { $msg.Text = 'Guia nao encontrado.' }
})

$form.AcceptButton = $updBtn
$form.Add_Shown({ $form.Activate(); Refresh-Status })
[void]$form.ShowDialog()
