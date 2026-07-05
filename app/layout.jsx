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
  title: "SPUNKY #19 — Driver Portfolio",
  description:
    "SPUNKY — #19 time-attack driver. Black Škoda Superb 1.8 TSI, ATM Stage 1, 320 BHP. Raced at Race Wars India, Buddh International Circuit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={titillium.variable}>
      <body className="bg-heat grain">{children}</body>
    </html>
  );
}
