"use client";

import { motion } from "framer-motion";
import { dyno } from "@/lib/data";

const W = 620;
const H = 340;
const PAD = { l: 46, r: 20, t: 24, b: 40 };
const RPM_MIN = 1;
const RPM_MAX = 7;
const VAL_MAX = 400;

const x = (rpm) => PAD.l + ((rpm - RPM_MIN) / (RPM_MAX - RPM_MIN)) * (W - PAD.l - PAD.r);
const y = (v) => H - PAD.b - (v / VAL_MAX) * (H - PAD.t - PAD.b);

function path(points) {
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${x(p[0]).toFixed(1)} ${y(p[1]).toFixed(1)}`)
    .join(" ");
}

function Curve({ points, color, dash, delay }) {
  return (
    <motion.path
      d={path(points)}
      fill="none"
      stroke={color}
      strokeWidth={2.5}
      strokeDasharray={dash ? "6 6" : undefined}
      strokeLinecap="round"
      style={{ filter: `drop-shadow(0 0 6px ${color})` }}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, delay, ease: "easeInOut" }}
    />
  );
}

export default function DynoChart() {
  const rpmTicks = [1, 2, 3, 4, 5, 6, 7];
  const valTicks = [0, 100, 200, 300, 400];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="font-body uppercase tracking-[0.2em] text-[11px] text-white/40">
            Dyno Performance Report
          </div>
          <div className="font-display text-2xl text-white">{dyno.vehicle}</div>
        </div>
        <div className="text-right font-body">
          <div className="text-magenta font-bold text-xs uppercase tracking-widest">Self-Built</div>
          <div className="text-white/40 text-xs">Stage 2 Tune</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
        {/* grid */}
        {rpmTicks.map((r) => (
          <line key={`gx${r}`} x1={x(r)} y1={PAD.t} x2={x(r)} y2={H - PAD.b} stroke="rgba(255,255,255,0.06)" />
        ))}
        {valTicks.map((v) => (
          <g key={`gy${v}`}>
            <line x1={PAD.l} y1={y(v)} x2={W - PAD.r} y2={y(v)} stroke="rgba(255,255,255,0.06)" />
            <text x={PAD.l - 8} y={y(v) + 4} textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-body)">
              {v}
            </text>
          </g>
        ))}
        {rpmTicks.map((r) => (
          <text key={`tx${r}`} x={x(r)} y={H - PAD.b + 20} textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-body)">
            {r}k
          </text>
        ))}

        {/* stock (muted) */}
        <Curve points={dyno.powerStock} color="#5b6b8c" dash delay={0.1} />
        <Curve points={dyno.torqueStock} color="#3f4a63" dash delay={0.2} />
        {/* stage 2 (hot) */}
        <Curve points={dyno.torqueStage} color="#ffc23c" delay={0.4} />
        <Curve points={dyno.powerStage} color="#ff1e6b" delay={0.6} />

        {/* peak markers */}
        <g>
          <circle cx={x(dyno.powerPeak.rpm)} cy={y(dyno.powerPeak.val)} r="4" fill="#ff1e6b" style={{ filter: "drop-shadow(0 0 6px #ff1e6b)" }} />
          <text x={x(dyno.powerPeak.rpm) + 8} y={y(dyno.powerPeak.val) - 6} fontSize="13" fontWeight="800" fill="#ff2d8f" fontFamily="var(--font-display)">
            {dyno.powerPeak.val}
          </text>
          <circle cx={x(dyno.torquePeak.rpm)} cy={y(dyno.torquePeak.val)} r="4" fill="#ffc23c" style={{ filter: "drop-shadow(0 0 6px #ffc23c)" }} />
          <text x={x(dyno.torquePeak.rpm) + 8} y={y(dyno.torquePeak.val) - 6} fontSize="13" fontWeight="800" fill="#ffc23c" fontFamily="var(--font-display)">
            ~{dyno.torquePeak.val}
          </text>
        </g>
      </svg>

      {/* legend */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 font-body text-xs">
        <Legend color="#ff1e6b" label="Stage 2 — Power (BHP)" />
        <Legend color="#ffc23c" label={`Stage 2 — Torque (${dyno.units}, est.)`} />
        <Legend color="#5b6b8c" label="Stock — 158 bhp / 250 Nm" dash />
      </div>
      <p className="mt-2 font-body text-[10px] text-white/30">
        Power figures confirmed (158 → 260 bhp). Torque curve estimated — measured Stage-2 torque pending a dyno sheet.
      </p>
    </div>
  );
}

function Legend({ color, label, dash }) {
  return (
    <span className="flex items-center gap-2 text-white/60">
      <span
        className="inline-block w-6 h-[3px] rounded"
        style={{ background: dash ? `repeating-linear-gradient(90deg, ${color} 0 4px, transparent 4px 8px)` : color }}
      />
      {label}
    </span>
  );
}
