export default function Footer() {
  return (
    <footer className="border-1 border-[var(--b0)] text-slate-300">
      <div className="mx-auto max-w-7xl px-11 pt-15 pb-8">
        <div className="mb-18 grid grid-cols-1 gap-4 md:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 flex flex-col gap-6">
            <a className="m-0 flex items-center gap-2">
              <div className="logo-mark flex h-9 w-9 items-center justify-center rounded-lg [background-image:var(--g-gold)] text-xs font-bold text-[var(--bg-0)]">
                RM
              </div>
              <div className="text-lg font-semibold text-white">
                Rhine <span className="text-[var(--gold)]">Media</span>
              </div>
            </a>
            <p className="m-0 max-w-[281px] text-[13.8px] tracking-[0.80px] text-[var(--t2)]">
              Premium performance media buying for the world's most ambitious
              advertisers and affiliate partners. Built for scale. Optimised for
              ROI.
            </p>

            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="Telegram"
                className="rounded-md border-1 border-[var(--b0)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--t2)] hover:border-[var(--border-g)] hover:bg-[var(--gold-dim)] hover:text-[var(--gold)]"
              >
                ✈
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-md border-1 border-[var(--b0)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--t2)] hover:border-[var(--border-g)] hover:bg-[var(--gold-dim)] hover:text-[var(--gold)]"
              >
                in
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="rounded-md border-1 border-[var(--b0)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--t2)] hover:border-[var(--border-g)] hover:bg-[var(--gold-dim)] hover:text-[var(--gold)]"
              >
                𝕏
              </a>
              <a
                href="#"
                aria-label="Skype"
                className="rounded-md border-1 border-[var(--b0)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--t2)] hover:border-[var(--border-g)] hover:bg-[var(--gold-dim)] hover:text-[var(--gold)]"
              >
                ☁
              </a>
            </div>
          </div>

          {/* Vertical links */}
          <div className="">
            <h4 className="mb-4 text-[13px] font-semibold tracking-wider text-white">
              VERTICALS
            </h4>
            <ul className="flex flex-col gap-5 text-sm">
              <li>
                <a
                  href="#verticals"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Dating Traffic
                </a>
              </li>
              <li>
                <a
                  href="#verticals"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Nutra Campaigns
                </a>
              </li>
              <li>
                <a
                  href="#verticals"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Gambling / iGaming
                </a>
              </li>
              <li>
                <a
                  href="#verticals"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Sweepstakes
                </a>
              </li>
              <li>
                <a
                  href="#verticals"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Crypto Offers
                </a>
              </li>
              <li>
                <a
                  href="#verticals"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Adult
                </a>
              </li>
            </ul>
          </div>

          {/* Traffic sources */}
          <div className="md:col-span-1">
            <h4 className="mb-4 text-[13px] font-semibold tracking-wider text-white">
              TRAFFIC SOURCES
            </h4>
            <ul className="flex flex-col gap-5 text-sm">
              <li>
                <a
                  href="#traffic"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Google Ads
                </a>
              </li>
              <li>
                <a
                  href="#traffic"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Meta Ads
                </a>
              </li>
              <li>
                <a
                  href="#traffic"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  TikTok Ads
                </a>
              </li>
              <li>
                <a
                  href="#traffic"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  PropellerAds
                </a>
              </li>
              <li>
                <a
                  href="#traffic"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Native Ads
                </a>
              </li>
              <li>
                <a
                  href="#traffic"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Push & Pop
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h4 className="mb-4 text-[13px] font-semibold tracking-wider text-white">
              COMPANY
            </h4>
            <ul className="flex flex-col gap-5 text-sm">
              <li>
                <a
                  href="#why-us"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  About Rhine Media
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="terms.html"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="privacy-policy.html"
                  className="text-[var(--t2)] hover:text-[var(--gold)]"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--b0)] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-[12.8px] text-[var(--t3)]">
              © 2026 Rhine Media. All rights reserved. rhine-media.com
            </p>
            <nav className="flex items-center gap-5 text-sm">
              <a
                href="terms.html"
                className="text-[13px] text-[var(--t3)] hover:text-[var(--t2)]"
              >
                Terms
              </a>
              <a
                href="privacy-policy.html"
                className="text-[13px] text-[var(--t3)] hover:text-[var(--t2)]"
              >
                Privacy
              </a>
              <a
                href="contact.html"
                className="text-[13px] text-[var(--t3)] hover:text-[var(--t2)]"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
