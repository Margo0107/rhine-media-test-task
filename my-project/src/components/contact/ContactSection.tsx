import Header from "../Header";

export default function ContactSection() {
  return (
    <>
      <Header />
      <section className="border-1 border-[var(--b0)] bg-[var(--bg-1)] p-89 pt-39 pb-20">
        <div className="flex flex-col items-start">
          <div className="flex mb-3 items-center justify-center gap-2">
            <div className="h-[2px] w-[18px] rounded-full bg-[var(--gold)]"></div>
            <p className="text-[11.6px] font-bold tracking-[0.14em] text-[var(--gold)] uppercase">
              Get in Touch
            </p>
          </div>

          <h2 className="text-center text-[48.3px] font-black tracking-[-0.03em] text-white">
            Contact{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #c9973b 0%, #e6b85c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="bg-clip-text text-transparent"
            >
              Rhine Media
            </span>
          </h2>
          <p className="text-center text-[15.6px] leading-[1.75] text-[var(--t2)]">
            Ready to start? Have a question? Our team responds within 24 hours.
          </p>
        </div>
      </section>
    </>
  );
}
