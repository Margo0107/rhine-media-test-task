export default function StuggeretCards() {
  return (
    <section id="why-us" className="features py-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Left: content + checklist */}
          <div className="feat-content">
            <div className="sec-sub mb-8">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-[2px] w-[18px] rounded-full bg-amber-500"></div>
                <p className="text-[11px] font-bold tracking-[0.14em] text-[var(--gold)] uppercase">
                  Why Choose Rhine Media
                </p>
              </div>
              <h2 className="text-[45px]/[52px] font-black tracking-[-0.03em] text-white">
                Precision. Scale.{" "}
                <span className="text-[var(--gold)]">Performance.</span>
              </h2>
              <p className="mt-4 max-w-lg text-base/7 text-[var(--t2)]">
                We're not a media network — we're your in-house buying team.
                Deep expertise, real accountability and transparent reporting on
                every dollar spent.
              </p>
            </div>

            <div className="check-list">
              <div className="check-item">
                <div className="chk">✓</div>
                <div className="chk-body">
                  <h4>Full Funnel Optimization</h4>
                  <p className="text-[13.8px] text-[var(--t2)]">
                    From creative A/B testing to post-click landing page
                    optimization. Every touchpoint tracked and improved
                    continuously.
                  </p>
                </div>
              </div>

              <div className="check-item">
                <div className="chk">✓</div>
                <div className="chk-body">
                  <h4>Direct Publisher Relationships</h4>
                  <p className="text-[13.8px] text-[var(--t2)]">
                    We maintain direct deals with top publishers and ad networks
                    — cutting costs and boosting campaign performance.
                  </p>
                </div>
              </div>

              <div className="check-item">
                <div className="chk">✓</div>
                <div className="chk-body">
                  <h4>Real-Time Reporting Dashboards</h4>
                  <p className="text-[13.8px] text-[var(--t2)]">
                    Live dashboards with full transparency on spend,
                    impressions, conversions and revenue attribution — 24/7.
                  </p>
                </div>
              </div>

              <div className="check-item">
                <div className="chk">✓</div>
                <div className="chk-body">
                  <h4>Dedicated Account Manager</h4>
                  <p className="text-[13.8px] text-[var(--t2)]">
                    Every partner gets a dedicated team member. No ticket
                    queues, no delays — direct Telegram/Skype communication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: staggered feature cards */}
          <div className="grid content-center gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-g)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
              <div className="mb-4 text-3xl">📈</div>
              <h4 className="mb-2 text-[15px] font-bold text-white">
                Data-Driven Buying
              </h4>
              <p className="text-sm leading-5 text-[var(--t2)]">
                Bidding strategies informed by real conversion data. No
                guesswork — pure performance logic at scale.
              </p>
            </div>

            <div className="mt-7 rounded-xl border border-white/10 bg-[var(--bg-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-g)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
              <div className="mb-4 text-3xl">🛡️</div>
              <h4 className="mb-2 text-[15px] font-bold text-white">
                Brand-Safe Traffic
              </h4>
              <p className="text-sm leading-5 text-[var(--t2)]">
                Custom placement lists and negative keyword exclusions to
                protect your brand at all times.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[var(--bg-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-g)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
              <div className="mb-4 text-3xl">🌍</div>
              <h4 className="mb-2 text-[15px] font-bold text-white">
                Global GEO Coverage
              </h4>
              <p className="text-sm leading-5 text-[var(--t2)]">
                Tier-1, LATAM, APAC and MENA — we have the infrastructure to
                scale to any region instantly.
              </p>
            </div>

            <div className="-mt-7 rounded-xl border border-white/10 bg-[var(--bg-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-g)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
              <div className="mb-4 text-3xl">⚡</div>
              <h4 className="mb-2 text-[15px] font-bold text-white">
                48h Campaign Launch
              </h4>
              <p className="text-sm leading-5 text-[var(--t2)]">
                From brief to live in under 48 hours. Streamlined onboarding
                means you never miss a traffic window.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
