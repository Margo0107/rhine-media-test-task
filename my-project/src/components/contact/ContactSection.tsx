import Header from "../Header";

export default function ContactSection() {
  return (
    <>
      <Header />
      <section className="border-1 border-[var(--b0)] bg-[var(--bg-1)] p-89 pt-39 pb-20">
        <div className="flex flex-col items-start">
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

      {/* contact main section */}
      <div>
        <h3>
          Let's Build Something
          <br />
          <span>Profitable Together</span>
        </h3>
        <p>
          Whether you're an advertiser looking to scale your offers, an
          affiliate network seeking a reliable buying team, or a brand ready to
          expand globally — we want to hear from you.
        </p>
      </div>

      <div>
        <div>✈</div>
        <div>
          <h4>Telegram</h4>
          <a href="/" target="_blank">
            @rhinemedia
          </a>
        </div>
      </div>

      <div>
        <div>✉️</div>
        <div>
          <h4>Email</h4>
          <a href="/">
            <span>hello@rhine-media.com</span>
          </a>
        </div>
      </div>

      <div>
        <div>💼</div>
        <div>
          <h4>Business Hours</h4>
          <p>Mon – Fri &nbsp;·&nbsp; 09:00 – 20:00 CET</p>
        </div>
      </div>

      <div>
        <div>⚡</div>
        <div>
          <h4>Response Time</h4>
          <p>Typically within 2–4 business hours</p>
        </div>
      </div>
    </>
  );
}
