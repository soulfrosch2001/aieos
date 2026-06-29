# Welcome tutorial

[comece-aqui.html](comece-aqui.html) is the self-contained, image-rich onboarding guide shown
to end users. The installers copy it to a Desktop folder (**"AIEOS - Comece Aqui"**) and open it
right after install, so a non-technical user knows exactly what to do (prerequisites, the
SmartScreen note, and how to use `/aieos`).

It is offline-first (inline CSS + SVG, no external assets) and written in Brazilian Portuguese
for the current audience — localize as needed. The Windows installer wires this via
[../aieos.iss](../aieos.iss); keep the version label in the HTML in sync on release.
