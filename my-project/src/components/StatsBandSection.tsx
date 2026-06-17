export default function StatsBandSection() {
  return (
    <section className="m-auto py-14">
      <div className="flex w-full items-center justify-center gap-20 px-6">
        <div className="p-2 py-2 text-center">
          <p className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-4xl font-extrabold tracking-[-0.03em] text-transparent">
            4.2B+
          </p>
          <p className="mt-3 text-sm font-semibold text-slate-500">
            Ad Impressions / Month
          </p>
          <span className="mt-2 block text-xs text-slate-600">
            Across all traffic sources
          </span>
        </div>

        <div className="border-l border-white/5 pl-20 p-2 py-2 text-center">
          <p className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-4xl font-extrabold tracking-[-0.03em] text-transparent">
            340%
          </p>
          <p className="mt-3 text-sm font-semibold text-slate-500">
            Average ROI
          </p>
          <span className="mt-2 block text-xs text-slate-600">
            Verified by partners
          </span>
        </div>

        <div className="border-r border-l border-white/5 p-15 pl-14 py-2 text-center">
          <p className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-4xl font-extrabold tracking-[-0.03em] text-transparent">
            7
          </p>
          <p className="mt-3 text-sm font-semibold text-slate-500">
            Verticals Mastered
          </p>
          <span className="mt-2 block text-xs text-slate-600">
            Dating, Nutra, Gambling & more
          </span>
        </div>

        <div className="p-4 py-2 text-center">
          <p className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-4xl font-extrabold tracking-[-0.03em] text-transparent">
            60+
          </p>
          <p className="mt-3 text-sm font-semibold text-slate-500">
            Global GEOs
          </p>
          <span className="mt-2 block text-xs text-slate-600">
            Tier-1 & emerging markets
          </span>
        </div>
      </div>
    </section>
  );
}
