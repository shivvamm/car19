import "./globals.css";
import { Titillium_Web } from "next/font/google";

// Titillium Web — the Formula 1 typeface. One family, used across the whole site.
const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
});

export const metadata = {
  title: "SPUNKY #19 — Aditya Singh · Racing Driver",
  description:
    "Aditya “SPUNKY” Singh, #19 — FMSCI autocross & circuit time-trial driver. Self-built Stage-2 Škoda Superb (158→260 bhp). 3 trophies in 2026 incl. P1 at STRADA BYOC and a podium at the Buddh International Circuit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={titillium.variable}>
      <body className="bg-heat grain">{children}</body>
    </html>
  );
}
