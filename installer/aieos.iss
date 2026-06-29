; AIEOS — Inno Setup script
; Builds a native, per-user Windows installer that COPIES the AIEOS repo and then
; CONFIGURES the machine while installing: `npm install` + `npm run setup` (registers
; the global /aieos command and the machine-wide bootstrap in ~/.claude).
; Uninstall runs `npm run teardown` to clean ~/.claude before files are removed.
;
; NOTE: this script is compiled by CI (Inno Setup is not installed locally). To build
; locally once ISCC is available:  ISCC installer\aieos.iss
;
; Keep AppVersion in sync with package.json ("version").
#define AppVersion "0.1.0"
#define AppName "AIEOS"
#define AppPublisher "AIEOS"

[Setup]
; Fixed AppId GUID — never change this once shipped (it identifies upgrades/uninstall).
AppId={{B7E3F2A1-9C4D-4E6F-A1B2-8D5C3F0E7A91}
AppName={#AppName}
AppVersion={#AppVersion}
AppVerName={#AppName} {#AppVersion}
AppPublisher={#AppPublisher}
; Per-user install: no admin rights required.
PrivilegesRequired=lowest
DefaultDirName={localappdata}\Programs\AIEOS
DefaultGroupName={#AppName}
DisableProgramGroupPage=yes
; The compiled .exe lands in installer\Output\AIEOS-Setup-<version>.exe (a sibling
; release workflow relies on this exact path + name).
OutputDir=Output
OutputBaseFilename=AIEOS-Setup-{#AppVersion}
Compression=lzma2
SolidCompression=yes
WizardStyle=modern
; Show install progress for the configuration step.
ArchitecturesAllowed=x86 x64 arm64
ArchitecturesInstallIn64BitMode=x64 arm64

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Files]
; Copy the entire repo (this .iss lives in installer\, so ..\* is the repo root) into
; {app}, excluding build/runtime junk. Excludes are matched relative to each Source dir.
Source: "..\*"; DestDir: "{app}"; Flags: recursesubdirs createallsubdirs; \
  Excludes: "\node_modules\*,\.git\*,\installer\Output\*,\installer\macos\build\*,\memory\ledger\20*.md,\memory\ledger\quarantine\20*.md,*.log"
; Onboarding tutorial → a friendly folder on the user's Desktop.
Source: "welcome\comece-aqui.html"; DestDir: "{userdesktop}\AIEOS - Comece Aqui"; \
  DestName: "AIEOS - Comece Aqui.html"; Flags: ignoreversion

[Run]
; Configure WHILE installing: after files are copied, run the post-install script.
; -ExecutionPolicy Bypass so the .ps1 runs regardless of machine policy. The script
; itself is error-tolerant (exits 0 on warnings) so a noisy npm does not fail setup.
Filename: "powershell.exe"; \
  Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\installer\post-install.ps1"" -InstallDir ""{app}"""; \
  WorkingDir: "{app}"; \
  StatusMsg: "Configuring AIEOS (npm install + setup)..."; \
  Flags: waituntilterminated
; Open the welcome tutorial when setup finishes (checkbox on the final page, checked).
Filename: "{userdesktop}\AIEOS - Comece Aqui\AIEOS - Comece Aqui.html"; \
  Description: "Abrir o guia de inicio do AIEOS"; \
  Flags: postinstall shellexec skipifsilent nowait

[UninstallRun]
; Before files are removed, undo the machine-wide setup (~/.claude command + bootstrap).
Filename: "powershell.exe"; \
  Parameters: "-NoProfile -ExecutionPolicy Bypass -Command ""cd '{app}'; npm run teardown"""; \
  WorkingDir: "{app}"; \
  RunOnceId: "AieosTeardown"; \
  Flags: waituntilterminated runhidden

[Code]
{ Node.js preflight: AIEOS configuration needs Node >= 18. Run `node --version`,
  parse the major version, and abort with a clear message if Node is missing or old. }

function GetNodeMajorVersion(var Major: Integer): Boolean;
var
  TmpFile, Output, Line: String;
  ResultCode, P, DotPos: Integer;
  Lines: TArrayOfString;
begin
  Result := False;
  Major := 0;
  { Capture `node --version` by redirecting stdout to a temp file via cmd.exe. }
  TmpFile := ExpandConstant('{tmp}\aieos_node_ver.txt');
  if not Exec(ExpandConstant('{cmd}'), '/C node --version > "' + TmpFile + '" 2>&1',
              '', SW_HIDE, ewWaitUntilTerminated, ResultCode) then
    Exit;
  if ResultCode <> 0 then
    Exit;
  if not LoadStringsFromFile(TmpFile, Lines) then
    Exit;
  if GetArrayLength(Lines) = 0 then
    Exit;

  { Output looks like "v18.17.1" — strip leading 'v', take the major number. }
  Line := Trim(Lines[0]);
  if (Length(Line) > 0) and (Line[1] = 'v') then
    Line := Copy(Line, 2, Length(Line) - 1);
  DotPos := Pos('.', Line);
  if DotPos > 0 then
    Line := Copy(Line, 1, DotPos - 1);
  P := StrToIntDef(Trim(Line), 0);
  if P > 0 then
  begin
    Major := P;
    Result := True;
  end;
end;

function InitializeSetup(): Boolean;
var
  Major: Integer;
begin
  Result := True;
  if not GetNodeMajorVersion(Major) then
  begin
    MsgBox('AIEOS requires Node.js to configure itself, but Node.js was not found on this PC.'
      + #13#10#13#10
      + 'Please install Node.js (version 18 or newer) from:'
      + #13#10 + 'https://nodejs.org'
      + #13#10#13#10
      + 'Then run this installer again.',
      mbCriticalError, MB_OK);
    Result := False;
    Exit;
  end;

  if Major < 18 then
  begin
    MsgBox('AIEOS requires Node.js 18 or newer, but the installed version is too old (major version '
      + IntToStr(Major) + ').'
      + #13#10#13#10
      + 'Please upgrade Node.js from https://nodejs.org and run this installer again.',
      mbCriticalError, MB_OK);
    Result := False;
    Exit;
  end;
end;
