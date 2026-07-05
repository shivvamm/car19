# car19

**SPUNKY #19** — an NFS-style driver portfolio for a black Škoda Superb 1.8 TSI (ATM Stage 1, ~320 BHP), raced at Race Wars India, Buddh International Circuit.

Built with **Next.js 14**, **React Three Fiber**, **Framer Motion**, and **Tailwind CSS**. Carbon-fiber theme with a racing-red accent, an NFS driver player-card, an all-clips showreel, and an animated SVG circuit map.

## Run locally

```bash
npm install
npm run dev
# http://localhost:3000
```

## Notes on assets

- **Serpentine font is not included.** `app/fonts/serpentine-bold.ttf` is a commercial font and is intentionally gitignored (not redistributed). To build, either drop your own licensed `serpentine-bold.ttf` into `app/fonts/`, or swap the `--font-display` face in `app/layout.jsx` for a free font. Headlines use the free **Racing Sans One** (Google Fonts) already.
- **Raw 4K source clips/photos are not included** (`CLIPS/`, `PICS/`) — they exceed GitHub's file-size limit. Web-optimized versions live in `public/media/`.
