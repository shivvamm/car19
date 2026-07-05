import "./globals.css";
import localFont from "next/font/local";
import { Barlow_Semi_Condensed, Racing_Sans_One } from "next/font/google";

// Real Serpentine Bold — the NFS: Most Wanted "NEED FOR SPEED" display face.
const display = localFont({
  src: "./fonts/serpentine-bold.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "700",
});

// Racing Sans One — the "best racing font" pick for big statement words.
const racing = Racing_Sans_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-racing",
  display: "swap",
});

const body = Barlow_Semi_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "SPUNKY #19 — Driver Portfolio",
  description:
    "SPUNKY — #19 time-attack driver. Black Škoda Superb 1.8 TSI, ATM Stage 1, 320 BHP. Raced at Race Wars India, Buddh International Circuit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${racing.variable} ${body.variable}`}>
      <body className="bg-heat grain">{children}</body>
    </html>
  );
}
