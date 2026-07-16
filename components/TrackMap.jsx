"use client";

/* High-quality animated SVG — accurate Buddh International Circuit (16-turn GP layout).
   Anchor points traced from the official circuit map, then smoothed with a closed
   Catmull-Rom spline. A red comet laps the line; a car dot follows the racing line. */

// Turn-by-turn anchor points (racing direction, clockwise from start/finish).
const POINTS = [
  [346, 264], // start / finish
  [410, 257], // front straight
  [486, 250], // T1
  [516, 290], // T1 exit
  [550, 322], // T2
  [582, 352], // T3 (bottom-right)
  [556, 392], // T3 exit
  [420, 400], // back straight
  [250, 404], // back straight
  [176, 398], // T4 approach
  [120, 374], // T4 hairpin
  [150, 352], // T4 exit
  [215, 300], // climb
  [261, 233], // T5
  [244, 214], // T6
  [226, 221], // T7
  [188, 208], // T8
  [172, 189], // T9
  [120, 150], // sweep to T10
  [76, 150],  // T10 (far left)
  [78, 108],  // to T11
  [138, 86],  // T11 (top)
  [172, 122], // T12
  [212, 160], // T13
  [244, 149], // T14
  [331, 192], // T15
  [300, 235], // T15 exit
  [270, 264], // T16
];

// Closed Catmull-Rom → cubic Bézier path.
function spline(pts) {
  const n = pts.length;
  const f = (v) => v.toFixed(1);
  let d = `M ${f(pts[0][0])},${f(pts[0][1])} `;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C ${f(c1x)},${f(c1y)} ${f(c2x)},${f(c2y)} ${f(p2[0])},${f(p2[1])} `;
  }
  return d + "Z";
}

const PATH = spline(POINTS);

// Apex markers at the key turns.
const corners = [
  POINTS[2],  // T1
  POINTS[5],  // T3
  POINTS[10], // T4
  POINTS[13], // T5
  POINTS[17], // T9
  POINTS[19], // T10
  POINTS[21], // T11
  POINTS[25], // T15
];

export default function TrackMap() {
  return (
    <div className="relative w-full">
      <svg viewBox="0 0 640 460" className="w-full h-auto overflow-visible" role="img" aria-label="Buddh International Circuit — 16-turn GP layout">
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
        <path d={PATH} fill="none" stroke="#1a1d22" strokeWidth="13" strokeLinejoin="round" strokeLinecap="round" />
        {/* kerb dashes */}
        <path d={PATH} fill="none" stroke="#3a3f46" strokeWidth="13" strokeLinejoin="round" strokeDasharray="2 11" opacity="0.7" />
        {/* draw-in racing line */}
        <path
          d={PATH}
          pathLength="1600"
          fill="none"
          stroke="url(#trk)"
          strokeWidth="2.4"
          strokeLinecap="round"
          style={{ strokeDasharray: 1600, animation: "trackdraw 3s ease forwards" }}
        />
        {/* racing comet */}
        <path d={PATH} pathLength="1600" fill="none" stroke="#ff3b30" strokeWidth="3.4" strokeLinecap="round" className="track-comet" filter="url(#glow)" />

        {/* corner apex dots */}
        {corners.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#0a0b0e" stroke="#aab6c2" strokeWidth="1.4" />
        ))}

        {/* start / finish line across the front straight */}
        <g transform="translate(372,256)">
          <rect x="-3.5" y="-10" width="7" height="20" fill="#0a0b0e" stroke="#fff" strokeWidth="1" />
          {[-8, -4, 0, 4].map((yy, i) => (
            <rect key={i} x={i % 2 ? 0 : -3.5} y={yy} width="3.5" height="4" fill="#fff" />
          ))}
        </g>

        {/* car dot following the racing line */}
        <g filter="url(#glow)">
          <circle r="5.5" fill="#fff">
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" path={PATH} />
          </circle>
          <circle r="9" fill="none" stroke="#ff3b30" strokeWidth="1.4" opacity="0.8">
            <animateMotion dur="9s" repeatCount="indefinite" path={PATH} />
          </circle>
        </g>

        {/* sector tags */}
        <text x="300" y="150" fill="#6b7280" fontSize="12" fontFamily="var(--font-body)" letterSpacing="2">S1</text>
        <text x="452" y="300" fill="#6b7280" fontSize="12" fontFamily="var(--font-body)" letterSpacing="2">S2</text>
        <text x="300" y="360" fill="#6b7280" fontSize="12" fontFamily="var(--font-body)" letterSpacing="2">S3</text>
      </svg>
    </div>
  );
}
