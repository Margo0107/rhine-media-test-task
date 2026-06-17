import { Routes, Route } from "react-router-dom";
import CtaSection from "./components/CtaSection";
import HeroSection from "./components/HeroSection";
import PartnersMarqueeSection from "./components/PartnersSection";
import StuggeretCards from "./components/StaggeretCards";
import StatsBandSection from "./components/StatsBandSection";
import TrafficSourcesSection from "./components/TrafficSection";
import VerticalsSection from "./components/VerticalsSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactSection from "./components/contact/ContactSection";

function HomePage() {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactSection />} />
    </Routes>
  );
}

export default App;
