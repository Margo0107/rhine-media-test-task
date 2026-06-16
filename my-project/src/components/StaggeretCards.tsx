export default function StuggeretCards() {
  return (
    <section className="features py-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="feat-layout">
          {/* Left: content + checklist */}
          <div className="feat-content">
            <div className="sec-sub">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-[2px] w-[18px] rounded-full bg-amber-500"></div>
                <p className="text-[11px] font-bold tracking-[0.14em] text-amber-400 uppercase">
                  Why Choose Rhine Media
                </p>
              </div>
              <h2 className="text-[45px]/[52px] font-black tracking-[-0.03em] text-white">
                Precision. Scale.{" "}
                <span className="text-amber-400">Performance.</span>
              </h2>
              <p className="mt-4 max-w-lg text-base/7 text-slate-400">
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
                  <p>
                    From creative A/B testing to post-click landing page
                    optimization. Every touchpoint tracked and improved
                    continuously.
                  </p>
                </div>
              </div>

              <div className="check-item">
                <div className="chk">✓</div>
                <div className="chk-body">
                  <h4>Real-Time Performance Scaling</h4>
                  <p>
                    Algorithms automatically adjust bids, placements, and
                    targeting based on live conversion metrics.
                  </p>
                </div>
              </div>

              <div className="check-item">
                <div className="chk">✓</div>
                <div className="chk-body">
                  <h4>Dedicated Account Management</h4>
                  <p>
                    You get a senior strategist who owns your campaigns and
                    optimizes them weekly.
                  </p>
                </div>
              </div>

              <div className="check-item">
                <div className="chk">✓</div>
                <div className="chk-body">
                  <h4>Transparent Reporting</h4>
                  <p>
                    Dashboard access, weekly calls, and detailed breakdowns. No
                    black boxes here.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: staggered feature cards */}
          <div className="feat-cards">
            <div className="fc">
              <div className="fc-ico">📈</div>
              <h4 className="fc-title">Data-Driven Buying</h4>
              <p className="fc-body">
                Bidding strategies informed by real conversion data. No
                guesswork — pure performance logic at scale.
              </p>
            </div>

            <div className="fc">
              <div className="fc-ico">🛡️</div>
              <h4 className="fc-title">Brand-Safe Traffic</h4>
              <p className="fc-body">
                Custom placement lists and negative keyword exclusions to
                protect your brand at all times.
              </p>
            </div>

            <div className="fc">
              <div className="fc-ico">🌍</div>
              <h4 className="fc-title">Global GEO Coverage</h4>
              <p className="fc-body">
                Tier-1, LATAM, APAC and MENA — we have the infrastructure to
                scale to any region instantly.
              </p>
            </div>

            <div className="fc">
              <div className="fc-ico">⚡</div>
              <h4 className="fc-title">48h Campaign Launch</h4>
              <p className="fc-body">
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
