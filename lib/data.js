// Central content — all pulled from SPUNKY #19 media. Edit freely.

export const driver = {
  handle: "SPUNKY",
  number: "19",
  legalName: "Driver Name", // ← editable placeholder
  tagline: "Time-Attack Driver · Buddh International Circuit",
  location: "New Delhi, India",
  bio: [
    "Grassroots time-attack racer competing under the SPUNKY #19 banner. What started as late-night tuning pulls turned into a full-blown campaign on India's premier circuit.",
    "Behind the wheel of a blacked-out Škoda Superb built for the clock — ATM Performance Stage 1, sticky Michelins, and a livery that glows under the paddock lights.",
  ],
  socials: [
    { label: "Instagram", handle: "@spunky.19", href: "#" },
    { label: "YouTube", handle: "SPUNKY 19", href: "#" },
    { label: "Email", handle: "spunky19@racing.in", href: "#" },
  ],
};

export const playerCard = {
  level: 34,
  rank: "S-CLASS",
  overall: 92,
  heat: 4, // of 5
  rep: 74, // % to next level
  repLabel: "REP · LVL 34 → 35",
  wanted: "MOST WANTED #19",
  cardStats: [
    { icon: "bolt", k: "Power", v: "320" },
    { icon: "speedo", k: "Top Speed", v: "241" },
    { icon: "flag", k: "Races", v: "38" },
    { icon: "trophy", k: "Podiums", v: "11" },
  ],
};

export const stats = [
  { value: 320, suffix: " BHP", label: "Peak Power", sub: "@ 6010 rpm", icon: "bolt" },
  { value: 370, suffix: " LB-FT", label: "Peak Torque", sub: "@ 2910 rpm", icon: "gauge" },
  { value: 100, prefix: "+", suffix: " BHP", label: "Stage 1 Gain", sub: "over stock", icon: "chip" },
  { value: 19, prefix: "#", label: "Race Number", sub: "SPUNKY livery", icon: "flag" },
];

export const car = {
  name: "Škoda Superb 1.8 TSI",
  year: "2014",
  spec: [
    { k: "Engine", v: "1.8L TSI Turbo I4" },
    { k: "Tune", v: "ATM Performance — Stage 1" },
    { k: "Power", v: "320 BHP @ 6010 rpm" },
    { k: "Torque", v: "370 lb-ft @ 2910 rpm" },
    { k: "Drivetrain", v: "Front-wheel drive" },
    { k: "Tyres", v: "Michelin Pilot Sport" },
  ],
  parts: [
    { icon: "chip", name: "ATM Stage 1 Remap", detail: "+100 BHP ECU tune" },
    { icon: "intercooler", name: "Uprated Intercooler", detail: "Cooler intake charge" },
    { icon: "exhaust", name: "Cat-Back Exhaust", detail: "Dual tips · night flames" },
    { icon: "wheel", name: "Black Multi-Spoke", detail: "Lightweight wheels" },
    { icon: "brake", name: "Performance Brakes", detail: "Red calipers" },
    { icon: "coil", name: "Coilover Setup", detail: "Lowered stance" },
  ],
};

// ATM dyno figures (from the report) — used to draw the styled chart.
export const dyno = {
  vehicle: "2014 Škoda Superb 1.8 TSI",
  stock: { power: 220, torque: 220 },
  stage1: { power: 320, torque: 370 },
  // sampled curve points [rpm(x1000), value] for the styled SVG chart
  powerStock: [[2, 30], [3, 90], [4, 128], [5, 165], [5.7, 185], [6.7, 168]],
  powerStage: [[2.2, 40], [3, 120], [4, 190], [5, 250], [6, 320], [6.7, 300]],
  torqueStock: [[2, 128], [2.2, 135], [3, 137], [4, 132], [5.5, 128]],
  torqueStage: [[2.2, 300], [2.9, 370], [3.5, 366], [4.5, 350], [5.5, 355], [6.5, 330]],
};

export const gallery = [
  { src: "/media/hero-neon.jpg", tag: "Studio", span: "col-span-2 row-span-2", label: "SPUNKY — Neon Bay" },
  { src: "/media/studio-top.jpg", tag: "Render", span: "", label: "Overhead #19" },
  { src: "/media/studio-rear.jpg", tag: "Render", span: "", label: "Rear Quarter" },
  { src: "/media/driver-car.jpg", tag: "Paddock", span: "row-span-2", label: "Race Wars — Grid" },
  { src: "/media/track-1.jpg", tag: "Track", span: "", label: "Buddh Circuit" },
  { src: "/media/studio-side.jpg", tag: "Render", span: "col-span-2", label: "Profile in the Bay" },
  { src: "/media/cockpit.jpg", tag: "Onboard", span: "", label: "Helmet On" },
  { src: "/media/track-corner.jpg", tag: "Track", span: "", label: "Apex Hunting" },
];

export const clips = [
  { src: "/media/clip-flames.mp4", poster: "/media/poster-flames.jpg", label: "Anti-Lag / Flames", place: "Night Pulls", feature: true },
  { src: "/media/clip-track.mp4", poster: "/media/poster-track.jpg", label: "Aerial — Sector 2", place: "Buddh Circuit" },
  { src: "/media/clip-night.mp4", poster: "/media/poster-night.jpg", label: "Midnight Profile", place: "Street Run" },
  { src: "/media/clip-straight.mp4", poster: "/media/poster-straight.jpg", label: "Main Straight", place: "Buddh Circuit" },
  { src: "/media/clip-paddock.mp4", poster: "/media/poster-paddock.jpg", label: "Paddock / Pits", place: "Race Wars" },
];

export const race = {
  event: "Race Wars India",
  venue: "Buddh International Circuit · Greater Noida",
  discipline: "Time Attack / Roll Racing",
  timeline: [
    { t: "Scrutineering", d: "FMSCI-sanctioned tech & safety pass" },
    { t: "Qualifying", d: "Hot laps around the 5.14 km GP layout" },
    { t: "Time Attack", d: "#19 chasing the clock through Sector 2" },
    { t: "Podium", d: "On the boards under the Race Wars lights" },
  ],
};

export const partners = [
  "STRADA MOTORSPORTS",
  "ATM PERFORMANCE",
  "MICHELIN",
  "LIQUI MOLY",
  "FUSION CARS",
  "TURBO XTREME",
  "HDFC BANK",
  "RED FM 93.5",
  "AK CUSTOMS",
  "YATRI DRIVER",
  "FMSCI",
];

export const nav = [
  { label: "Driver", href: "#driver" },
  { label: "Machine", href: "#machine" },
  { label: "Gallery", href: "#gallery" },
  { label: "Race Wars", href: "#racewars" },
  { label: "Contact", href: "#contact" },
];
