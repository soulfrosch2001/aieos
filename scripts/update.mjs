#!/usr/bin/env node
// AIEOS self-update — pull the latest version from GitHub WITHOUT reinstalling the app.
//
//   aieos update           # update in place (code/docs/rules), then npm install + setup
//   aieos update --check   # just report whether a newer version is available (no changes)
//
// Works for both layouts:
//   - a git checkout (the dev repo)      → `git pull --ff-only`
//   - the installed copy (plain files)   → download the latest tarball from GitHub and overlay
// The user's local memory (memory/ledger) and node_modules are preserved across updates.
//
// Requires the GitHub repository to be PUBLIC (or release assets public) so users can fetch
// it without credentials. The repo is read from package.json "repository".
//
// FAIL-LOUD CONTRACT: the native launcher captures stdout+stderr and shows the LAST
// non-empty line to the user on failure. Therefore EVERY exit path — success or failure —
// ends with a single human-readable pt-BR line (prefixed `OK:` on success, `ERRO:` on
// failure) so the user always sees a clear explanation.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import https from 'node:https';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const AIEOS_ROOT = process.env.AIEOS_UPDATE_DIR || path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const PRESERVE = new Set(['node_modules', '.git']); // never overwritten; memory/ledger handled below

// Print a final pt-BR error line and exit non-zero. `tail` is an optional tool stderr excerpt.
function fail(msg, tail) {
  const clean = String(tail || '').trim();
  if (clean) {
    const lines = clean.split(/\r?\n/).filter((l) => l.trim());
    const excerpt = lines.slice(-3).join(' | ');
    console.error(`ERRO: ${msg} — detalhe: ${excerpt}`);
  } else {
    console.error(`ERRO: ${msg}`);
  }
  process.exit(1);
}

function readPkg(dir) {
  try { return JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8')); } catch { return {}; }
}
function repoSlug() {
  const r = readPkg(AIEOS_ROOT).repository;
  const url = typeof r === 'string' ? r : (r && r.url) || '';
  const m = url.match(/github\.com[:/]+([^/]+)\/([^/.]+)/i);
  return m ? `${m[1]}/${m[2]}` : null;
}
function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'aieos-update' } }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) { r.resume(); return get(r.headers.location).then(resolve, reject); }
      if (r.statusCode !== 200) { r.resume(); return reject(new Error('HTTP ' + r.statusCode)); }
      let d = ''; r.on('data', (c) => (d += c)); r.on('end', () => resolve(d));
    }).on('error', reject);
  });
}
function downloadTo(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'aieos-update' } }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) { r.resume(); return downloadTo(r.headers.location, dest).then(resolve, reject); }
      if (r.statusCode !== 200) { r.resume(); return reject(new Error('HTTP ' + r.statusCode)); }
      const f = fs.createWriteStream(dest); r.pipe(f); f.on('finish', () => f.close(() => resolve())); f.on('error', reject);
    }).on('error', reject);
  });
}

// Does an external tool exist / run? Returns true if `tool <probeArgs>` exits 0.
function toolAvailable(tool, probeArgs) {
  try {
    const r = spawnSync(tool, probeArgs, { stdio: 'ignore', shell: process.platform === 'win32' });
    return r.status === 0;
  } catch { return false; }
}

// Numeric semver compare (avoids string pitfalls like "0.2.0" < "0.10.0"): 1 if a>b, -1 if a<b.
function cmpVer(a, b) {
  const pa = String(a).split('.').map((n) => parseInt(n, 10) || 0);
  const pb = String(b).split('.').map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < 3; i++) { if ((pa[i] || 0) > (pb[i] || 0)) return 1; if ((pa[i] || 0) < (pb[i] || 0)) return -1; }
  return 0;
}

const slug = repoSlug();
const localVer = readPkg(AIEOS_ROOT).version || '0.0.0';
// Branch to pull from — override via env var or package.json "updateBranch"; defaults to "main".
const BRANCH = process.env.AIEOS_UPDATE_BRANCH || readPkg(AIEOS_ROOT).updateBranch || 'main';

if (!slug) {
  fail('nenhum repositório GitHub configurado em package.json ("repository") — atualização automática indisponível.');
}

// ---- --check: compare local vs remote version, change nothing ----
if (CHECK) {
  try {
    const remote = JSON.parse(await get(`https://raw.githubusercontent.com/${slug}/${BRANCH}/package.json`));
    const remoteVer = remote.version || '0.0.0';
    if (cmpVer(remoteVer, localVer) > 0) {
      console.log(`OK: atualização disponível: ${localVer} → ${remoteVer}. Rode \`aieos update\`.`);
    } else {
      console.log(`OK: já está na versão mais recente (${localVer}).`);
    }
  } catch (e) {
    fail('não foi possível verificar atualizações (o repositório é público?)', e.message);
  }
  process.exit(0);
}

// ---- update: git pull (checkout) or tarball overlay (installed copy) ----
console.log(`Atualizando AIEOS em ${AIEOS_ROOT} …`);

// Determine the remote version up front so we can short-circuit "already up to date" (#4).
let remoteVer = null;
try {
  const remote = JSON.parse(await get(`https://raw.githubusercontent.com/${slug}/${BRANCH}/package.json`));
  remoteVer = remote.version || null;
} catch (e) {
  // Non-fatal: proceed with the update anyway, but note it. The step guards below still protect us.
  console.log(`Aviso: não foi possível ler a versão remota (${e.message}); prosseguindo com a atualização.`);
}

if (remoteVer && cmpVer(remoteVer, localVer) <= 0) {
  console.log(`OK: já está na versão mais recente (${localVer}).`);
  process.exit(0);
}

const isGit = fs.existsSync(path.join(AIEOS_ROOT, '.git'));

if (isGit) {
  // ---- dev / git checkout path ----
  if (!toolAvailable('git', ['--version'])) {
    fail("'git' não encontrado no PATH — instale o Git (git-scm.com) para atualizar este checkout.");
  }
  const r = spawnSync('git', ['pull', '--ff-only'], { cwd: AIEOS_ROOT, encoding: 'utf8' });
  if (r.error) fail('falha ao executar git pull', r.error.message);
  if (r.stdout) process.stdout.write(r.stdout);
  if (r.status !== 0) {
    fail('git pull falhou; resolva manualmente e tente de novo.', r.stderr);
  }
} else {
  // ---- installed copy / tarball overlay path ----
  if (!toolAvailable('tar', ['--version'])) {
    fail("'tar' não disponível — atualização automática indisponível nesta máquina.");
  }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'aieos-update-'));
  const tgz = path.join(tmp, 'aieos.tar.gz');
  console.log('Baixando a versão mais recente do GitHub …');
  try { await downloadTo(`https://codeload.github.com/${slug}/tar.gz/refs/heads/${BRANCH}`, tgz); }
  catch (e) {
    fs.rmSync(tmp, { recursive: true, force: true });
    fail('download falhou (o repositório é público?)', e.message);
  }
  // RELATIVE filename + cwd, never an absolute Windows path: GNU tar (Git Bash) parses
  // "C:\..." as a REMOTE HOST ("Cannot connect to C: resolve failed") and dies — exactly
  // the failure a user's launcher hit in the field (decision 0037). bsdtar and GNU tar
  // both handle a plain relative name identically.
  const ex = spawnSync('tar', ['-xzf', path.basename(tgz)], { cwd: tmp, encoding: 'utf8' });
  if (ex.status !== 0) {
    fs.rmSync(tmp, { recursive: true, force: true });
    fail('extração do arquivo falhou (tar indisponível ou arquivo corrompido).', ex.stderr || (ex.error && ex.error.message));
  }
  const top = fs.readdirSync(tmp).map((n) => path.join(tmp, n)).find((p) => fs.statSync(p).isDirectory());
  if (!top || !fs.existsSync(path.join(top, 'package.json'))) {
    fs.rmSync(tmp, { recursive: true, force: true });
    fail('o arquivo baixado parece inválido (sem package.json) — abortando para proteger a instalação.');
  }
  // Prefer the version from the freshly fetched package.json for the final success line.
  const fetchedVer = readPkg(top).version;
  if (fetchedVer) remoteVer = fetchedVer;
  // Overlay extracted files onto the install, preserving node_modules/.git and local
  // memory. Executables under installer/ are NEVER overlaid: the user's desktop shortcut
  // runs {app}\installer\AIEOS.exe, so during a launcher-initiated update that exact file
  // is LOCKED by Windows and overwriting it crashes the whole update (decision 0037).
  // The launcher binary ships via the installer/CI release, not via file overlay.
  try {
    fs.cpSync(top, AIEOS_ROOT, {
      recursive: true, force: true,
      filter: (src) => {
        const rel = path.relative(top, src);
        if (!rel) return true;
        const first = rel.split(path.sep)[0];
        if (PRESERVE.has(first)) return false;
        if (rel.split(path.sep).slice(0, 2).join('/') === 'memory/ledger') return false; // keep local memory
        if (first === 'installer' && /\.exe$/i.test(rel)) return false; // running launcher is locked
        return true;
      },
    });
  } catch (e) {
    fs.rmSync(tmp, { recursive: true, force: true });
    fail('falha ao aplicar os arquivos atualizados sobre a instalação.', e.message);
  }
  fs.rmSync(tmp, { recursive: true, force: true });

  // ---- npm install (tarball path only) ----
  if (!toolAvailable('npm', ['--version'])) {
    fail('npm não encontrado no PATH — instale o Node.js (nodejs.org).');
  }
  console.log('Instalando dependências …');
  const ni = spawnSync('npm', ['install', '--omit=dev'], { cwd: AIEOS_ROOT, encoding: 'utf8', shell: process.platform === 'win32' });
  if (ni.stdout) process.stdout.write(ni.stdout);
  if (ni.status !== 0) {
    fail('npm install falhou durante a atualização — a instalação pode estar incompleta. Rode `aieos update` ou `npm install` manualmente.', ni.stderr || (ni.error && ni.error.message));
  }
}

// ---- re-register the global command (both paths) ----
console.log('Re-registrando o comando global …');
const installCmd = path.join(AIEOS_ROOT, 'scripts', 'install-command.mjs');
const reg = spawnSync(process.execPath, [installCmd], { cwd: AIEOS_ROOT, encoding: 'utf8' });
if (reg.stdout) process.stdout.write(reg.stdout);
if (reg.status !== 0) {
  fail('falha ao re-registrar o comando global (install-command.mjs).', reg.stderr || (reg.error && reg.error.message));
}

const newVer = readPkg(AIEOS_ROOT).version || remoteVer || localVer;
console.log(`OK: AIEOS atualizado para ${newVer}.`);
