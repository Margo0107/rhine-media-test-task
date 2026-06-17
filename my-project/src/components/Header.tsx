import { GradientButton, OutlineButton } from "./ui/Buttons";

export default function Header() {
  return (

    <header className="py-[21px]">
      <div className="flex items-center justify-between justify-center gap-32">
        {/* <!-- Logo --> */}
        <a href="index.html">
          <div className="flex items-center gap-2">
            <div className="logo-mark flex h-9 w-9 items-center justify-center rounded-lg [background-image:var(--g-gold)] text-xs font-bold text-[var(--bg-0)]">
              RM
            </div>
            <div className="text-lg font-semibold text-white">
              Rhine <span className="text-[var(--gold)]">Media</span>
            </div>
          </div>
        </a>
        {/* 
        <!-- Desktop links --> */}
        <ul className="flex gap-[30px]">
          <li>
            <a
              href="#verticals"
              className="text-[13.8px] font-medium text-[var(--t2)]"
            >
              Verticals
            </a>
          </li>
          <li>
            <a
              href="#traffic"
              className="text-[13.8px] font-medium text-[var(--t2)]"
            >
              Traffic Sources
            </a>
          </li>
          <li>
            <a
              href="#partners"
              className="text-[13.8px] font-medium text-[var(--t2)]"
            >
              Partners
            </a>
          </li>
          <li>
            <a
              href="#why-us"
              className="text-[13.8px] font-medium text-[var(--t2)]"
            >
              Why Us
            </a>
          </li>
          <li>
            <a href="contact.html" className="text-[15px] text-[var(--t2)]">
              Contact
            </a>
          </li>
        </ul>
        <div>
          <div className="flex flex-col items-start justify-start gap-3 sm:flex-row">
            <OutlineButton className="max-w-[144px]">
              Get in Touch
            </OutlineButton>
            <GradientButton className="max-w-[181px]">
              Start Cooperation
            </GradientButton>
          </div>
        </div>
      </div>
    </header>
  );
}
