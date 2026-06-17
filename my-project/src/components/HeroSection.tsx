import { GradientButton, OutlineButton } from "./ui/Buttons";

export default function HeroSection() {
  return (
    <>
      <section className="mx-auto flex w-[850px] flex-col gap-10 px-9 py-1 text-white">
        <div className="flex flex-col items-start gap-4 text-left">
          <div className="mb-4 inline-flex w-fit items-center gap-2 gap-3 rounded-full border border-amber-300/20 bg-amber-400/10 px-3.5 py-3 text-[10px] font-bold tracking-[0.3em] text-amber-300 uppercase">
            <div className="h-2 w-2 animate-pulse rounded-full bg-amber-400"></div>
            Performance Media Buying Team
          </div>

          <h1 className="text-[79px]/22 font-black tracking-[-0.03em] text-white">
            <span className="block">Performance Media</span>
            <span className="block">
              Buying Team |{" "}
              <span className="[background-image:var(--h1-gold)] bg-clip-text text-transparent">
                Rhine <br /> Media
              </span>
            </span>
          </h1>

          <p className="mt-4 max-w-[570px] text-base leading-[1.8] text-[var(--t2)] sm:text-lg">
            We buy traffic for{" "}
            <span className="font-medium text-white">
              Dating, Nutra, Gambling, Sweepstakes, iGaming
            </span>{" "}
            and more — across all major channels, in every major GEO, at premium
            scale.
          </p>
        </div>

        <div className="mt-2 flex flex-col items-start justify-start gap-3 sm:flex-row">
          <GradientButton className="">Start Cooperation</GradientButton>
          <OutlineButton className="">Get in Touch</OutlineButton>
        </div>

        <div className="mt-2 flex max-w-[700px] gap-10 border-t-1 border-slate-900 pt-8">
          <div className="">
            <p className="text-[25px] font-semibold text-[var(--gold-lt)]">
              $12M+
            </p>
            <p className="text-xs whitespace-nowrap text-[var(--t3)]">
              Monthly Ad Spend
            </p>
          </div>
          <div className="">
            <p className="text-[25px] font-semibold text-[var(--gold-lt)]">340%</p>
            <p className="text-xs whitespace-nowrap text-[var(--t3)]">
              Average Campaign ROI
            </p>
          </div>
          <div className="">
            <p className="text-[25px] font-semibold text-[var(--gold-lt)]">8+</p>
            <p className="text-xs whitespace-nowrap text-[var(--t3)]">
              Traffic Channels
            </p>
          </div>
          <div className="">
            <p className="text-[25px] font-semibold text-[var(--gold-lt)]">60+</p>
            <p className="text-xs whitespace-nowrap text-[var(--t3)]">
              GEOs Worldwide
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
