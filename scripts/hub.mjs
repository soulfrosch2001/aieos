#!/usr/bin/env node
// AIEOS Hub — an immersive, game-launcher-style control panel (think the Riot client): a dark
// "Navy Aurora" hero with a big primary action button at the bottom. Opens as an APP WINDOW
// (no browser chrome). Local-only server (127.0.0.1), using the Node that ships with AIEOS.
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
async function status() {
  const ver = pkg.version || '0.0.0'; const remote = await remoteVersion();
  return { version: ver, remoteVersion: remote, updateAvailable: remote != null && cmpVer(remote, ver) > 0, online: remote != null,
    rules: countDir(path.join(ROOT, 'tests', 'conformance', 'rules'), (f) => f.endsWith('.mjs')), node: process.version };
}
function openGuide() {
  const d = path.join(os.homedir(), 'Desktop', 'AIEOS - Comece Aqui', 'AIEOS - Comece Aqui.html');
  const b = path.join(ROOT, 'installer', 'welcome', 'comece-aqui.html');
  const t = fs.existsSync(d) ? d : (fs.existsSync(b) ? b : null); if (!t) return;
  const op = process.platform === 'win32' ? ['cmd', ['/c', 'start', '', t]] : process.platform === 'darwin' ? ['open', [t]] : ['xdg-open', [t]];
  try { spawn(op[0], op[1], { stdio: 'ignore', detached: true }).unref(); } catch { /* ignore */ }
}

const MARK = (s, w, h) => `<svg width="${w}" height="${h}" viewBox="0 0 400 320"><path d="M70 270 L200 58 L330 270" fill="none" stroke="${s}" stroke-width="42" stroke-linecap="round" stroke-linejoin="round"/><circle cx="200" cy="180" r="20" fill="#5a4dff"/><rect x="184" y="216" width="32" height="78" rx="16" fill="#5a4dff"/></svg>`;

const PAGE = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><title>AIEOS</title><style>
:root{--ink:#eef2fb;--muted:#a7b2c9;--blue:#5a4dff;--blue2:#8a7dff;--accent:#a99dff;--line:#26324c}
*{box-sizing:border-box;margin:0}
body{height:100vh;display:flex;flex-direction:column;color:var(--ink);font-family:'Segoe UI',system-ui,Arial,sans-serif;overflow:hidden;position:relative;
 background:radial-gradient(1100px 560px at 82% 8%,rgba(90,77,255,.20),transparent 60%),linear-gradient(160deg,#0d1736,#080d1c 72%)}
.aurora{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.blob{position:absolute;border-radius:50%;filter:blur(90px)}
.b1{width:560px;height:560px;background:#5a4dff;left:-60px;top:-80px;opacity:.42}
.b2{width:520px;height:520px;background:#13b5c9;right:8%;top:18%;opacity:.30}
.b3{width:480px;height:480px;background:#c93dd6;right:24%;bottom:-120px;opacity:.34}
.top{display:flex;align-items:center;justify-content:space-between;padding:18px 32px;position:relative;z-index:2}
.brand{display:flex;align-items:center;gap:10px}.brand .wm{font-size:17px;font-weight:700;letter-spacing:4px}.brand .wm b{color:var(--blue2)}
.topnav{display:flex;align-items:center;gap:6px}
.topnav a{color:var(--muted);font-weight:600;font-size:13px;padding:8px 12px;border-radius:8px;cursor:pointer;user-select:none}
.topnav a:hover{color:#fff;background:rgba(255,255,255,.06)}
.pill{display:flex;align-items:center;gap:7px;color:var(--muted);font-size:12.5px;padding:6px 12px;border:1px solid var(--line);border-radius:999px;margin-left:8px}
.dot{width:8px;height:8px;border-radius:50%;background:#22c55e}
.dot.live{animation:pulse 2s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(34,197,94,.55)}70%{box-shadow:0 0 0 7px rgba(34,197,94,0)}100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}}
.hero{flex:1;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 64px;z-index:1}
.hero::before{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
 background:linear-gradient(90deg,rgba(8,13,28,.82) 0%,rgba(8,13,28,.55) 38%,rgba(8,13,28,0) 70%),radial-gradient(120% 90% at 18% 50%,rgba(8,13,28,.55),transparent 60%)}
.wmark{position:absolute;right:-12px;top:50%;transform:translateY(-50%);opacity:.05;z-index:0;pointer-events:none;filter:saturate(0) brightness(1.15)}
.hbody{position:relative;z-index:1}
.eyebrow{color:var(--accent);font-weight:700;letter-spacing:3.5px;font-size:12px;text-transform:uppercase}
.hero h1{font-size:46px;font-weight:800;letter-spacing:-.5px;line-height:1.05;margin:14px 0 12px;max-width:660px;
 color:#eef2fb;background:linear-gradient(180deg,#fff 0%,#c7ccff 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.hero .lead{color:var(--muted);font-size:16px;max-width:520px;line-height:1.55}
.bar{display:flex;align-items:center;gap:22px;padding:22px 64px;position:relative;z-index:2;
 background:linear-gradient(0deg,#060a14 0%,#060a14 60%,rgba(6,10,20,.92) 100%);backdrop-filter:blur(8px);border-top:1px solid rgba(255,255,255,.10)}
.play{font-size:17px;font-weight:800;letter-spacing:1.2px;border:none;border-radius:14px;padding:19px 46px;min-width:220px;color:#fff;cursor:pointer;
 background:linear-gradient(135deg,#6a5dff,#3a2bff);box-shadow:0 10px 30px rgba(90,77,255,.42),inset 0 1px 0 rgba(255,255,255,.18);
 transition:transform .12s cubic-bezier(.2,.7,.3,1),box-shadow .2s,filter .2s}
.play:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(90,77,255,.55),inset 0 1px 0 rgba(255,255,255,.22);filter:brightness(1.06)}
.play:active{transform:translateY(0);box-shadow:0 6px 18px rgba(90,77,255,.40);filter:brightness(.98)}
.play:disabled{opacity:.55;cursor:default;transform:none;filter:none}
.play.ready{background:linear-gradient(135deg,#16b56a,#0f8f52);box-shadow:0 10px 30px rgba(22,181,106,.34),inset 0 1px 0 rgba(255,255,255,.18)}
.barinfo .v{font-weight:700;font-size:14px;letter-spacing:.2px}.barinfo .s{color:var(--muted);font-size:12.5px;margin-top:2px}
.ghost{margin-left:auto;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.14);color:var(--ink);border-radius:12px;padding:14px 24px;font-weight:600;font-size:14px;cursor:pointer;transition:background .15s,border-color .15s}
.ghost:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.24)}
pre{position:absolute;left:64px;right:64px;bottom:18px;background:#060a14ee;border:1px solid var(--line);border-radius:12px;padding:14px;color:#bcd0f0;font-size:12.5px;max-height:150px;overflow:auto;white-space:pre-wrap;display:none;z-index:3}
.ov{position:fixed;inset:0;background:rgba(4,7,14,.72);display:none;align-items:center;justify-content:center;z-index:6}
.ov.open{display:flex}.ov .box{background:#141d35;border:1px solid var(--line);border-radius:16px;padding:26px;max-width:430px}
.ov h3{margin-bottom:10px}.ov p{color:var(--muted);line-height:1.7}.ov b{color:#fff}.ov .x{float:right;color:var(--muted);cursor:pointer;font-weight:700;font-size:18px}
</style></head><body>
<div class="aurora"><div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div></div>
<div class="top">
  <div class="brand">${MARK('#fff', 28, 24)}<div class="wm">A<b>I</b>EOS</div></div>
  <div class="topnav">
    <a onclick="openGuide()">Guia</a>
    <a onclick="document.getElementById('ov').classList.add('open')">Sobre</a>
    <span class="pill"><span class="dot" id="dot"></span><span id="conn">...</span></span>
  </div>
</div>
<div class="hero">
  <div class="wmark">${MARK('#fff', 340, 285)}</div>
  <div class="hbody">
    <div class="eyebrow" id="eyebrow">AIEOS</div>
    <h1 id="head">Carregando...</h1>
    <p class="lead" id="lead">Verificando o status do sistema.</p>
  </div>
  <pre id="log"></pre>
</div>
<div class="bar">
  <button class="play" id="play" onclick="primary()">VERIFICAR</button>
  <div class="barinfo"><div class="v" id="ver">&mdash;</div><div class="s" id="stat">&mdash;</div></div>
  <button class="ghost" onclick="openGuide()">Abrir guia</button>
</div>
<div class="ov" id="ov"><div class="box"><span class="x" onclick="document.getElementById('ov').classList.remove('open')">&#10005;</span>
  <h3>Sobre o AIEOS</h3><p>Sistema operacional para organizacoes de IA dentro do Claude Code.
  <b>Gratis e open-source</b> (licenca MIT), feito para a comunidade, sem fins lucrativos. <span id="aboutver"></span></p></div></div>
<script>
var st={};
async function refresh(){st=await(await fetch('/api/status')).json();
  document.getElementById('ver').textContent='Versao '+st.version;
  document.getElementById('aboutver').textContent='Versao instalada: '+st.version+'.';
  var dot=document.getElementById('dot');var conn=document.getElementById('conn');var play=document.getElementById('play');
  var head=document.getElementById('head');var lead=document.getElementById('lead');var eye=document.getElementById('eyebrow');var stat=document.getElementById('stat');
  if(!st.online){dot.style.background='#8893ab';dot.className='dot';conn.textContent='offline';eye.textContent='AIEOS';head.textContent='Status offline';lead.textContent='Nao foi possivel verificar atualizacoes agora.';play.textContent='VERIFICAR';play.className='play';play.disabled=false;stat.textContent='Sem conexao';}
  else if(st.updateAvailable){dot.style.background='#5a4dff';dot.className='dot';conn.textContent='online';eye.textContent='Atualizacao';head.textContent='Atualizacao disponivel';lead.textContent='Uma nova versao ('+st.remoteVersion+') esta pronta. Clique em ATUALIZAR.';play.textContent='ATUALIZAR';play.className='play';play.disabled=false;stat.textContent='Nova: '+st.remoteVersion;}
  else{dot.style.background='#22c55e';dot.className='dot live';conn.textContent='online';eye.textContent='Pronto';head.textContent='Tudo atualizado';lead.textContent='Voce esta na versao mais recente. Para usar, digite /aieos no Claude Code.';play.textContent='TUDO PRONTO';play.className='play ready';play.disabled=false;stat.textContent=st.rules+' regras ativas';}
}
function primary(){ if(st.updateAvailable){doUpdate();} else {refresh();} }
async function doUpdate(){var log=document.getElementById('log');var play=document.getElementById('play');log.style.display='block';log.textContent='Atualizando... pode levar um minuto.\\n';play.disabled=true;
  try{var r=await(await fetch('/api/update',{method:'POST'})).json();log.textContent+=(r.output||'')+'\\n'+(r.ok?'\\u2713 Concluido.':'\\u2717 Houve um problema.');}catch(e){log.textContent+='Erro: '+e;}
  play.disabled=false;refresh();}
async function openGuide(){try{await fetch('/api/guide',{method:'POST'})}catch(e){}}
window.addEventListener('pagehide',function(){try{navigator.sendBeacon('/api/quit')}catch(e){}});
refresh();
</script></body></html>`;

function send(res, code, type, body) { res.writeHead(code, { 'Content-Type': type }); res.end(body); }
const server = http.createServer(async (req, res) => {
  try {
    if (req.url === '/') return send(res, 200, 'text/html; charset=utf-8', PAGE);
    if (req.url === '/api/status') return send(res, 200, 'application/json', JSON.stringify(await status()));
    if (req.url === '/api/update' && req.method === 'POST') {
      const r = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'update.mjs')], { cwd: ROOT, encoding: 'utf8', timeout: 180000 });
      return send(res, 200, 'application/json', JSON.stringify({ ok: r.status === 0, output: (r.stdout || '') + (r.stderr || '') }));
    }
    if (req.url === '/api/guide' && req.method === 'POST') { openGuide(); return send(res, 200, 'application/json', '{"ok":true}'); }
    if (req.url === '/api/quit' && req.method === 'POST') { send(res, 200, 'application/json', '{"ok":true}'); setTimeout(() => process.exit(0), 200); return; }
    send(res, 404, 'text/plain', 'not found');
  } catch (e) { send(res, 500, 'text/plain', String(e)); }
});
function openApp(url) {
  if (process.platform === 'win32') {
    const c = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
      (process.env.LOCALAPPDATA || '') + '/Google/Chrome/Application/chrome.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe'];
    const exe = c.find((p) => { try { return fs.existsSync(p); } catch { return false; } });
    if (exe) { try { spawn(exe, [`--app=${url}`, '--window-size=1000,640'], { stdio: 'ignore', detached: true }).unref(); return; } catch { /* fall */ } }
    try { spawn('cmd', ['/c', 'start', '', url], { stdio: 'ignore', detached: true }).unref(); } catch { /* ignore */ }
  } else {
    const op = process.platform === 'darwin' ? ['open', [url]] : ['xdg-open', [url]];
    try { spawn(op[0], op[1], { stdio: 'ignore', detached: true }).unref(); } catch { /* ignore */ }
  }
}
function listen(port, tries = 0) {
  server.once('error', (e) => { if (e.code === 'EADDRINUSE' && tries < 12) listen(port + 1, tries + 1); else { console.error('Could not start the hub:', e.message); process.exit(1); } });
  server.listen(port, '127.0.0.1', () => { const url = `http://127.0.0.1:${port}/`; console.log(`AIEOS Hub running at ${url}`); openApp(url); });
}
listen(7878);
