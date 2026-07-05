import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import SideRail from "@/components/SideRail";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import Driver from "@/components/Driver";
import Achievements from "@/components/Achievements";
import Machine from "@/components/Machine";
import Showreel from "@/components/Showreel";
import Gallery from "@/components/Gallery";
import RaceWars from "@/components/RaceWars";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <SideRail />
      <Nav />
      <Hero />
      <StatBar />
      <Driver />
      <Achievements />
      <Machine />
      <Showreel />
      <Gallery />
      <RaceWars />
      <Partners />
      <Footer />
    </main>
  );
}
