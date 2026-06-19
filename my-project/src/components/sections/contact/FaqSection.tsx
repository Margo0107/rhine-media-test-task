import { useState } from "react";

const faqs = [
  {
    question: "What verticals does Rhine Media specialise in?",
    answer:
      "We specialise in Dating, Nutra, Gambling, iGaming, Sweepstakes, Adult, Crypto Offers and Mainstream verticals. Our team has deep domain expertise in each of these niches and maintains direct relationships with top publishers and affiliate networks across all major GEOs.",
  },
  {
    question: "What is the minimum monthly budget to work with you?",
    answer:
      "We typically work with partners investing a minimum of $5,000/month in media spend. For certain verticals or exclusive deal structures, higher minimums may apply. Contact us to discuss your specific situation.",
  },
  {
    question: "How quickly can you launch a campaign?",
    answer:
      "Once we have all required materials, we can typically launch campaigns within 24-48 hours. Our streamlined onboarding process keeps launch timing fast and predictable.",
  },
  {
    question: "Do you work on a CPA, CPL or revenue share basis?",
    answer:
      "We work across multiple pricing models including managed spend, CPA, CPL, RevShare and hybrid structures. The right model depends on your vertical, volume and offer type.",
  },
  {
    question: "Which GEOs do you cover?",
    answer:
      "We have active campaigns running in 60+ GEOs worldwide, including Tier-1 markets, LATAM, APAC and MENA. If you need a specific GEO, let us know and we will confirm capabilities.",
  },
  {
    question: "What reporting and tracking do you provide?",
    answer:
      "Clients receive real-time performance dashboards with transparency on impressions, clicks, conversions, spend and revenue. We integrate with major tracking platforms and custom S2S postback setups.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="container-center relative z-10 py-[90px]">
      <div className="mx-auto mb-[48px] max-w-[620px] text-center">
        <div className="mb-[18px] flex items-center justify-center gap-2">
          <div className="h-[2px] w-[18px] rounded-full bg-[var(--gold)]"></div>
          <p className="text-center text-[11.52px] font-bold tracking-[0.14em] text-[var(--gold)] uppercase">
            FAQ
          </p>
        </div>

        <h2 className="mb-[18px] text-[44px] leading-[1.12] font-extrabold tracking-[-0.025em] text-[var(--t1)]">
          Common <span className="text-[var(--gold)]">Questions</span>
        </h2>
        <p className="mx-auto max-w-[520px] text-[16px] leading-[1.75] text-[var(--t2)]">
          Everything you need to know before starting a cooperation with Rhine
          Media.
        </p>
      </div>

      <div className="mx-auto flex max-w-[860px] flex-col px-[71px]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="overflow-hidden border-b-1 border-[var(--b0)] py-[6px]"
            >
              <button
                type="button"
                onClick={() => handleToggle(index)}
                className="flex w-full cursor-pointer items-center justify-between gap-5 py-[18px] text-left text-[var(--t1)] transition hover:text-[var(--gold-lt)]"
                aria-expanded={isOpen}
              >
                <span className="text-[15.52px] font-semibold">
                  {faq.question}
                </span>
                <span
                  className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] text-[6px] transition-all duration-200 ${
                    isOpen
                      ? "rotate-180 bg-[var(--gold-dim)] text-[var(--gold)]"
                      : "bg-[var(--bg-card)] text-[var(--t2)]"
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-[24px] text-[14.4px] leading-[1.75] text-[var(--t2)]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
