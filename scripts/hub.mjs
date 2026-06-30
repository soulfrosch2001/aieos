#!/usr/bin/env node
// AIEOS Hub — a local visual control panel (opens in the browser) that shows what is up to date
// or not, the memory status, and updates the system with one click. It is a tiny LOCAL-ONLY web
// server (127.0.0.1) using the Node that ships with AIEOS — no extra dependencies, no Electron.
//
//   aieos hub
import http from 'node:http';
import https from 'node:https';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pkg = (() => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8')); } catch { return {}; } })();

function cmpVer(a, b) {
  const pa = String(a).split('.').map((n) => parseInt(n, 10) || 0), pb = String(b).split('.').map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < 3; i++) { if ((pa[i] || 0) > (pb[i] || 0)) return 1; if ((pa[i] || 0) < (pb[i] || 0)) return -1; } return 0;
}
function slug() { const r = pkg.repository, u = typeof r === 'string' ? r : (r && r.url) || ''; const m = u.match(/github\.com[:/]+([^/]+)\/([^/.]+)/i); return m ? `${m[1]}/${m[2]}` : null; }
function remoteVersion() {
  return new Promise((resolve) => {
    const s = slug(); if (!s) return resolve(null);
    const req = https.get(`https://raw.githubusercontent.com/${s}/main/package.json`, { headers: { 'User-Agent': 'aieos' }, timeout: 5000 }, (r) => {
      if (r.statusCode !== 200) { r.resume(); return resolve(null); }
      let d = ''; r.on('data', (c) => (d += c)); r.on('end', () => { try { resolve(JSON.parse(d).version || null); } catch { resolve(null); } });
    });
    req.on('error', () => resolve(null)); req.on('timeout', () => { req.destroy(); resolve(null); });
  });
}
const countDir = (p, f) => { try { return fs.readdirSync(p).filter(f).length; } catch { return 0; } };
const isEntry = (f) => f.endsWith('.md') && f !== 'README.md';

async function status() {
  const ver = pkg.version || '0.0.0';
  const remote = await remoteVersion();
  const memRepo = path.join(os.homedir(), '.claude', 'aieos-memory', 'ledger');
  const usersDir = path.join(memRepo, 'users');
  let users = 0, userMem = 0;
  try { for (const u of fs.readdirSync(usersDir)) { if (fs.statSync(path.join(usersDir, u)).isDirectory()) { users++; userMem += countDir(path.join(usersDir, u), isEntry); } } } catch { /* none */ }
  return {
    version: ver,
    remoteVersion: remote,
    updateAvailable: remote != null && cmpVer(remote, ver) > 0,
    online: remote != null,
    rules: countDir(path.join(ROOT, 'tests', 'conformance', 'rules'), (f) => f.endsWith('.mjs')),
    yours: fs.existsSync(memRepo) ? countDir(memRepo, (f) => isEntry(f) && (() => { try { return fs.statSync(path.join(memRepo, f)).isFile(); } catch { return false; } })()) : 0,
    users, userMemories: userMem,
    quarantined: countDir(path.join(memRepo, 'quarantine'), isEntry),
    node: process.version,
    isGit: fs.existsSync(path.join(ROOT, '.git')),
  };
}

const PAGE = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AIEOS Hub</title><style>
:root{--navy:#111a2e;--blue:#3a2bff;--paper:#eef1f7;--card:#fff;--ink:#1c2433;--muted:#5b6678;--line:#e2e6ef;--ok:#16a34a;--warn:#d97706}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:'Segoe UI',system-ui,Arial,sans-serif}
.wrap{max-width:720px;margin:0 auto;padding:28px 20px 60px}
.top{display:flex;align-items:center;gap:12px;margin-bottom:6px}
.wm{font-size:26px;font-weight:700;letter-spacing:6px;color:var(--navy)}.wm b{color:var(--blue)}
.sub{color:var(--muted);margin:0 0 22px}
.banner{border-radius:16px;padding:20px 22px;margin-bottom:18px;color:#fff;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.banner.ok{background:linear-gradient(135deg,#16a34a,#0f8a3c)}.banner.upd{background:linear-gradient(135deg,#3a2bff,#2a1fd0)}.banner.off{background:#5b6678}
.banner h2{margin:0;font-size:20px}.banner p{margin:4px 0 0;opacity:.92;font-size:14px}
.btn{background:#fff;color:var(--navy);border:none;padding:12px 22px;border-radius:10px;font-weight:700;font-size:15px;cursor:pointer}
.btn:disabled{opacity:.6;cursor:default}
.grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:18px}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px 18px}
.card .n{font-size:26px;font-weight:700;color:var(--navy)}.card .l{color:var(--muted);font-size:13px;margin-top:2px}
.row{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px}
.row button{background:var(--card);border:1px solid var(--line);color:var(--navy);padding:10px 16px;border-radius:10px;font-weight:600;cursor:pointer}
pre{background:#0e1726;color:#cfe3ff;border-radius:12px;padding:14px;font-size:13px;max-height:240px;overflow:auto;white-space:pre-wrap;display:none}
.muted{color:var(--muted);font-size:12.5px;text-align:center;margin-top:18px}
</style></head><body><div class="wrap">
<div class="top">
  <svg width="34" height="28" viewBox="0 0 400 320"><path d="M70 270 L200 58 L330 270" fill="none" stroke="#111a2e" stroke-width="42" stroke-linecap="round" stroke-linejoin="round"/><circle cx="200" cy="180" r="20" fill="#3a2bff"/><rect x="184" y="216" width="32" height="78" rx="16" fill="#3a2bff"/></svg>
  <div class="wm">A<b>I</b>EOS <span style="font-size:14px;letter-spacing:0;color:#5b6678;font-weight:600">Hub</span></div>
</div>
<p class="sub">Painel de status e atualizações do seu AIEOS.</p>
<div id="banner" class="banner off"><div><h2>Carregando…</h2><p>Verificando o status</p></div></div>
<div class="grid">
  <div class="card"><div class="n" id="ver">—</div><div class="l">Versão instalada</div></div>
  <div class="card"><div class="n" id="rules">—</div><div class="l">Regras de qualidade</div></div>
  <div class="card"><div class="n" id="users">—</div><div class="l">Usuários (memórias)</div></div>
</div>
<div class="row">
  <button onclick="refresh()">🔄 Atualizar status</button>
  <button onclick="doUpdate()" id="updbtn">⬇️ Atualizar o sistema</button>
</div>
<pre id="log"></pre>
<div class="muted">Painel local e privado · roda só no seu computador (127.0.0.1)</div>
</div>
<script>
async function refresh(){
  const s = await (await fetch('/api/status')).json();
  document.getElementById('ver').textContent = s.version;
  document.getElementById('rules').textContent = s.rules;
  document.getElementById('users').textContent = s.users + ' ('+s.userMemories+')';
  const b = document.getElementById('banner');
  if(!s.online){ b.className='banner off'; b.innerHTML='<div><h2>Status offline</h2><p>Não foi possível verificar atualizações agora.</p></div>'; }
  else if(s.updateAvailable){ b.className='banner upd'; b.innerHTML='<div><h2>Atualização disponível → '+s.remoteVersion+'</h2><p>Sua versão: '+s.version+'. Clique para atualizar.</p></div><button class="btn" onclick="doUpdate()">⬇️ Atualizar agora</button>'; }
  else { b.className='banner ok'; b.innerHTML='<div><h2>✓ Tudo atualizado</h2><p>Você está na versão mais recente ('+s.version+').</p></div>'; }
}
async function doUpdate(){
  const log = document.getElementById('log'); const btn = document.getElementById('updbtn');
  log.style.display='block'; log.textContent='Atualizando… isso pode levar um minuto.\\n'; btn.disabled=true;
  try{ const r = await (await fetch('/api/update',{method:'POST'})).json(); log.textContent += (r.output||'') + '\\n' + (r.ok?'✓ Concluído.':'✗ Houve um problema.'); }
  catch(e){ log.textContent += 'Erro: '+e; }
  btn.disabled=false; refresh();
}
refresh();
</script></body></html>`;

function send(res, code, type, body) { res.writeHead(code, { 'Content-Type': type }); res.end(body); }

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === '/' ) return send(res, 200, 'text/html; charset=utf-8', PAGE);
    if (req.url === '/api/status') return send(res, 200, 'application/json', JSON.stringify(await status()));
    if (req.url === '/api/update' && req.method === 'POST') {
      const r = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'update.mjs')], { cwd: ROOT, encoding: 'utf8', timeout: 180000 });
      return send(res, 200, 'application/json', JSON.stringify({ ok: r.status === 0, output: (r.stdout || '') + (r.stderr || '') }));
    }
    send(res, 404, 'text/plain', 'not found');
  } catch (e) { send(res, 500, 'text/plain', String(e)); }
});

function listen(port, tries = 0) {
  server.once('error', (e) => { if (e.code === 'EADDRINUSE' && tries < 10) listen(port + 1, tries + 1); else { console.error('Could not start the hub:', e.message); process.exit(1); } });
  server.listen(port, '127.0.0.1', () => {
    const url = `http://127.0.0.1:${port}/`;
    console.log(`AIEOS Hub running at ${url}  (Ctrl+C to stop)`);
    const opener = process.platform === 'win32' ? ['cmd', ['/c', 'start', '', url]] : process.platform === 'darwin' ? ['open', [url]] : ['xdg-open', [url]];
    try { spawn(opener[0], opener[1], { stdio: 'ignore', detached: true }).unref(); } catch { /* user opens manually */ }
  });
}
listen(7878);
