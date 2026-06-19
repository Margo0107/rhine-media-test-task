import { GradientButton, OutlineButton } from "../../ui/Buttons";

export default function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-[850px] flex-col gap-8 px-4 py-4 text-white sm:px-6 lg:px-9">
      <div className="flex flex-col items-start gap-4 text-left">
        <div className="mb-3 inline-flex w-fit items-center gap-3 rounded-full border border-[var(--border-g)]
  
         px-3.5 py-[9px] text-[9px] font-bold tracking-[0.25em] text-[var(--gold)] uppercase sm:text-[10px]">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--gold)]"></div>
          Performance Media Buying Team
        </div>

        <h1 className="text-[42px] leading-[1.05] font-black tracking-[-0.03em] text-[var(--t1)] sm:text-[58px] lg:text-[79px] lg:leading-[0.95]">
          <span className="block">Performance Media</span>

          <span className="block text-[var(--t1)]">
            Buying Team |{" "}
            <span className="[background-image:var(--h1-gold)] bg-clip-text text-transparent">
              Rhine
              <br />
              Media
            </span>
          </span>
        </h1>

        <p className="mt-2 max-w-[570px] text-sm leading-[1.8] break-words text-[var(--t2)] sm:text-base lg:text-lg">
          We buy traffic for{" "}
          <span className="font-medium text-white">
            Dating, Nutra, Gambling, Sweepstakes, iGaming
          </span>{" "}
          and more — across all major channels, in every major GEO, at premium
          scale.
        </p>
      </div>

      <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row">
        <GradientButton>Start Cooperation</GradientButton>

        <OutlineButton>Get in Touch</OutlineButton>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-6 border-t border-slate-900 pt-8 sm:flex sm:flex-wrap sm:gap-10">
        <div>
          <p className="text-[22px] font-semibold text-[var(--gold-lt)] sm:text-[25px]">
            $12M+
          </p>
          <p className="text-xs text-[var(--t3)]">Monthly Ad Spend</p>
        </div>

        <div>
          <p className="text-[22px] font-semibold text-[var(--gold-lt)] sm:text-[25px]">
            340%
          </p>
          <p className="text-xs text-[var(--t3)]">Average Campaign ROI</p>
        </div>

        <div>
          <p className="text-[22px] font-semibold text-[var(--gold-lt)] sm:text-[25px]">
            8+
          </p>
          <p className="text-xs text-[var(--t3)]">Traffic Channels</p>
        </div>

        <div>
          <p className="text-[22px] font-semibold text-[var(--gold-lt)] sm:text-[25px]">
            60+
          </p>
          <p className="text-xs text-[var(--t3)]">GEOs Worldwide</p>
        </div>
      </div>
    </section>
  );
}
