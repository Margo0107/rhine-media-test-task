import { useState } from "react";
import { GradientButton, OutlineButton } from "./ui/Buttons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-1 border-[var(--b0)] bg-[var(--bg-0)]/90 px-4 py-4 backdrop-blur-lg md:px-6 md:py-[21px]">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between">
        {/* Logo */}
        <a href="index.html">
          <div className="flex items-center gap-2">
            <div className="logo-mark flex h-8 w-8 items-center justify-center rounded-lg [background-image:var(--g-gold)] text-xs font-bold text-[var(--bg-0)] md:h-9 md:w-9">
              RM
            </div>
            <div className="text-base font-semibold text-white md:text-lg">
              Rhine <span className="text-[var(--gold)]">Media</span>
            </div>
          </div>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-[30px] lg:flex">
          <li>
            <a
              href="#hero"
              className="text-[13.8px] font-medium text-[var(--t2)] hover:text-[var(--t1)]"
            >
              Verticals
            </a>
          </li>
          <li>
            <a
              href="#traffic"
              className="text-[13.8px] font-medium text-[var(--t2)] hover:text-[var(--t1)]"
            >
              Traffic Sources
            </a>
          </li>
          <li>
            <a
              href="#partners"
              className="text-[13.8px] font-medium text-[var(--t2)] hover:text-[var(--t1)]"
            >
              Partners
            </a>
          </li>
          <li>
            <a
              href="#why-us"
              className="text-[13.8px] font-medium text-[var(--t2)] hover:text-[var(--t1)]"
            >
              Why Us
            </a>
          </li>
          <li>
            <a href="contact.html" className="text-[15px] text-[var(--t2)] hover:text-[var(--t1)]">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <OutlineButton className="max-w-[144px]">
            Get in Touch
          </OutlineButton>
          <GradientButton className="max-w-[181px]">
            Start Cooperation
          </GradientButton>
        </div>

        {/* Mobile burger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col items-center justify-center gap-[5px] p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen w-full bg-[var(--bg-0)]/98 backdrop-blur-xl transition-all duration-300 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } lg:hidden`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 px-6">
          <ul className="flex flex-col items-center gap-6">
            <li>
              <a
                href="#hero"
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-[var(--t2)] hover:text-[var(--t1)]"
              >
                Verticals
              </a>
            </li>
            <li>
              <a
                href="#traffic"
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-[var(--t2)] hover:text-[var(--t1)]"
              >
                Traffic Sources
              </a>
            </li>
            <li>
              <a
                href="#partners"
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-[var(--t2)] hover:text-[var(--t1)]"
              >
                Partners
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-[var(--t2)] hover:text-[var(--t1)]"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="contact.html"
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-[var(--t2)] hover:text-[var(--t1)]"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex flex-col items-center gap-4">
            <OutlineButton className="w-[200px]" onClick={() => setMenuOpen(false)}>
              Get in Touch
            </OutlineButton>
            <GradientButton className="w-[200px]" onClick={() => setMenuOpen(false)}>
              Start Cooperation
            </GradientButton>
          </div>
        </nav>
      </div>
    </header>
  );
}