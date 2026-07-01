# AIEOS Launcher — a REAL NATIVE WPF window ("Navy Aurora") to check status and update
# the system with one click. Opened by the Desktop/Start-Menu shortcut the installer creates.
Add-Type -AssemblyName PresentationFramework, PresentationCore, WindowsBase

# --- Taskbar identity: distinct AppUserModelID so Windows groups/pins us as "AIEOS" ---
try {
  Add-Type -Namespace Win32 -Name Sh -MemberDefinition '[System.Runtime.InteropServices.DllImport("shell32.dll")] public static extern int SetCurrentProcessExplicitAppUserModelID([System.Runtime.InteropServices.MarshalAs(System.Runtime.InteropServices.UnmanagedType.LPWStr)] string id);'
  [Win32.Sh]::SetCurrentProcessExplicitAppUserModelID('AIEOS.App') | Out-Null
} catch { }

# --- Single-instance mutex (kept referenced for the whole process lifetime) ---
$script:created = $false
$script:mutex = New-Object System.Threading.Mutex($true, 'Local\AIEOS_SingleInstance', [ref]$script:created)
if (-not $script:created) { return }

# --- PS2EXE-safe root resolution ---
# $PSScriptRoot is EMPTY when compiled to AIEOS.exe by PS2EXE, so fall back to the exe path.
$exeDir = if ($PSScriptRoot) { $PSScriptRoot } else { Split-Path -Parent ([Diagnostics.Process]::GetCurrentProcess().MainModule.FileName) }
$root = Split-Path -Parent $exeDir   # exe/script lives in installer\ -> app root is its parent
$pkgPath = Join-Path $root 'package.json'
$script:rootValid = Test-Path $pkgPath

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
function Get-RuleCount {
  try { @(Get-ChildItem -Path (Join-Path $root 'tests\conformance\rules') -Filter '*.mjs' -File).Count } catch { 0 }
}
# Numeric, component-wise semver compare — mirrors update.mjs cmpVer.
# Returns 1 if a>b, -1 if a<b, 0 if equal. Avoids "0.2.0" < "0.10.0" string pitfall.
function Compare-Ver($a, $b) {
  $pa = ("$a".Split('.') | ForEach-Object { [int]($_ -replace '\D', '') })
  $pb = ("$b".Split('.') | ForEach-Object { [int]($_ -replace '\D', '') })
  for ($i = 0; $i -lt 3; $i++) {
    $x = if ($i -lt $pa.Count) { $pa[$i] } else { 0 }
    $y = if ($i -lt $pb.Count) { $pb[$i] } else { 0 }
    if ($x -gt $y) { return 1 }
    if ($x -lt $y) { return -1 }
  }
  return 0
}

# ---------------------------------------------------------------------------
# XAML — single-quoted here-string so PowerShell does NOT interpolate.
# ---------------------------------------------------------------------------
$xaml = @'
<Window xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="AIEOS"
        Width="1000" Height="640"
        WindowStyle="None" AllowsTransparency="True" Background="Transparent"
        ResizeMode="NoResize" WindowStartupLocation="CenterScreen"
        FontFamily="Segoe UI">
  <Border x:Name="rootContent" CornerRadius="16" ClipToBounds="True" Opacity="0">
    <Border.Background>
      <LinearGradientBrush StartPoint="0.15,0" EndPoint="0.85,1">
        <GradientStop Color="#0d1736" Offset="0"/>
        <GradientStop Color="#080d1c" Offset="0.72"/>
      </LinearGradientBrush>
    </Border.Background>

    <Grid>
      <!-- Aurora ambient lights (behind everything) -->
      <Canvas>
        <Ellipse Width="560" Height="560" Canvas.Left="-60" Canvas.Top="-80" Opacity="0.42">
          <Ellipse.Effect><BlurEffect Radius="60"/></Ellipse.Effect>
          <Ellipse.Fill>
            <RadialGradientBrush>
              <GradientStop Color="#5a4dff" Offset="0"/>
              <GradientStop Color="#005a4dff" Offset="1"/>
            </RadialGradientBrush>
          </Ellipse.Fill>
        </Ellipse>
        <Ellipse Width="520" Height="520" Canvas.Left="540" Canvas.Top="-120" Opacity="0.30">
          <Ellipse.Effect><BlurEffect Radius="60"/></Ellipse.Effect>
          <Ellipse.Fill>
            <RadialGradientBrush>
              <GradientStop Color="#13b5c9" Offset="0"/>
              <GradientStop Color="#0013b5c9" Offset="1"/>
            </RadialGradientBrush>
          </Ellipse.Fill>
        </Ellipse>
        <Ellipse Width="480" Height="480" Canvas.Left="600" Canvas.Top="320" Opacity="0.34">
          <Ellipse.Effect><BlurEffect Radius="60"/></Ellipse.Effect>
          <Ellipse.Fill>
            <RadialGradientBrush>
              <GradientStop Color="#c93dd6" Offset="0"/>
              <GradientStop Color="#00c93dd6" Offset="1"/>
            </RadialGradientBrush>
          </Ellipse.Fill>
        </Ellipse>
      </Canvas>

      <Grid>
        <Grid.RowDefinitions>
          <RowDefinition Height="Auto"/>
          <RowDefinition Height="*"/>
          <RowDefinition Height="Auto"/>
        </Grid.RowDefinitions>

        <!-- ===================== TOP BAR ===================== -->
        <Grid x:Name="topbar" Grid.Row="0" Background="Transparent" Margin="28,22,24,0">
          <Grid.ColumnDefinitions>
            <ColumnDefinition Width="Auto"/>
            <ColumnDefinition Width="*"/>
            <ColumnDefinition Width="Auto"/>
          </Grid.ColumnDefinitions>

          <!-- Logo + wordmark -->
          <StackPanel Grid.Column="0" Orientation="Horizontal" VerticalAlignment="Center">
            <Viewbox Width="28" Height="24">
              <Canvas Width="400" Height="320">
                <Path Data="M70,270 L200,58 L330,270" Stroke="White" StrokeThickness="42"
                      StrokeStartLineCap="Round" StrokeEndLineCap="Round" StrokeLineJoin="Round"/>
                <Ellipse Canvas.Left="180" Canvas.Top="160" Width="40" Height="40" Fill="#5a4dff"/>
                <Rectangle Canvas.Left="184" Canvas.Top="216" Width="32" Height="78" RadiusX="16" RadiusY="16" Fill="#5a4dff"/>
              </Canvas>
            </Viewbox>
            <TextBlock VerticalAlignment="Center" Margin="12,0,0,0" FontSize="20" FontWeight="Bold" Foreground="#eef2fb">
              <Run Text="A"/><Run Text="I" Foreground="#8a7dff"/><Run Text="EOS"/>
            </TextBlock>
          </StackPanel>

          <!-- Right side nav -->
          <StackPanel Grid.Column="2" Orientation="Horizontal" VerticalAlignment="Center">
            <TextBlock x:Name="navGuide" Text="Guia" Cursor="Hand" Background="Transparent" Foreground="#a7b2c9"
                       FontSize="13" VerticalAlignment="Center" Padding="6,4" Margin="0,0,16,0"/>
            <TextBlock x:Name="navAbout" Text="Sobre" Cursor="Hand" Background="Transparent" Foreground="#a7b2c9"
                       FontSize="13" VerticalAlignment="Center" Padding="6,4" Margin="0,0,22,0"/>
            <Border Background="#141d3a" CornerRadius="20" Padding="14,7" Margin="0,0,16,0">
              <StackPanel Orientation="Horizontal">
                <Ellipse x:Name="dot" Width="9" Height="9" Fill="#8893ab" VerticalAlignment="Center"/>
                <TextBlock x:Name="conn" Text="..." Foreground="#a7b2c9" FontSize="12"
                           VerticalAlignment="Center" Margin="8,0,0,0"/>
              </StackPanel>
            </Border>
            <TextBlock x:Name="minBtn" Text="&#x2013;" Cursor="Hand" Background="Transparent" Foreground="#a7b2c9"
                       FontSize="15" FontWeight="Bold" VerticalAlignment="Center" Padding="9,4" Margin="0,0,4,0"/>
            <TextBlock x:Name="closeBtn" Text="&#x2715;" Cursor="Hand" Background="Transparent" Foreground="#a7b2c9"
                       FontSize="15" VerticalAlignment="Center" Padding="9,4"/>
          </StackPanel>
        </Grid>

        <!-- ===================== HERO ===================== -->
        <Grid Grid.Row="1">
          <!-- faint watermark logo -->
          <Viewbox Width="340" Height="285" Opacity="0.08" HorizontalAlignment="Right"
                   VerticalAlignment="Center" Margin="0,0,80,0">
            <Canvas Width="400" Height="320">
              <Path Data="M70,270 L200,58 L330,270" Stroke="White" StrokeThickness="42"
                    StrokeStartLineCap="Round" StrokeEndLineCap="Round" StrokeLineJoin="Round"/>
              <Ellipse Canvas.Left="180" Canvas.Top="160" Width="40" Height="40" Fill="White"/>
              <Rectangle Canvas.Left="184" Canvas.Top="216" Width="32" Height="78" RadiusX="16" RadiusY="16" Fill="White"/>
            </Canvas>
          </Viewbox>

          <StackPanel Margin="64,0,0,0" VerticalAlignment="Center" HorizontalAlignment="Left">
            <TextBlock x:Name="eyebrow" Text="AIEOS" Foreground="#a99dff" FontWeight="Bold"
                       FontSize="12" Margin="0,0,0,14">
              <TextBlock.LayoutTransform><ScaleTransform/></TextBlock.LayoutTransform>
            </TextBlock>
            <TextBlock x:Name="head" Text="Verificando&#x2026;" FontSize="46" FontWeight="Bold" Margin="0,0,0,16">
              <TextBlock.Foreground>
                <LinearGradientBrush StartPoint="0,0" EndPoint="0,1">
                  <GradientStop Color="#ffffff" Offset="0"/>
                  <GradientStop Color="#c7ccff" Offset="1"/>
                </LinearGradientBrush>
              </TextBlock.Foreground>
            </TextBlock>
            <TextBlock x:Name="lead" Text="Aguarde um instante." Foreground="#a7b2c9"
                       FontSize="16" TextWrapping="Wrap" MaxWidth="520"/>
          </StackPanel>
        </Grid>

        <!-- ===================== BOTTOM BAR ===================== -->
        <Border Grid.Row="2" Background="#060a14" BorderBrush="#1e2a44" BorderThickness="0,1,0,0"
                Padding="64,18">
          <Grid>
            <Grid.ColumnDefinitions>
              <ColumnDefinition Width="Auto"/>
              <ColumnDefinition Width="*"/>
              <ColumnDefinition Width="Auto"/>
            </Grid.ColumnDefinitions>

            <Button x:Name="play" Grid.Column="0" Content="VERIFICAR" Foreground="White"
                    FontSize="17" FontWeight="Bold" Cursor="Hand" VerticalAlignment="Center"
                    BorderThickness="0">
              <Button.Effect>
                <DropShadowEffect BlurRadius="28" ShadowDepth="0" Color="#5a4dff" Opacity="0.5"/>
              </Button.Effect>
              <Button.Template>
                <ControlTemplate TargetType="Button">
                  <Border x:Name="pb" CornerRadius="14" Padding="46,19">
                    <Border.Background>
                      <LinearGradientBrush StartPoint="0,0" EndPoint="1,0">
                        <GradientStop Color="#6a5dff" Offset="0"/>
                        <GradientStop Color="#3a2bff" Offset="1"/>
                      </LinearGradientBrush>
                    </Border.Background>
                    <ContentPresenter HorizontalAlignment="Center" VerticalAlignment="Center"/>
                  </Border>
                  <ControlTemplate.Triggers>
                    <Trigger Property="IsMouseOver" Value="True">
                      <Setter TargetName="pb" Property="Opacity" Value="0.90"/>
                    </Trigger>
                    <Trigger Property="IsEnabled" Value="False">
                      <Setter TargetName="pb" Property="Opacity" Value="0.55"/>
                    </Trigger>
                  </ControlTemplate.Triggers>
                </ControlTemplate>
              </Button.Template>
            </Button>

            <StackPanel Grid.Column="1" VerticalAlignment="Center" Margin="40,0,0,0">
              <TextBlock x:Name="ver" Text="Vers&#xE3;o &#x2026;" Foreground="#eef2fb" FontWeight="Bold" FontSize="14"/>
              <TextBlock x:Name="stat" Text="&#x2026;" Foreground="#a7b2c9" FontSize="12.5" Margin="0,3,0,0"/>
            </StackPanel>

            <Button x:Name="guideBtn" Grid.Column="2" Content="Abrir guia" Foreground="#eef2fb"
                    FontSize="14" Cursor="Hand" VerticalAlignment="Center" BorderThickness="0"
                    Background="Transparent">
              <Button.Template>
                <ControlTemplate TargetType="Button">
                  <Border x:Name="gb" CornerRadius="12" Padding="28,15" Background="Transparent"
                          BorderBrush="#33425f" BorderThickness="1">
                    <ContentPresenter HorizontalAlignment="Center" VerticalAlignment="Center"/>
                  </Border>
                  <ControlTemplate.Triggers>
                    <Trigger Property="IsMouseOver" Value="True">
                      <Setter TargetName="gb" Property="Background" Value="#141d3a"/>
                    </Trigger>
                  </ControlTemplate.Triggers>
                </ControlTemplate>
              </Button.Template>
            </Button>
          </Grid>
        </Border>
      </Grid>

      <!-- ===================== SOBRE OVERLAY ===================== -->
      <Border x:Name="ov" Visibility="Collapsed" Background="#cc05080f">
        <Border Background="#101a33" CornerRadius="16" BorderBrush="#243a5e" BorderThickness="1"
                Width="520" Padding="38,34" HorizontalAlignment="Center" VerticalAlignment="Center">
          <Border.Effect>
            <DropShadowEffect BlurRadius="40" ShadowDepth="0" Color="#000000" Opacity="0.6"/>
          </Border.Effect>
          <StackPanel>
            <Grid>
              <TextBlock Text="Sobre o AIEOS" Foreground="#eef2fb" FontSize="22" FontWeight="Bold"/>
              <TextBlock x:Name="ovClose" Text="&#x2715;" Cursor="Hand" Foreground="#a7b2c9"
                         FontSize="16" HorizontalAlignment="Right" VerticalAlignment="Top"/>
            </Grid>
            <TextBlock Foreground="#a7b2c9" FontSize="15" TextWrapping="Wrap" Margin="0,18,0,0"
                       LineHeight="24">
              Sistema operacional para organiza&#xE7;&#xF5;es de IA dentro do Claude Code. Gr&#xE1;tis e
              open-source (MIT), sem fins lucrativos.
            </TextBlock>
          </StackPanel>
        </Border>
      </Border>
    </Grid>
  </Border>
</Window>
'@

$win = [Windows.Markup.XamlReader]::Load((New-Object System.Xml.XmlNodeReader ([xml]$xaml)))
if ($null -eq $win) { [System.Windows.MessageBox]::Show('Falha ao iniciar o AIEOS.') | Out-Null ; return }

# --- Window icon (guarded) ---
try {
  $icoPath = Join-Path $root 'installer\aieos.ico'
  if (Test-Path $icoPath) { $win.Icon = New-Object Windows.Media.Imaging.BitmapImage([Uri]$icoPath) }
} catch { }

# ---- resolve named controls ----
$rootContent = $win.FindName('rootContent')
$topbar   = $win.FindName('topbar')
$minBtn   = $win.FindName('minBtn')
$closeBtn = $win.FindName('closeBtn')
$navGuide = $win.FindName('navGuide')
$navAbout = $win.FindName('navAbout')
$dot      = $win.FindName('dot')
$conn     = $win.FindName('conn')
$eyebrow  = $win.FindName('eyebrow')
$head     = $win.FindName('head')
$lead     = $win.FindName('lead')
$play     = $win.FindName('play')
$ver      = $win.FindName('ver')
$stat     = $win.FindName('stat')
$guideBtn = $win.FindName('guideBtn')
$ov       = $win.FindName('ov')
$ovClose  = $win.FindName('ovClose')

# ---- helpers to recolor the play button (template Border) and its glow ----
function Set-PlayGradient($c0, $c1) {
  $b = New-Object Windows.Media.LinearGradientBrush
  $b.StartPoint = New-Object Windows.Point(0, 0)
  $b.EndPoint   = New-Object Windows.Point(1, 0)
  $b.GradientStops.Add((New-Object Windows.Media.GradientStop([Windows.Media.ColorConverter]::ConvertFromString($c0), 0)))
  $b.GradientStops.Add((New-Object Windows.Media.GradientStop([Windows.Media.ColorConverter]::ConvertFromString($c1), 1)))
  $play.ApplyTemplate() | Out-Null
  $pb = $play.Template.FindName('pb', $play)
  if ($pb) { $pb.Background = $b }
}
function Set-PlayGlow($c) {
  if ($play.Effect) { $play.Effect.Color = [Windows.Media.ColorConverter]::ConvertFromString($c) }
}
function Set-Dot($hex, [bool]$pulse) {
  $dot.BeginAnimation([Windows.UIElement]::OpacityProperty, $null)  # stop any running anim
  $dot.Opacity = 1
  $dot.Fill = New-Object Windows.Media.SolidColorBrush([Windows.Media.ColorConverter]::ConvertFromString($hex))
  if ($pulse) {
    $anim = New-Object Windows.Media.Animation.DoubleAnimation
    $anim.From = 1; $anim.To = 0.35
    $anim.Duration = New-Object Windows.Duration([TimeSpan]::FromSeconds(0.9))
    $anim.AutoReverse = $true
    $anim.RepeatBehavior = [Windows.Media.Animation.RepeatBehavior]::Forever
    $dot.BeginAnimation([Windows.UIElement]::OpacityProperty, $anim)
  }
}

# ---- top-bar interactions ----
# Drag the window only from the EMPTY top-bar area. Interactive controls in the bar mark
# button-down as handled so it never bubbles up to DragMove (which captures the mouse and
# would otherwise swallow their click). Actions fire on button-up as usual.
$topbar.Add_MouseLeftButtonDown({ try { $win.DragMove() } catch { } })
$eat = { param($s, $e) $e.Handled = $true }
$minBtn.Add_MouseLeftButtonDown($eat)
$closeBtn.Add_MouseLeftButtonDown($eat)
$navAbout.Add_MouseLeftButtonDown($eat)
$navGuide.Add_MouseLeftButtonDown($eat)
$minBtn.Add_MouseLeftButtonUp({ $win.WindowState = 'Minimized' })
$closeBtn.Add_MouseLeftButtonUp({ $win.Close() })
$navAbout.Add_MouseLeftButtonUp({ $ov.Visibility = 'Visible' })
$ovClose.Add_MouseLeftButtonUp({ $ov.Visibility = 'Collapsed' })

# close ✕ hover polish: bigger hit target already set (Padding 8); red on hover, muted on leave
$closeBtn.Add_MouseEnter({ $closeBtn.Foreground = New-Object Windows.Media.SolidColorBrush([Windows.Media.ColorConverter]::ConvertFromString('#ff6b6b')) })
$closeBtn.Add_MouseLeave({ $closeBtn.Foreground = New-Object Windows.Media.SolidColorBrush([Windows.Media.ColorConverter]::ConvertFromString('#a7b2c9')) })
$minBtn.Add_MouseEnter({ $minBtn.Foreground = New-Object Windows.Media.SolidColorBrush([Windows.Media.ColorConverter]::ConvertFromString('#eef2fb')) })
$minBtn.Add_MouseLeave({ $minBtn.Foreground = New-Object Windows.Media.SolidColorBrush([Windows.Media.ColorConverter]::ConvertFromString('#a7b2c9')) })

# hover lighten for nav links
$navGuide.Add_MouseEnter({ $navGuide.Foreground = New-Object Windows.Media.SolidColorBrush([Windows.Media.ColorConverter]::ConvertFromString('#eef2fb')) })
$navGuide.Add_MouseLeave({ $navGuide.Foreground = New-Object Windows.Media.SolidColorBrush([Windows.Media.ColorConverter]::ConvertFromString('#a7b2c9')) })
$navAbout.Add_MouseEnter({ $navAbout.Foreground = New-Object Windows.Media.SolidColorBrush([Windows.Media.ColorConverter]::ConvertFromString('#eef2fb')) })
$navAbout.Add_MouseLeave({ $navAbout.Foreground = New-Object Windows.Media.SolidColorBrush([Windows.Media.ColorConverter]::ConvertFromString('#a7b2c9')) })

# ---- open guide ----
function Open-Guide {
  try {
    $d = Join-Path ([Environment]::GetFolderPath('Desktop')) 'AIEOS - Comece Aqui\AIEOS - Comece Aqui.html'
    $b = Join-Path $root 'installer\welcome\comece-aqui.html'
    if (Test-Path $d) { Start-Process $d }
    elseif (Test-Path $b) { Start-Process $b }
    else { $lead.Text = 'Guia não encontrado.' }
  } catch { $lead.Text = "Não foi possível abrir o guia: $($_.Exception.Message)" }
}
$navGuide.Add_MouseLeftButtonUp({ Open-Guide })
$guideBtn.Add_Click({ Open-Guide })

# ---- updater state (async, off the UI thread) ----
$script:updProc    = $null    # tracked update process
$script:updTimer   = $null    # DispatcherTimer polling HasExited
$script:updRunning = $false   # re-entrancy guard
$script:updOut     = $null
$script:updErr     = $null

function Get-LastErrLine($file) {
  try {
    if (Test-Path $file) {
      $lines = @(Get-Content $file | Where-Object { $_ -and $_.Trim() })
      if ($lines.Count) { return $lines[-1].Trim() }
    }
  } catch { }
  return $null
}

function Invoke-Update {
  if ($script:updRunning) { return }   # re-entrancy guard

  # Node must exist before we try to update.
  $node = (Get-Command node -ErrorAction SilentlyContinue).Source
  if (-not $node) {
    $lead.Text = 'Node.js não encontrado. Instale em nodejs.org e reinicie.'
    return
  }

  $updateScript = Join-Path $root 'scripts\update.mjs'
  if (-not (Test-Path $updateScript)) {
    $lead.Text = 'Script de atualização não encontrado.'
    return
  }

  $script:updRunning = $true
  $play.IsEnabled = $false
  $head.Text = 'Atualizando…'
  $lead.Text = 'Isso pode levar um minuto. Aguarde.'
  $stat.Text = 'Atualizando…'
  Set-Dot '#5a4dff' $true

  $script:updOut = [System.IO.Path]::Combine([System.IO.Path]::GetTempPath(), "aieos-update-out-$PID.log")
  $script:updErr = [System.IO.Path]::Combine([System.IO.Path]::GetTempPath(), "aieos-update-err-$PID.log")

  try {
    $script:updProc = Start-Process -FilePath $node -ArgumentList $updateScript `
      -WorkingDirectory $root -WindowStyle Hidden -PassThru `
      -RedirectStandardOutput $script:updOut -RedirectStandardError $script:updErr
  } catch {
    $script:updRunning = $false
    $play.IsEnabled = $true
    $lead.Text = "Falha ao iniciar a atualização: $($_.Exception.Message)"
    return
  }

  # Poll HasExited without blocking the UI thread.
  $script:updTimer = New-Object System.Windows.Threading.DispatcherTimer
  $script:updTimer.Interval = [TimeSpan]::FromMilliseconds(500)
  $script:updTimer.Add_Tick({
    if ($null -eq $script:updProc -or $script:updProc.HasExited) {
      $script:updTimer.Stop()
      $code = if ($script:updProc) { $script:updProc.ExitCode } else { -1 }
      if ($code -eq 0) {
        $lead.Text = 'Pronto! Atualizado.'
        $script:updProc = $null
        $script:updRunning = $false
        $play.IsEnabled = $true
        Refresh
      } else {
        $errLine = Get-LastErrLine $script:updErr
        if (-not $errLine) { $errLine = Get-LastErrLine $script:updOut }
        if (-not $errLine) { $errLine = "código $code" }
        $head.Text = 'Falha na atualização'
        $lead.Text = "Não foi possível atualizar: $errLine"
        $stat.Text = 'Erro ao atualizar'
        $script:updProc = $null
        $script:updRunning = $false
        $play.IsEnabled = $true
      }
    }
  })
  $script:updTimer.Start()
}

# ---- state machine ----
$script:PlayMode = 'check'   # check | update | recheck

function Set-CheckingState {
  Set-Dot '#8a7dff' $true
  $conn.Text    = 'verificando…'
  $eyebrow.Text = 'AIEOS'
  $head.Text    = 'Verificando…'
  $lead.Text    = 'Buscando a versão mais recente…'
  $stat.Text    = 'Verificando…'
}

function Set-RefreshState($local, $remote) {
  $ver.Text = "Versão $local"

  if ($null -eq $remote) {
    Set-Dot '#8893ab' $false
    $conn.Text    = 'offline'
    $eyebrow.Text = 'AIEOS'
    $head.Text    = 'Status offline'
    $lead.Text    = 'Não foi possível verificar atualizações agora.'
    $play.Content = 'VERIFICAR'
    Set-PlayGradient '#6a5dff' '#3a2bff'; Set-PlayGlow '#5a4dff'
    $stat.Text    = 'Sem conexão'
    $script:PlayMode = 'check'
  }
  elseif ((Compare-Ver $remote $local) -gt 0) {
    Set-Dot '#5a4dff' $false
    $conn.Text    = 'online'
    $eyebrow.Text = 'Atualização'
    $head.Text    = 'Atualização disponível'
    $lead.Text    = "Uma nova versão ($remote) está pronta. Clique em ATUALIZAR."
    $play.Content = 'ATUALIZAR'
    Set-PlayGradient '#6a5dff' '#3a2bff'; Set-PlayGlow '#5a4dff'
    $stat.Text    = "Nova: $remote"
    $script:PlayMode = 'update'
  }
  else {
    Set-Dot '#22c55e' $false
    $conn.Text    = 'online'
    $eyebrow.Text = 'Pronto'
    $head.Text    = 'Tudo atualizado'
    $lead.Text    = 'Você está na versão mais recente. Para usar, digite /aieos no Claude Code.'
    $play.Content = 'VERIFICAR NOVAMENTE'
    Set-PlayGradient '#16b56a' '#0f8f52'; Set-PlayGlow '#16b56a'
    $stat.Text    = "$(Get-RuleCount) regras ativas"
    $script:PlayMode = 'recheck'
  }
}

# Async refresh: paint "Verificando…" first, then check remotely off-thread and marshal back.
function Refresh {
  if (-not $script:rootValid) {
    Set-Dot '#ff6b6b' $false
    $conn.Text    = 'erro'
    $eyebrow.Text = 'AIEOS'
    $head.Text    = 'Instalação inválida'
    $lead.Text    = 'Não foi possível localizar o package.json do AIEOS. Reinstale.'
    $ver.Text     = 'Versão desconhecida'
    $stat.Text    = 'Erro de instalação'
    return
  }

  Set-CheckingState
  $local = Get-LocalVer

  # Resolve repo slug locally (fast), then hit the network in a background runspace.
  $slug = $null
  try {
    $url = (Get-Content $pkgPath -Raw | ConvertFrom-Json).repository.url
    if ($url -match 'github\.com[:/]+([^/]+)/([^/.]+)') { $slug = "$($Matches[1])/$($Matches[2])" }
  } catch { }

  $ps = [PowerShell]::Create()
  $ps.AddScript({
    param($slug)
    if (-not $slug) { return $null }
    try {
      return (Invoke-RestMethod -Uri "https://raw.githubusercontent.com/$slug/main/package.json" -TimeoutSec 6).version
    } catch { return $null }
  }).AddArgument($slug) | Out-Null

  $handle = $ps.BeginInvoke()

  # Poll the async handle on the UI thread via a DispatcherTimer, then marshal result back.
  $poll = New-Object System.Windows.Threading.DispatcherTimer
  $poll.Interval = [TimeSpan]::FromMilliseconds(150)
  $poll.Add_Tick({
    if ($handle.IsCompleted) {
      $poll.Stop()
      $remote = $null
      try { $remote = $ps.EndInvoke($handle) | Select-Object -First 1 } catch { }
      try { $ps.Dispose() } catch { }
      $win.Dispatcher.Invoke([Action] { Set-RefreshState $local $remote }, [Windows.Threading.DispatcherPriority]::Normal)
    }
  }.GetNewClosure())
  $poll.Start()
}

$play.Add_Click({
  switch ($script:PlayMode) {
    'update' { Invoke-Update }
    default  { Refresh }
  }
})

# ---- lifecycle ----
$win.Add_Loaded({
  # 300ms opacity fade-in of the content
  try {
    $fade = New-Object Windows.Media.Animation.DoubleAnimation
    $fade.From = 0; $fade.To = 1
    $fade.Duration = New-Object Windows.Duration([TimeSpan]::FromMilliseconds(300))
    $rootContent.BeginAnimation([Windows.UIElement]::OpacityProperty, $fade)
  } catch { $rootContent.Opacity = 1 }

  # Paint the window immediately, then run the version check asynchronously.
  Refresh
})

# If an update is running when the user tries to close, kill the node process tree first.
$win.Add_Closing({
  if ($script:updRunning -and $script:updProc -and -not $script:updProc.HasExited) {
    try { Start-Process -FilePath 'taskkill' -ArgumentList @('/PID', "$($script:updProc.Id)", '/T', '/F') -WindowStyle Hidden -Wait } catch {
      try { $script:updProc.Kill() } catch { }
    }
  }
})

[void]$win.ShowDialog()

# Keep the mutex alive until the very end of the process.
try { if ($script:mutex) { $script:mutex.ReleaseMutex(); $script:mutex.Dispose() } } catch { }
