import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function GradientButton({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer inline-flex items-center justify-center rounded-full [background-image:var(--g-gold)] px-8 py-[14.3px] text-[14px] font-semibold tracking-[0.2px] whitespace-nowrap text-slate-950 shadow-[0_24px_80px_-40px_rgba(251,146,60,0.85)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_15px_54px_-7px_rgba(201,151,59,0.55)] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function OutlineButton({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex cursor-pointer items-center justify-center rounded-full border border-slate-800/70 px-8 py-[15px] text-[14px] font-semibold tracking-[0.01em] whitespace-nowrap text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--border-g)] hover:bg-[var(--gold-glow)]/10 hover:text-[var(--gold-lt)] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
