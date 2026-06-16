export default function TrafficSourcesSection() {
  const verticals = [
    {
      id: 1,
      emoji: "🚀",
      name: "PropellerAds",
      desc: "Push / Pop / OnClick",
    },
    {
      id: 2,
      emoji: "🔍",
      name: "Google Ads",
      desc: "Search / Display / YouTube",
    },
    {
      id: 3,
      emoji: "🍎",
      name: "Apple Search Ads",
      desc: "iOS App Install",
    },
    {
      id: 4,
      emoji: "📘",
      name: "Meta Ads",
      desc: "acebook / Instagram",
    },
    {
      id: 5,
      emoji: "🎵",
      name: "TikTok Ads",
      desc: "In-Feed / TopView / Spark",
    },
    {
      id: 6,
      emoji: "📰",
      name: "Native Ads",
      desc: "Taboola / Outbrain",
    },
    {
      id: 7,
      emoji: "🔔",
      name: "Push Notifications",
      desc: "Web & In-App Push",
    },
    {
      id: 8,
      emoji: "💥",
      name: "Pop Traffic",
      desc: "Popunder / Interstitial",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[2px] w-[18px] rounded-full bg-amber-500"></div>
            <p className="text-center text-xs font-bold tracking-[0.14em] text-amber-400 uppercase">
              Traffic Sources We Master
            </p>
          </div>

          <h2 className="text-center text-5xl font-black tracking-[-0.03em] text-white">
            Every Major <span className="text-blue-500">Channel</span>
          </h2>
          <p className="text-center text-base leading-[1.75] text-slate-400">
            Full-stack traffic expertise across paid, native, push and
            programmatic channels worldwide.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {verticals.map((v) => (
            <div
              key={v.id}
              className="group flex flex-col items-center gap-2 rounded-[14px] border border-white/5 bg-slate-900 px-4 py-7 text-center transition-all duration-200 hover:border-blue-400 hover:bg-slate-800 hover:shadow-[0_14px_36px_rgba(62,114,236,0.14)] hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[13px] bg-blue-500/12 text-xl flex-shrink-0">
                {v.emoji}
              </div>
              <h3 className="text-sm font-black text-white">{v.name}</h3>
              <p className="text-[0.72rem] text-slate-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
