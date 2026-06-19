import ContactForm from "./ContactForm";
import FaqSection from "./FaqSection";

export default function ContactSection() {
  return (
    <>
      <section className="border-1 border-[var(--b0)] bg-[var(--bg-1)] py-[79px] pt-39">
        <div className="pointer-events-none absolute top-[-80px] right-[-80px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(62,114,236,0.07)_0%,transparent_70%)]"></div>
        <div className="container-center flex flex-col items-start">
          <div className="mb-3 flex items-center justify-center gap-2">
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

      <section className="relative overflow-hidden bg-[var(--bg-0)]">
        <div className="container-center relative z-10 grid items-start gap-[45px] lg:grid-cols-[0.82fr_1.18fr] py-[80px]">
          <div className="max-w-[470px]">
            <div>
              <h3 className="mb-[13px] text-[24.8px] leading-7 font-bold text-[var(--t1)]">
                Let's Build Something
                <br />
                <span className="text-[var(--gold)]">Profitable Together</span>
              </h3>
              <p className="mb-[40px] max-w-[430px] text-[14.88px] leading-[1.75] text-[var(--t2)]">
                Whether you're an advertiser looking to scale your offers, an
                affiliate network seeking a reliable buying team, or a brand
                ready to expand globally — we want to hear from you.
              </p>
            </div>

            <section className="mb-[40px] flex flex-col gap-[22px]">
              <div className="flex items-center gap-[14px]">
                <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] border border-[var(--b0)] bg-[var(--bg-card)] text-[16px] text-[var(--t1)]">
                  ✈
                </div>
                <div>
                  <h4 className="mb-[5px] text-[12px] leading-[1.12] font-bold tracking-[0.07em] text-[var(--t3)] uppercase">
                    Telegram
                  </h4>
                  <a
                    href="/"
                    target="_blank"
                    className="text-[14.72px] leading-[1.65] font-normal text-[var(--t1)]"
                  >
                    @rhinemedia
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-[14px]">
                <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] border border-[var(--b0)] bg-[var(--bg-card)] text-[16px] text-[var(--t1)]">
                  ✉️
                </div>
                <div>
                  <h4 className="mb-[5px] text-[12px] leading-[1.12] font-bold tracking-[0.07em] text-[var(--t3)] uppercase">
                    Email
                  </h4>
                  <a
                    href="/"
                    className="text-[14.72px] leading-[1.65] font-normal text-[var(--t1)]"
                  >
                    <span>hello@rhine-media.com</span>
                  </a>
                </div>
              </div>

              <div className="mb-[40px] flex items-center gap-[14px]">
                <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] border border-[var(--b0)] bg-[var(--bg-card)] text-[16px] text-[var(--t1)]">
                  💼
                </div>
                <div>
                  <h4 className="mb-[5px] text-[12px] leading-[1.12] font-bold tracking-[0.07em] text-[var(--t3)] uppercase">
                    Business Hours
                  </h4>
                  <p className="text-[14.72px] leading-[1.65] font-normal text-[var(--t1)]">
                    Mon – Fri · 09:00 – 20:00 CET
                  </p>
                </div>
              </div>

              <div className="mb-[40px] flex items-center gap-[14px]">
                <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] border border-[var(--b0)] bg-[var(--bg-card)] text-[16px] text-[var(--t1)]">
                  ⚡
                </div>
                <div>
                  <h4 className="mb-[4px] text-[12px] leading-[1.12] font-bold tracking-[0.07em] text-[var(--t3)] uppercase">
                    Response Time
                  </h4>
                  <p className="text-[14.72px] leading-[1.65] font-normal text-[var(--t1)]">
                    Typically within 2–4 business hours
                  </p>
                </div>
              </div>
            </section>

            <div>
              <p className="mb-[8px] text-[13.28px] font-semibold tracking-[0.05em] text-[var(--t3)] uppercase">
                Also available on
              </p>
              <div className="flex flex-wrap gap-[8px]">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--b1)] p-[18px] py-[10px] text-[12.8px] leading-[1.65] font-bold tracking-[0.01em] whitespace-nowrap text-[var(--t1)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--border-g)] hover:bg-[var(--gold-glow)]/10 hover:text-[var(--gold-lt)]"
                >
                  Skype
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--b1)] p-[18px] py-[10px] text-[12.8px] leading-[1.65] font-bold tracking-[0.01em] whitespace-nowrap text-[var(--t1)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--border-g)] hover:bg-[var(--gold-glow)]/10 hover:text-[var(--gold-lt)]"
                >
                  WhatsApp
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--b1)] p-[18px] py-[10px] text-[12.8px] leading-[1.65] font-bold tracking-[0.01em] whitespace-nowrap text-[var(--t1)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--border-g)] hover:bg-[var(--gold-glow)]/10 hover:text-[var(--gold-lt)]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="mt-[36px] max-w-[449px] overflow-hidden rounded-[18px] bg-[var(--bg-card)]">
              <div className="relative flex min-h-[218px] items-center justify-center bg-[linear-gradient(rgba(62,114,236,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(62,114,236,0.055)_1px,transparent_1px)] bg-[length:28px_28px]">
                <div className="relative flex flex-col items-center gap-3 text-center">
                  <div className="relative h-9 w-9">
                    <div className="absolute top-1 left-1/2 h-[32px] w-[32px] -translate-x-1/2 rotate-315 rounded-[50%_50%_50%_0] border border-[var(--border-g)] bg-[var(--gold-dim)]"></div>
                    <div className="absolute top-[14px] left-1/2 h-[12px] w-[12px] -translate-x-1/2 rounded-full bg-[var(--gold)]"></div>
                  </div>
                  <span className="text-[13px] text-[var(--t3)]">
                    Rhine Media · Global Operations
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* contact form */}
          <ContactForm />
        </div>
        {/* FAQ section */}
        <FaqSection />
      </section>
    </>
  );
}
