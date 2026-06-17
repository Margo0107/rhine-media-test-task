export default function Footer() {
  return (
    <footer className="border-1 border-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <a className="inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 font-bold text-slate-900">
                RM
              </div>
              <div className="text-lg font-semibold text-white">
                Rhine <span className="text-amber-400">Media</span>
              </div>
            </a>
            <p className="max-w-xs text-sm text-slate-400">
              Premium performance media buying for the world's most ambitious
              advertisers and affiliate partners. Built for scale. Optimised for
              ROI.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Telegram"
                className="rounded-md bg-white/3 px-2 py-1 text-sm text-slate-300 hover:bg-white/6"
              >
                ✈
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-md bg-white/3 px-2 py-1 text-sm text-slate-300 hover:bg-white/6"
              >
                in
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="rounded-md bg-white/3 px-2 py-1 text-sm text-slate-300 hover:bg-white/6"
              >
                𝕏
              </a>
              <a
                href="#"
                aria-label="Skype"
                className="rounded-md bg-white/3 px-2 py-1 text-sm text-slate-300 hover:bg-white/6"
              >
                ☁
              </a>
            </div>
          </div>

          {/* Vertical links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-wider text-white">
              VERTICALS
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#verticals"
                  className="text-slate-400 hover:text-slate-300"
                >
                  Dating Traffic
                </a>
              </li>
              <li>
                <a
                  href="#verticals"
                  className="text-slate-300 hover:text-white"
                >
                  Nutra Campaigns
                </a>
              </li>
              <li>
                <a
                  href="#verticals"
                  className="text-slate-300 hover:text-white"
                >
                  Gambling / iGaming
                </a>
              </li>
              <li>
                <a
                  href="#verticals"
                  className="text-slate-300 hover:text-white"
                >
                  Sweepstakes
                </a>
              </li>
              <li>
                <a
                  href="#verticals"
                  className="text-slate-300 hover:text-white"
                >
                  Crypto Offers
                </a>
              </li>
              <li>
                <a
                  href="#verticals"
                  className="text-slate-300 hover:text-white"
                >
                  Adult
                </a>
              </li>
            </ul>
          </div>

          {/* Traffic sources */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-wider text-slate-400">
              TRAFFIC SOURCES
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#traffic" className="text-slate-300 hover:text-white">
                  Google Ads
                </a>
              </li>
              <li>
                <a href="#traffic" className="text-slate-300 hover:text-white">
                  Meta Ads
                </a>
              </li>
              <li>
                <a href="#traffic" className="text-slate-300 hover:text-white">
                  TikTok Ads
                </a>
              </li>
              <li>
                <a href="#traffic" className="text-slate-300 hover:text-white">
                  PropellerAds
                </a>
              </li>
              <li>
                <a href="#traffic" className="text-slate-300 hover:text-white">
                  Native Ads
                </a>
              </li>
              <li>
                <a href="#traffic" className="text-slate-300 hover:text-white">
                  Push &amp; Pop
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-wider text-slate-400">
              COMPANY
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#why-us" className="text-slate-300 hover:text-white">
                  About Rhine Media
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="text-slate-300 hover:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#partners" className="text-slate-300 hover:text-white">
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="terms.html"
                  className="text-slate-300 hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="privacy-policy.html"
                  className="text-slate-300 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500">
              © 2026 Rhine Media. All rights reserved.{" "}
              <span className="text-slate-400">rhine-media.com</span>
            </p>
            <nav className="flex items-center gap-6 text-sm">
              <a
                href="terms.html"
                className="text-slate-500 hover:text-slate-300"
              >
                Terms
              </a>
              <a
                href="privacy-policy.html"
                className="text-slate-500 hover:text-slate-300"
              >
                Privacy
              </a>
              <a
                href="contact.html"
                className="text-slate-500 hover:text-slate-300"
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
