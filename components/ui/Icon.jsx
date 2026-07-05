"use client";

/* Crisp, consistent 24×24 stroke icons — carbon/racing set.
   Usage: <Icon name="bolt" className="w-6 h-6 text-magenta" /> */

const P = {
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  gauge: (
    <>
      <path d="M12 13a9 9 0 1 0-9-9" transform="translate(0 5)" />
      <path d="M3 18a9 9 0 0 1 18 0" />
      <path d="m12 14 4-4" />
      <circle cx="12" cy="14" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3" />
    </>
  ),
  intercooler: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <path d="M7 6v12M11 6v12M15 6v12" />
    </>
  ),
  exhaust: (
    <>
      <path d="M3 12h9a3 3 0 0 1 3 3v0" />
      <rect x="15" y="10" width="6" height="6" rx="3" />
      <path d="M3 9v6" />
    </>
  ),
  wheel: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 3v5.6M12 15.4V21M3 12h5.6M15.4 12H21M6 6l3.5 3.5M14.5 14.5 18 18M18 6l-3.5 3.5M9.5 14.5 6 18" />
    </>
  ),
  brake: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M15 5.5a7 3 0 0 1 0 5" transform="rotate(0 12 12)" />
      <path d="M6 15h2.5" />
    </>
  ),
  coil: (
    <>
      <path d="M8 3h8" />
      <path d="M8 21h8" />
      <path d="M9 5c6 1 6 3 0 4s-6 3 0 4 6 3 0 4" />
    </>
  ),
  tyre: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
    </>
  ),
  play: <path d="M8 5v14l11-7-11-7Z" fill="currentColor" stroke="none" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4h13l-3 4 3 4H5" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
      <path d="M16 5h3v1a3 3 0 0 1-3 3M8 5H5v1a3 3 0 0 0 3 3" />
      <path d="M12 12v4M9 20h6M10 16h4l1 4H9l1-4Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M10.5 9.2v5.6L15 12l-4.5-2.8Z" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  flame: (
    <path d="M12 2c3 3 5.5 5.2 5.5 9.2A5.5 5.5 0 0 1 6.5 12c0-2 .8-3.2 2-4.2.2 1.2 1 2 1.9 1.8C9.4 7 10 4.4 12 2Z" />
  ),
  star: <path d="m12 3 2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 15.9 6.9 18.7 8 13l-4.3-4 5.8-.7L12 3Z" />,
  speedo: (
    <>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="m12 16 4-5" />
      <circle cx="12" cy="16" r="1.3" fill="currentColor" stroke="none" />
      <path d="M4 16h1.5M18.5 16H20M12 8.5V10" />
    </>
  ),
  engine: (
    <>
      <path d="M4 12h2V9h3l2-2h4v3h3l2 2v5h-3l-2 2h-6l-2-2H4v-5Z" />
      <path d="M13 4h3" />
    </>
  ),
};

export default function Icon({ name, className = "w-6 h-6", strokeWidth = 1.6 }) {
  const glyph = P[name] || P.bolt;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {glyph}
    </svg>
  );
}
