#!/usr/bin/env node
// Generate a spoken audio summary from a narration text file, using the free
// Microsoft Edge neural TTS (no API key).
//
//   npm install                                   # once (installs msedge-tts)
//   npm run audio -- <in.txt> <out.mp3> [preset|voice] [rate] [pitch]
//
// Presets:
//   thalita    (DEFAULT) — pt-BR-ThalitaNeural, neutral
//   jinx       — pt-BR-ThalitaNeural, faster & higher pitch (chaotic, playful)
//   francisca  — pt-BR-FranciscaNeural, neutral (serious narration)
// Or pass an explicit voice id (e.g. pt-BR-AntonioNeural) plus optional rate/pitch
// like "+22%" / "-10%".
import fs from 'node:fs';

const PRESETS = {
  jinx: { voice: 'pt-BR-ThalitaNeural', rate: '+12%', pitch: '+10%' },
  thalita: { voice: 'pt-BR-ThalitaNeural', rate: '+0%', pitch: '+0%' },
  francisca: { voice: 'pt-BR-FranciscaNeural', rate: '+0%', pitch: '+0%' },
  antonio: { voice: 'pt-BR-AntonioNeural', rate: '+0%', pitch: '+0%' },
};
const DEFAULT_PRESET = 'thalita';

const [, , inPath, outPath, sel, rateArg, pitchArg] = process.argv;
if (!inPath || !outPath) {
  console.error('Usage: node scripts/gen-audio.mjs <narration.txt> <output.mp3> [preset|voice] [rate] [pitch]');
  console.error('Presets: ' + Object.keys(PRESETS).join(', ') + ' (default: ' + DEFAULT_PRESET + ')');
  process.exit(1);
}

let cfg;
if (!sel) cfg = { ...PRESETS[DEFAULT_PRESET] };
else if (PRESETS[sel.toLowerCase()]) cfg = { ...PRESETS[sel.toLowerCase()] };
else cfg = { voice: sel, rate: '+0%', pitch: '+0%' }; // explicit voice id
if (rateArg) cfg.rate = rateArg;
if (pitchArg) cfg.pitch = pitchArg;

let MsEdgeTTS, OUTPUT_FORMAT;
try {
  ({ MsEdgeTTS, OUTPUT_FORMAT } = await import('msedge-tts'));
} catch {
  console.error('Missing dependency "msedge-tts". Run `npm install` first.');
  process.exit(1);
}

const text = fs.readFileSync(inPath, 'utf8');
const fmtKey =
  Object.keys(OUTPUT_FORMAT).find((k) => /48k.*mp3/i.test(k)) ||
  Object.keys(OUTPUT_FORMAT).find((k) => /mp3/i.test(k));

const tts = new MsEdgeTTS();
await tts.setMetadata(cfg.voice, OUTPUT_FORMAT[fmtKey]);
const res = tts.toStream(text, { rate: cfg.rate, pitch: cfg.pitch });
const stream = res.audioStream ?? res;

await new Promise((resolve, reject) => {
  const ws = fs.createWriteStream(outPath);
  stream.on('data', (d) => ws.write(d));
  stream.on('end', () => ws.end());
  stream.on('error', reject);
  ws.on('finish', resolve);
  ws.on('error', reject);
});

console.log(`Audio written: ${outPath} (${fs.statSync(outPath).size} bytes) — voice ${cfg.voice} rate ${cfg.rate} pitch ${cfg.pitch}`);
