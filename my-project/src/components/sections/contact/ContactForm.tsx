import { GradientButton } from "../../ui/Buttons";

const fieldClass =
  "mt-2 h-[48px] w-full rounded-lg border border-[var(--b1)] bg-[var(--bg-2)] px-4 text-sm text-[var(--t1)] outline-none transition placeholder:text-[#42506d] focus:border-[var(--border-g)] focus:ring-2 focus:ring-[var(--gold-dim)]";

const labelClass = "text-[11px] font-semibold tracking-[0.03em] text-[#8fa0ca]";

export default function ContactForm() {
  return (
    <section className="w-full rounded-[28px] border border-[var(--b1)] bg-[var(--bg-card)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
      <h3 className="mb-7 text-[23px] font-black tracking-[-0.02em] text-white">
        Send Us a Message
      </h3>
      <form className="grid gap-6 sm:grid-cols-2">
        {/* row-1 */}
        <div>
          <div>
            <label className={labelClass}>First Name *</label>
            <input className={fieldClass} placeholder="john" />
          </div>
        </div>
        {/* row-2 */}
        <div>
          <div>
            <label className={labelClass}>Last Name *</label>
            <input className={fieldClass} placeholder="Smit" />
          </div>
        </div>
        {/* row bio 1*/}
        <div className="sm:col-span-2">
          <div>
            <label className={labelClass}>Email Address *</label>
            <input className={fieldClass} placeholder="john@company.com" />
          </div>
        </div>
        {/* row bio 2*/}
        <div className="sm:col-span-2">
          <div>
            <label className={labelClass}>Company / Brand</label>
            <input className={fieldClass} placeholder="your company name" />
          </div>
        </div>
        {/* row bio 3*/}
        <div className="sm:col-span-2">
          <div>
            <label className={labelClass}>Telegram / Skype Handle</label>
            <input className={fieldClass} placeholder="@yourusername" />
          </div>
        </div>
        {/* row bio select*/}
        <div className="sm:col-span-2">
          <div>
            <label className={labelClass}>Vertical / Niche *</label>
            <select className={fieldClass}>
              <option>Select a vertical…</option>
              <option>Dating</option>
              <option>Nutra / Health & Beauty</option>
              <option>Gambling / Casino</option>
              <option>iGaming / Betting</option>
              <option>Sweepstakes</option>
              <option>Adult</option>
              <option>Crypto Offers</option>
              <option>Mainstream / Other</option>
            </select>
          </div>
        </div>
        {/* row bio select*/}
        <div className="sm:col-span-2">
          <div>
            <label className={labelClass}>Monthly Budget (USD)</label>
            <select className={fieldClass}>
              <option>Select budget range…</option>
              <option>Under $5,000</option>
              <option>$5,000 – $20,000</option>
              <option>$20,000 – $50,000</option>
              <option>$50,000 – $100,000</option>
              <option>$100,000+</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass}>Message *</label>
          <textarea
            className={`${fieldClass} min-h-[132px] resize-y py-4`}
            placeholder="Tell us about your offer, goals, GEOs and any other details that will help us understand your needsвЂ¦"
          />
        </div>

        <div className="flex items-start gap-3 sm:col-span-2">
          <input
            type="checkbox"
            className="mt-0.5 h-6 w-6 shrink-0 rounded-md border border-[var(--b1)] bg-[var(--bg-0)]"
          />
          <label className="text-[12px] leading-5 text-[#8fa0ca]">
            Tell us about your offer, goals, GEOs and any other details that
            will help us understand your needs…
          </label>
        </div>
        <GradientButton className="w-full sm:col-span-2">
          Send Message
        </GradientButton>
      </form>
    </section>
  );
}
