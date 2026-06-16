import CtaSection from "./components/CtaSection";
import HeroSection from "./components/HeroSection";
import PartnersMarqueeSection from "./components/PartnersSection";
import StuggeretCards from "./components/StaggeretCards";
import StatsBandSection from "./components/StatsBandSection";
import TrafficSourcesSection from "./components/TrafficSection";
import VerticalsSection from "./components/VerticalsSection";

function App() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-gray-950 px-20 py-30 text-white">
        <div className="w-full max-w-[1200px]">
          <HeroSection />
        </div>
      </main>
      <div className="border-t border-b border-white/10 bg-slate-950">
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
      <div className="bg-gray-950">
        {" "}
        <PartnersMarqueeSection />
      </div>
      <div className="bg-slate-950">
        <StuggeretCards />
      </div>
      <div className="bg-gray-950">
        <CtaSection />
      </div>
      <div>
        <footer />
      </div>
    </>
  );
}

export default App;
