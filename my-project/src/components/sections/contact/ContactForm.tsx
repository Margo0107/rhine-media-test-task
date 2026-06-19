import { GradientButton } from "../../ui/Buttons";

const fieldClass =
  "w-full rounded-[var(--r-s)] border border-[var(--b1)] bg-[var(--bg-2)] h-[46px] p-[15px] py-[12px] mt-[8px] text-[14.56px] text-[var(--t1)] outline-none transition placeholder:text-[var(--t3)] appearance-none focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(201,151,59,0.1)]";

const labelClass =
  "text-[12.48px] font-semibold tracking-[0.02em] text-[var(--t2)] leading-[1.65]";

export default function ContactForm() {
  return (
    <section className="w-full rounded-[28px] border border-[var(--b0)] bg-[var(--bg-card)] p-[40px] py-[38px] shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
      <h3 className="mb-[18px] text-[21.6px] leading-[1.65] font-bold text-[var(--t1)]">
        Send Us a Message
      </h3>
      <form>
        {/* row-1 */}
        <div className="mb-[16px] grid grid-cols-2 gap-[16px]">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First Name *
            </label>
            <input
              id="firstName"
              required
              aria-required="true"
              className={fieldClass}
              placeholder="John"
            />
          </div>
          {/* row-2 */}
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last Name *
            </label>
            <input
              id="lastName"
              required
              aria-required="true"
              className={fieldClass}
              placeholder="Smith"
            />
          </div>
        </div>
        {/* row bio 1*/}
        <div className="mb-[16px] grid grid-cols-1 gap-[16px]">
          <div>
            <label htmlFor="emailAddress" className={labelClass}>
              Email Address *
            </label>
            <input
              id="emailAddress"
              required
              aria-required="true"
              className={fieldClass}
              placeholder="john@company.com"
            />
          </div>
        </div>
        {/* row bio 2*/}
        <div className="mb-[16px] grid grid-cols-1 gap-[16px]">
          <div>
            <label htmlFor="companyBrand" className={labelClass}>
              Company / Brand
            </label>
            <input
              id="companyBrand"
              className={fieldClass}
              placeholder="Your company name"
            />
          </div>
        </div>
        {/* row bio 3*/}
        <div className="mb-[16px] grid grid-cols-1 gap-[16px]">
          <div>
            <label htmlFor="telegramSkypeHandle" className={labelClass}>
              Telegram / Skype Handle
            </label>
            <input
              id="telegramSkypeHandle"
              className={fieldClass}
              placeholder="@yourusername"
            />
          </div>
        </div>
        {/* row bio select*/}
        <div className="mb-[16px] grid grid-cols-1 gap-[16px]">
          <div>
            <label htmlFor="vertical" className={labelClass}>
              Vertical / Niche *
            </label>
            <select id="vertical" className={fieldClass}>
              <option selected disabled value="">
                Select a vertical…
              </option>
              <option value="Dating">Dating</option>
              <option value="Nutra / Health & Beauty">
                Nutra / Health & Beauty
              </option>
              <option value="Gambling / Casino">Gambling / Casino</option>
              <option value="iGaming / Betting">iGaming / Betting</option>
              <option value="Sweepstakes">Sweepstakes</option>
              <option value="Adult">Adult</option>
              <option value="Crypto Offers">Crypto Offers</option>
              <option value="Mainstream / Other">Mainstream / Other</option>
            </select>
          </div>
        </div>
        {/* row bio select*/}
        <div className="mb-[16px] grid grid-cols-1 gap-[16px]">
          <div>
            <label htmlFor="monthlyBudget" className={labelClass}>
              Monthly Budget (USD)
            </label>
            <select id="monthlyBudget" className={fieldClass}>
              <option selected disabled value="">
                Select budget range…
              </option>
              <option value="$5,000">Under $5,000</option>
              <option value="$5,000 – $20,000">$5,000 – $20,000</option>
              <option value="$20,000 – $50,000">$20,000 – $50,000</option>
              <option value="$50,000 – $100,000">$50,000 – $100,000</option>
              <option value="$100,000+">$100,000+</option>
            </select>
          </div>
        </div>

        <div className="mb-[20px]">
          <label htmlFor="message" className={labelClass}>
            Message *
          </label>
          <textarea
            id="message"
            required
            aria-required="true"
            className={`${fieldClass} min-h-[132px] resize-y py-4`}
            placeholder="Tell us about your offer, goals, GEOs and any other details that will help us understand your needs…"
          />
        </div>
        {/* privacy content */}
        <div className="mb-[28px] flex items-start gap-3 sm:col-span-2">
          <input
            id="privacy"
            type="checkbox"
            className="checkbox-form checkbox-form-check-mark mt-0.5 h-6 w-6 shrink-0"
          />
          <label
            htmlFor="privacy"
            className="mb-[8px] text-[12.8px] leading-[1.6] font-normal tracking-[0.02em] text-[var(--t2)]"
          >
            I agree to the
            <span className="text-[var(--gold-lt)]">Privacy Policy</span> and
            <span className="text-[var(--gold-lt)]">Terms of Service</span>. I
            consent to Rhine Media processing my data to respond to this
            enquiry.
          </label>
        </div>

        <GradientButton className="w-full sm:col-span-2">
          Send Message
        </GradientButton>
      </form>
    </section>
  );
}
