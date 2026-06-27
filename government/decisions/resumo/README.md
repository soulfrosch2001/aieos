# Decision Summaries — resumo/
Status: stable
Type: reference
Owner: Supreme Orchestrator
Extends: none

Every recorded council or discussion in AIEOS ships a plain-language **summary** here,
so a decision can be understood without reading the full record. This is **mandatory**:
the `decision-audio` conformance rule fails `npm test` if a recorded decision has no
audio summary.

## Layout
| Folder | Holds |
|--------|-------|
| [audio/](audio/) | The spoken summary `<id>-resumo.mp3` and its narration script `<id>-resumo.txt`. |
| [pdf/](pdf/) | Formatted PDF report(s) of the discussion, `<id>-*.pdf`. |

## Generate an audio summary
Narration text → MP3, using a free neural pt-BR voice (Microsoft Edge TTS, no API key):

```
npm install      # once, to enable the audio tool (installs msedge-tts)
npm run audio -- government/decisions/resumo/audio/0001-resumo.txt government/decisions/resumo/audio/0001-resumo.mp3
```

The default voice is the **`jinx` preset** (`pt-BR-ThalitaNeural`, faster and higher
pitch — playful/chaotic). Pass a different preset or voice as the third argument:
`jinx` (default), `francisca` (neutral/serious), `thalita`, `antonio`, or an explicit
voice id; optional rate/pitch follow (e.g. `+22%`). See
[../../../scripts/gen-audio.mjs](../../../scripts/gen-audio.mjs).
