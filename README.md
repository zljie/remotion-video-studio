# Pelican Motor Club — Remotion Studio
Original React + SVG animation. 1280×720, 30 fps, 8 seconds. No external fonts, images, or audio. Silent by design.

## Run
Node.js and npm are required.

1. `npm install`
2. `npm run studio`
3. Open http://localhost:3000

## Render
`npm run render`
`npm run still`

If using system Chromium, append `--browser-executable=/usr/bin/chromium` to the render/still command.

Animation lives in `src/root.tsx`. Colors, geometry and timing are fully editable. Road, hills, wheels and scarf repeat every eight seconds. Head and bike gently bounce; the bird blinks.

Remotion is third-party software, subject to its own license: https://www.remotion.dev/license . Check terms before commercial/team use.

## Export delivered from this cloud environment
The Remotion dependencies installed and TypeScript compilation passed. Starting Studio and Chromium rendering was blocked by this cloud execution environment (network interface / Unix socket EPERM; approved escalation failed in the environment wrapper). No live Studio deployment is claimed.

The delivered MP4 uses the **same exported React SVG scene** with ReactDOMServer + resvg + FFmpeg, a browser-free alternate export. It is not a screen recording of Studio. To reproduce this alternate route:

```
node scripts/render-offline.cjs
ffmpeg -y -framerate 30 -i out/frames/%04d.png -frames:v 240 -c:v libx264 -pix_fmt yuv420p -crf 18 -movflags +faststart out/pelican-motorcycle.mp4
```
Requires FFmpeg installed separately. `@resvg/resvg-js` is in devDependencies.

Validation: TypeScript passed; 240-frame H.264 MP4, 1280×720, 30 fps, exactly 8 s; decoded by FFmpeg without errors. Frame 0 equals frame 240 pixel-for-pixel, confirming loop endpoint continuity. Several rendered frames inspected visually. There is no audio track.
