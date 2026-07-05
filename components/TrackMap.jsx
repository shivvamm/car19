"use client";

/* High-quality animated SVG — stylised Buddh International Circuit.
   A red comet laps the circuit; a car dot follows the racing line. */

const PATH =
  "M110,300 C86,246 96,196 150,180 C196,166 214,208 262,196 C316,182 316,120 372,118 " +
  "C430,116 452,150 470,170 C500,204 546,196 548,238 C550,282 500,286 486,312 " +
  "C472,338 496,360 452,366 C392,374 372,330 312,340 C256,349 236,372 186,364 " +
  "C140,357 132,346 110,300 Z";

const corners = [
  [150, 180], [262, 196], [372, 118], [470, 170],
  [486, 312], [452, 366], [312, 340], [186, 364],
];

export default function TrackMap() {
  return (
    <div className="relative w-full">
      <svg viewBox="0 0 640 460" className="w-full h-auto overflow-visible" role="img" aria-label="Buddh International Circuit map">
        <defs>
          <linearGradient id="trk" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff5a4e" />
            <stop offset="60%" stopColor="#ff3b30" />
            <stop offset="100%" stopColor="#c9a15a" />
          </linearGradient>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* asphalt base */}
        <path d={PATH} fill="none" stroke="#1a1d22" strokeWidth="16" strokeLinejoin="round" strokeLinecap="round" />
        {/* kerb dashes */}
        <path d={PATH} fill="none" stroke="#3a3f46" strokeWidth="16" strokeLinejoin="round" strokeDasharray="2 12" opacity="0.7" />
        {/* draw-in racing line */}
        <path
          d={PATH}
          fill="none"
          stroke="url(#trk)"
          strokeWidth="2.4"
          strokeLinecap="round"
          style={{ strokeDasharray: 1600, animation: "trackdraw 3s ease forwards" }}
        />
        {/* racing comet */}
        <path d={PATH} fill="none" stroke="#ff3b30" strokeWidth="3.5" strokeLinecap="round" className="track-comet" filter="url(#glow)" />

        {/* corner apex dots */}
        {corners.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill="#0a0b0e" stroke="#aab6c2" strokeWidth="1.4" />
          </g>
        ))}

        {/* start / finish */}
        <g transform="translate(110,300)">
          <rect x="-4" y="-11" width="8" height="22" fill="#0a0b0e" stroke="#fff" strokeWidth="1" />
          {[-8, -4, 0, 4].map((yy, i) => (
            <rect key={i} x={i % 2 ? 0 : -4} y={yy} width="4" height="4" fill="#fff" />
          ))}
        </g>

        {/* car dot following racing line */}
        <g filter="url(#glow)">
          <circle r="5.5" fill="#fff">
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto" path={PATH} />
          </circle>
          <circle r="9" fill="none" stroke="#ff3b30" strokeWidth="1.4" opacity="0.8">
            <animateMotion dur="8s" repeatCount="indefinite" path={PATH} />
          </circle>
        </g>

        {/* sector tags */}
        <text x="205" y="150" fill="#6b7280" fontSize="12" fontFamily="var(--font-body)" letterSpacing="2">S1</text>
        <text x="512" y="250" fill="#6b7280" fontSize="12" fontFamily="var(--font-body)" letterSpacing="2">S2</text>
        <text x="250" y="400" fill="#6b7280" fontSize="12" fontFamily="var(--font-body)" letterSpacing="2">S3</text>
      </svg>
    </div>
  );
}
