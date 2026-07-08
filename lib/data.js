// Central content — real profile of Aditya "SPUNKY" Singh, #19. Edit freely.

export const driver = {
  handle: "SPUNKY",
  number: "19",
  legalName: "Aditya Singh",
  tagline: "Autocross & Circuit Time-Trial Driver · FMSCI",
  location: "Delhi NCR, India",
  bio: [
    "From late-night NFS Most Wanted and GTA Vice City runs on his father's PC to the old Maruti Zen in the driveway, Aditya “SPUNKY” Singh grew up obsessed with how cars work — driving by class 7 and turning wrenches beside the mechanic long before he turned a lap.",
    "An automobile engineer (Diploma, Amity University · B.Tech, Sharda University) who fabricates, tunes and races his own machines. Today he campaigns a self-built Stage-2 Škoda Superb across FMSCI autocross and circuit time-trials — three trophies in his 2026 debut season, including a class win at STRADA BYOC and a podium at the Buddh International Circuit.",
  ],
  socials: [
    { label: "Instagram", handle: "@adityathakur2315", href: "https://www.instagram.com/adityathakur2315/" },
    { label: "YouTube", handle: "SPUNKYRIDER22", href: "https://www.youtube.com/c/spunkyrider22" },
    { label: "LinkedIn", handle: "Aditya Singh", href: "https://www.linkedin.com/in/aditya-singh-8415032b5" },
    { label: "Email", handle: "aditya.singh.23155@gmail.com", href: "mailto:aditya.singh.23155@gmail.com" },
    { label: "Phone", handle: "+91 80769 43510", href: "tel:+918076943510" },
  ],
};

// Competition-licence / credential card fields.
// NOTE: DL No. and insurance No. are sensitive personal-ID data shown here by the
// owner's explicit request. Remove `dlNo` / `insNo` below to take them off the site.
export const credential = {
  name: "Aditya Singh",
  handle: "SPUNKY",
  number: "19",
  dob: "19 Apr 2003",
  age: 22,
  blood: "A+",
  jersey: "XL",
  medical: "FIT",
  licence: "FMSCI Competition",
  base: "Delhi NCR, India",
  reg: "DL8CZ7525",
  dlNo: "UP2120190009196",
  insurer: "Cronopulse",
  insNo: "ABDLFSKSNS",
};

export const careerStats = [
  { v: "3", k: "Trophies · 2026 S1" },
  { v: "P1", k: "STRADA BYOC · INAC 3" },
  { v: "P3", k: "Buddh · Open/C10" },
  { v: "260", k: "BHP · Stage 2" },
  { v: "2020", k: "Racing Debut" },
  { v: "2", k: "Cars Campaigned" },
];

export const achievements = [
  { year: "2026", title: "STRADA BYOC R1 — P1, INAC 3 Stock", place: "Autocross · 1800–3000cc · 55.340s", icon: "trophy" },
  { year: "2026", title: "STRADA Autocross — P2, Class", place: "STRADA Motorsport · BYOC round", icon: "trophy" },
  { year: "2026", title: "Buddh Int'l Circuit — P3, Open/C10", place: "FI 1650–2000cc · best run 46.840", icon: "trophy" },
  { year: "2026", title: "Stage 2 Build Complete — 260 BHP", place: "Škoda Superb · +102 BHP self-built", icon: "chip" },
  { year: "2025", title: "Stock C4 — Top 10 of 100", place: "Superb season debut · 14 Sep", icon: "speedo" },
  { year: "2025", title: "Stock C4 — P15 of 100", place: "Season 2", icon: "flag" },
  { year: "2022", title: "College Builds — BAJA ATV + Hybrid Bike", place: "Fabrication · paint · full mechanical", icon: "engine" },
  { year: "2020", title: "Racing Debut — FMSCI Novice Licence", place: "BND Motorsport Autocross · P110/112", icon: "flag" },
];

export const playerCard = {
  rank: "C10",
  wanted: "SPUNKY #19",
  cardStats: [
    { icon: "trophy", k: "Trophies", v: "3" },
    { icon: "bolt", k: "Power", v: "260" },
    { icon: "star", k: "Best", v: "P1" },
    { icon: "flag", k: "Debut", v: "2020" },
  ],
};

export const stats = [
  { value: 260, suffix: " BHP", label: "Stage 2 Power", sub: "from 158 stock", icon: "bolt" },
  { value: 102, prefix: "+", suffix: " BHP", label: "Stage 2 Gain", sub: "ECU + TCU tune", icon: "chip" },
  { value: 3, label: "Trophies", sub: "2026 · Season 1", icon: "trophy" },
  { value: 19, prefix: "#", label: "Race Number", sub: "SPUNKY livery", icon: "flag" },
];

export const car = {
  name: "Škoda Superb 1.8 TSI",
  reg: "DL8CZ7525",
  tag: "Stage 2 Build",
  spec: [
    { k: "Engine", v: "1.8 TSI · 1798cc I4 Turbo" },
    { k: "Config", v: "16V DOHC · Direct Injection" },
    { k: "Layout", v: "Transverse Front · FWD" },
    { k: "Stock", v: "158 bhp @ 4500 · 250 Nm @ 1500" },
    { k: "Stage 2", v: "260 bhp (+102)" },
    { k: "Tune", v: "ECU + TCU · Pops & Flames" },
  ],
  parts: [
    { icon: "exhaust", name: "Full Turbo-Back Exhaust", detail: "with downpipe" },
    { icon: "intercooler", name: "K&N High-Flow Filter", detail: "cooler intake charge" },
    { icon: "coil", name: "Racing Ignition Coils", detail: "stronger spark" },
    { icon: "bolt", name: "Racing Spark Plugs", detail: "colder heat range" },
    { icon: "chip", name: "Stage 2 ECU + TCU Tune", detail: "engine & gearbox remap" },
    { icon: "wheel", name: "Lightweight Clutch", detail: "faster pickup" },
    { icon: "flame", name: "Pops & Flames Tune", detail: "anti-lag character" },
  ],
};

// Škoda Superb 1.8 TSI dyno — stock vs self-built Stage 2.
// Stock is measured (158 bhp / 250 Nm). Stage-2 torque curve is ESTIMATED —
// only the 260 bhp power figure is confirmed, so torque is marked "est." in the chart.
export const dyno = {
  vehicle: "Škoda Superb 1.8 TSI",
  units: "Nm",
  torqueEstimated: true,
  powerPeak: { rpm: 5.3, val: 260 },
  torquePeak: { rpm: 2.2, val: 360 },
  powerStock: [[1.5, 40], [2.5, 82], [3.5, 122], [4.5, 158], [5.5, 150], [6.2, 134]],
  powerStage: [[1.8, 62], [2.5, 122], [3.5, 192], [4.5, 240], [5.3, 260], [6.2, 244]],
  torqueStock: [[1.5, 250], [2.5, 240], [3.5, 224], [4.5, 205], [5.5, 180], [6.2, 164]],
  torqueStage: [[2.0, 342], [2.2, 360], [3.0, 356], [4.0, 340], [5.0, 320], [6.2, 300]],
};

export const gallery = [
  { src: "/media/hero-neon.jpg", tag: "Studio", span: "col-span-2 row-span-2", label: "SPUNKY · #19 Superb" },
  { src: "/media/studio-top.jpg", tag: "Render", span: "", label: "Overhead #19" },
  { src: "/media/studio-rear.jpg", tag: "Render", span: "", label: "Rear Quarter" },
  { src: "/media/driver-car.jpg", tag: "Paddock", span: "row-span-2", label: "On the Grid" },
  { src: "/media/track-1.jpg", tag: "Track", span: "", label: "Buddh Circuit" },
  { src: "/media/studio-side.jpg", tag: "Render", span: "col-span-2", label: "Profile — The Superb" },
  { src: "/media/cockpit.jpg", tag: "Onboard", span: "", label: "Helmet On" },
  { src: "/media/track-corner.jpg", tag: "Track", span: "", label: "Apex Hunting" },
];

export const clips = [
  { src: "/media/clip-flames.mp4", poster: "/media/poster-flames.jpg", label: "Anti-Lag / Flames", place: "Pops & Bangs Tune", feature: true },
  { src: "/media/clip-track.mp4", poster: "/media/poster-track.jpg", label: "Aerial — Sector 2", place: "Buddh Circuit" },
  { src: "/media/clip-night.mp4", poster: "/media/poster-night.jpg", label: "Midnight Profile", place: "Street Run" },
  { src: "/media/clip-straight.mp4", poster: "/media/poster-straight.jpg", label: "Main Straight", place: "Buddh Circuit" },
  { src: "/media/clip-paddock.mp4", poster: "/media/poster-paddock.jpg", label: "Paddock / Pits", place: "Race Day" },
];

// Origin story — kid on dad's PC to Stage-2 podium finisher.
export const journey = [
  { era: "The Spark", year: "Childhood", title: "Dad's PC & the family Zen", body: "NFS Most Wanted and GTA Vice City on his father's computer — and afternoons watching his dad keep an old Maruti Zen alive. The obsession started young.", icon: "play" },
  { era: "First Gear", year: "Class 7", title: "Learned to drive", body: "Behind the wheel by 7th standard and hooked on every mechanism. An unreliable second-hand family car became his first hardware classroom — mechanics and YouTube build tutorials on repeat.", icon: "wheel" },
  { era: "Debut", year: "2020", title: "First race — BND Autocross", body: "A temporary FMSCI novice licence and a run at the BND Motorsport autocross. P110 of 112 — and, in his words, the best experience of his life.", icon: "flag" },
  { era: "Own Wheels", year: "2021", title: "Nissan Sunny 1.4 TDI", body: "His first car — a turbo-diesel Sunny that carried the college years. Repairs done himself; retired three years on under Delhi-NCR's 10/15-year scrappage rule.", icon: "gauge" },
  { era: "The Builder", year: "College", title: "BAJA ATV + Hybrid Bike", body: "Two ground-up projects — an off-road BAJA ATV and a plug-in hybrid bike. Fabrication, paint, parts-sourcing, full mechanical: he learned to build, not just drive.", icon: "engine" },
  { era: "Second Car", year: "2022", title: "Škoda Superb 1.8 TSI", body: "Bought used and rough after Covid, then restored part by part on a budget into a proper machine.", icon: "star" },
  { era: "On The Clock", year: "2025", title: "Stock C4 — Top 10 of 100", body: "Debut Superb season: top-10 of 100 cars, then P15 the following round. Enough to decide the car needed building.", icon: "speedo" },
  { era: "Stage 2", year: "2026", title: "260 BHP & three trophies", body: "Full self-built Stage 2 — 158 to 260 bhp — then a class win at STRADA BYOC and a podium at the Buddh International Circuit.", icon: "trophy" },
];

// Official timing sheets / event boards — the receipts (the 4 result photos).
export const results = {
  intro: "Official timing sheets and event boards — the receipts from the 2026 season.",
  items: [
    { src: "/media/result-byoc-p1.jpg", tag: "Class Win", title: "STRADA BYOC — Round 1", result: "P1 · INAC 3 Stock (1800–3000cc)", detail: "55.340s · Škoda Superb · 6 June 2026" },
    { src: "/media/result-buddh-timing.jpg", tag: "Podium", title: "Buddh Int'l Circuit — Open/C10", result: "Best run 46.840 · 97.62 km/h", detail: "FI 1650–2000cc · Superb DL8CZ7525" },
    { src: "/media/result-raceflow.jpg", tag: "On The Board", title: "RaceFlow Live Timing", result: "SPUNKY vs Porsche & BMW", detail: "Aditya Singh · Škoda · Turbo class" },
    { src: "/media/bic-track-map.jpg", tag: "The Track", title: "Buddh International Circuit", result: "5.14 km · 16 turns", detail: "India's F1-grade GP layout" },
  ],
};

export const upcoming = [
  { date: "20 Sep 2026", event: "BND Motorsport India — Season 2", venue: "Autocross · FMSCI-sanctioned", status: "Confirmed" },
  { date: "TBA", event: "STRADA Motorsport — Season 2", venue: "BYOC · FMSCI-sanctioned", status: "Not Announced" },
];

export const race = {
  event: "FMSCI Autocross & Time-Trials",
  venue: "Buddh International Circuit · STRADA & BND rounds",
  discipline: "Autocross · Circuit Time-Trial",
  timeline: [
    { t: "Scrutineering", d: "FMSCI-sanctioned tech & safety pass" },
    { t: "Practice", d: "Reading the cone layout & GP sector lines" },
    { t: "Timed Runs", d: "#19 chasing the clock — 46.8s at Buddh" },
    { t: "Podium", d: "P1 at STRADA BYOC · P3 at Buddh Open/C10" },
  ],
};

// Sanctioning bodies & event brands from Aditya's racing world (not personal sponsors).
export const partners = [
  "FMSCI",
  "STRADA MOTORSPORT",
  "BND MOTORSPORT",
  "RACEFLOW",
  "HDFC BANK",
  "LIQUI MOLY",
  "K&N FILTERS",
];

export const nav = [
  { label: "Driver", href: "#driver" },
  { label: "Journey", href: "#journey" },
  { label: "Career", href: "#achievements" },
  { label: "Machine", href: "#machine" },
  { label: "Results", href: "#results" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
