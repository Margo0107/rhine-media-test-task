import CtaSection from "../components/sections/cta/CtaSection";
import HeroSection from "../components/sections/hero/HeroSection";
import PartnersMarqueeSection from "../components/sections/partners/PartnersSection";
import StuggeretCards from "../components/sections/why-us-fatures/StaggeretCards";
import StatsBandSection from "../components/sections/stats-band/StatsBandSection";
import TrafficSourcesSection from "../components/sections/traffic/TrafficSection";
import VerticalsSection from "../components/sections/verticals/VerticalsSection";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <main className="relative flex items-center justify-center overflow-hidden bg-[linear-gradient(rgba(62,114,236,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(62,114,236,0.055)_1px,transparent_1px)] bg-[length:64px_64px] px-20 py-35 pb-30">
        {/*bg gradient right */}
        <div className="pointer-events-none absolute top-[-220px] right-[-160px] z-0 h-[680px] w-[680px] bg-[radial-gradient(circle,rgba(30,65,170,0.22)_0%,transparent_68%)] blur-[75px]"></div>
        {/*bg gradient left */}
        <div className="pointer-events-none absolute bottom-[80px] left-[5%] z-0 h-[420px] w-[420px] bg-[radial-gradient(circle,rgba(201,151,59,0.10)_0%,transparent_70%)] blur-[95px]"></div>
        {/*bg gradient center */}
        <div className="pointer-events-none absolute top-[50%] left-[38%] z-0 h-[280px] w-[280px] bg-[radial-gradient(circle,rgba(62,114,236,0.12)_0%,transparent_70%)] blur-[75px]"></div>
        {/* sections */}
        <div className="relative z-10 w-full max-w-[1200px]">
          <HeroSection />
        </div>
      </main>
      <div className="border-t border-b border-white/5 bg-[var(--bg-1)]">
        <div className="mx-auto w-full max-w-[1200px]">
          <StatsBandSection />
        </div>
      </div>
      <div className="bg-[var(--bg-0)]">
        <VerticalsSection />
      </div>
      <div className="bg-[var(--bg-1)]">
        <TrafficSourcesSection />
      </div>
      <div className="bg-[var(--bg-0)]">
        {" "}
        <PartnersMarqueeSection />
      </div>
      <div className="bg-[var(--bg-1)]">
        <StuggeretCards />
      </div>
      <div className="bg-[var(--bg-0)]">
        <CtaSection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
