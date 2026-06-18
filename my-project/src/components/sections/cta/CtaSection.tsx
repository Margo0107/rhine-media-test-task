import { GradientButton, OutlineButton } from "../../ui/Buttons";

export default function CtaSection() {
  return (
    <section className="py-27">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-center px-6 text-center">
        <div className="w-full rounded-4xl border border-white/10 [background-image:var(--bg-cta)] px-8 py-20 shadow-[0_30px_80px_rgba(8,18,38,0.35)] backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-center gap-2">
            <div className="h-[2px] w-[18px] rounded-full bg-amber-500"></div>
            <p className="text-[11px] font-bold tracking-[0.14em] text-[var(--gold)]  uppercase">
              Let's scale together
            </p>
          </div>

          <h2 className="text-[46px] font-black tracking-[-0.03em] text-white">
            Ready to <span className="text-[var(--gold)]">Maximize</span> Your ROI?
          </h2>

          <p className="mx-auto mt-2 mb-5 max-w-2xl max-w-[460px] text-base leading-7 text-[var(--t2)]">
            Join the brands and affiliate partners who trust Rhine Media to
            deliver performance at scale, in every major GEO.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GradientButton>Start Cooperation</GradientButton>
            <OutlineButton>Get in Touch</OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
