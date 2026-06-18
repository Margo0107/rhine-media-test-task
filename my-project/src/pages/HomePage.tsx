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
      <main className="flex items-center justify-center px-20 py-35 pb-30 text-white">
        <div className="w-full max-w-[1200px]">
          <HeroSection />
        </div>
      </main>
      <div className="background: linear-gradient(145deg, #0D1630 0%, #09112A 100%); border-t border-b border-white/5 bg-[var(--bg-1)]">
        <div className="mx-auto w-full max-w-[1200px]">
          <StatsBandSection />
        </div>
      </div>
      <div className="bg-gray-950">
        <VerticalsSection />
      </div>
      <div className="bg-slate-950">
        <TrafficSourcesSection />
      </div>
      <div className="bg-[var(--bg-0)]">
        {" "}
        <PartnersMarqueeSection />
      </div>
      <div className="bg-[var(--bg-1)]">
        <StuggeretCards />
      </div>
      <div className="text-[var(--bg-0)]">
        <CtaSection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
