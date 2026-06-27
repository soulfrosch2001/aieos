#!/usr/bin/env python3
"""
Clone YOUR voice locally with Coqui XTTS-v2 — free, offline, CPU-capable.

Usage:
  python scripts/voice-clone.py --ref minha-voz.wav --text-file narracao.txt --out saida.wav
  python scripts/voice-clone.py --ref minha-voz.wav --text "Olá, sou eu." --out saida.wav

Args:
  --ref        reference voice sample: a clean WAV of YOUR voice, ~10-30s, mono if possible.
  --text       text to speak (or use --text-file).
  --text-file  UTF-8 file with the text to speak.
  --out        output WAV path.
  --lang       language code (default: pt = Portuguese).

First run downloads the XTTS-v2 model (~1.8 GB) automatically. After that it works offline.
On CPU it is slower (a ~1 min clip may take a few minutes) — fine for short summaries.

License note: XTTS-v2 ships under the Coqui Public Model License (CPML), which is
NON-COMMERCIAL. Cloning your OWN voice for personal use is fine; do not clone other
people's voices without consent.

Install (one time):
  py -3.11 -m pip install coqui-tts        # maintained Coqui TTS fork (imports as `TTS`)
"""
import argparse
import sys
from pathlib import Path


def main() -> None:
    ap = argparse.ArgumentParser(description="Local voice cloning with XTTS-v2 (CPU).")
    ap.add_argument("--ref", required=True, help="reference voice WAV (~10-30s, clean)")
    ap.add_argument("--text", help="text to speak")
    ap.add_argument("--text-file", help="UTF-8 file with text to speak")
    ap.add_argument("--out", required=True, help="output WAV path")
    ap.add_argument("--lang", default="pt", help="language code (default: pt)")
    args = ap.parse_args()

    text = args.text
    if args.text_file:
        text = Path(args.text_file).read_text(encoding="utf-8")
    if not text or not text.strip():
        sys.exit("Provide --text or --text-file with some content.")
    if not Path(args.ref).exists():
        sys.exit(f"Reference sample not found: {args.ref}")

    print("Loading XTTS-v2 (first run downloads ~1.8 GB)…", flush=True)
    from TTS.api import TTS  # type: ignore

    tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2")  # CPU by default
    print("Synthesizing in your voice…", flush=True)
    tts.tts_to_file(
        text=text,
        speaker_wav=args.ref,
        language=args.lang,
        file_path=args.out,
    )
    print("Done:", args.out)


if __name__ == "__main__":
    main()
