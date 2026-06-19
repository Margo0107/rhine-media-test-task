import { GradientButton } from "../../ui/Buttons";

const fieldClass =
  "w-full rounded-[var(--r-s)] border border-[var(--b1)] bg-[var(--bg-2)] h-[46px] p-[15px] py-[12px] mt-[8px] text-[14.56px] text-[var(--t1)] outline-none transition placeholder:text-[var(--t3)] focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(201,151,59,0.1)]";

const labelClass =
  "text-[12.48px] font-semibold tracking-[0.02em] text-[var(--t2)] leading-[1.65]";

export default function ContactForm() {
  return (
    <section className="w-full rounded-[28px] border border-[var(--b0)] bg-[var(--bg-card)] p-[40px] py-[38px] shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
      <h3 className="mb-[18px] text-[21.6px] leading-[1.65] font-bold text-[var(--t1)]">
        Send Us a Message
      </h3>
      <form className="">
        {/* row-1 */}
        <div className="mb-[16px] grid grid-cols-2 gap-[16px]">
          <div>
            <div>
              <label className={labelClass}>First Name *</label>
              <input className={fieldClass} placeholder="John" />
            </div>
          </div>
          {/* row-2 */}
          <div>
            <div>
              <label className={labelClass}>Last Name *</label>
              <input className={fieldClass} placeholder="Smith" />
            </div>
          </div>
        </div>
        {/* row bio 1*/}
        <div className="mb-[16px] grid grid-cols-1 gap-[16px]">
          <div>
            <label className={labelClass}>Email Address *</label>
            <input className={fieldClass} placeholder="john@company.com" />
          </div>
        </div>
        {/* row bio 2*/}
        <div className="mb-[16px] grid grid-cols-1 gap-[16px]">
          <div>
            <label className={labelClass}>Company / Brand</label>
            <input className={fieldClass} placeholder="Your company name" />
          </div>
        </div>
        {/* row bio 3*/}
        <div className="mb-[16px] grid grid-cols-1 gap-[16px]">
          <div>
            <label className={labelClass}>Telegram / Skype Handle</label>
            <input className={fieldClass} placeholder="@yourusername" />
          </div>
        </div>
        {/* row bio select*/}
        <div className="mb-[16px] grid grid-cols-1 gap-[16px]">
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
            placeholder="Tell us about your offer, goals, GEOs and any other details that will help us understand your needs…"
          />
        </div>

        <div className="flex items-start gap-3 sm:col-span-2">
          <input
            type="checkbox"
            className="mt-0.5 h-6 w-6 shrink-0 rounded-md border border-[var(--b1)] bg-[var(--bg-0)]"
          />
          <label className="text-[12px] leading-5 text-[#8fa0ca]">
            I agree to the Privacy Policy and Terms of Service. I consent to
            Rhine Media processing my data to respond to this enquiry.
          </label>
        </div>
        <GradientButton className="w-full sm:col-span-2">
          Send Message
        </GradientButton>
      </form>
    </section>
  );
}
