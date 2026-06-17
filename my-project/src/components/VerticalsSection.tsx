export default function VerticalsSection() {
  const verticals = [
    {
      id: 1,
      emoji: "💘",
      name: "Dating",
      desc: "Mainstream & adult dating campaigns. SOI, DOI and trial offers across tier-1 GEOs with proven funnels.",
      tag: "High Volume",
    },
    {
      id: 2,
      emoji: "💊",
      name: "Nutra",
      desc: "Weight loss, supplements, skincare. Native & push traffic specialization with compliant creatives.",
      tag: "Premium GEOs",
    },
    {
      id: 3,
      emoji: "🎰",
      name: "Gambling",
      desc: "Online casino, sports betting, poker. FTD-focused funnels with high player LTV and retention.",
      tag: "Top ROI",
    },
    {
      id: 4,
      emoji: "🔞",
      name: "Adult",
      desc: "Adult content & services. Compliant campaigns via premium adult traffic networks at scale.",
      tag: "Specialized",
    },
    {
      id: 5,
      emoji: "🎁",
      name: "Sweepstakes",
      desc: "CC-submit & SOI sweeps. Push, pop and display traffic with high conversion rates globally.",
      tag: "Mass Scale",
    },
    {
      id: 6,
      emoji: "₿",
      name: "Crypto",
      desc: "Crypto trading platforms, wallets and exchange offers. FTD & CPA models in regulated GEOs.",
      tag: "Emerging",
    },
    {
      id: 7,
      emoji: "📱",
      name: "Mainstream",
      desc: "App installs, e-commerce, utilities. Google, Meta and TikTok performance campaigns at scale.",
      tag: "Versatile",
    },
    {
      id: 8,
      emoji: "🎮",
      name: "iGaming",
      desc: "Fantasy sports, esports betting and skill-based gaming platforms. Fast-growing vertical expertise.",
      tag: "Fast Growth",
    },
  ];

  return (
    <section id="hero" className="py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[2px] w-[18px] rounded-full bg-amber-500"></div>
            <p className="text-center text-xs font-bold tracking-[0.14em] text-[var(--gold)] uppercase">
              Our Verticals
            </p>
          </div>

          <h2 className="text-center text-5xl font-black tracking-[-0.03em] text-white">
            Niches We <span className="text-[var(--gold)]">Dominate</span>
          </h2>
          <p className="text-center text-base leading-[1.75] text-[var(--t2)]">
            Deep expertise across the highest-performing verticals in
            performance marketing.
          </p>
        </div>

        <div className="grid gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
          {verticals.map((v) => (
            <div
              key={v.id}
              className="group relative overflow-hidden rounded-[20px] border border-white/5 bg-[var(--bg-card)] px-6 py-12 transition-all duration-150 hover:border-amber-500/40 hover:bg-slate-800 hover:shadow-[0_22px_55px_rgba(0,0,0,0.32)]"
            >
              {/* Top shimmer bar */}
              <div className="absolute top-0 right-0 left-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 transition-transform duration-500 group-hover:scale-x-100"></div>

              <span className="mb-3 block text-3xl text-white">{v.emoji}</span>
              <h3 className="mb-2 text-base font-black text-white">{v.name}</h3>
              <p className="mb-4 h-[62px] w-[234px] text-[13px] leading-[1.62] text-[var(--t2)]">
                {v.desc}
              </p>

              <span className="inline-block rounded-full bg-[var(--gold-dim)] px-2.5 py-1 text-[0.69rem] font-bold tracking-[0.07em] text-[var(--gold)] uppercase">
                {v.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
