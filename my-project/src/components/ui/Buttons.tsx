import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function GradientButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-full bg-gradient-to-r from-amber-300 to-amber-200 py-3 p-8 text-base font-medium text-slate-950 shadow-[0_24px_80px_-40px_rgba(251,146,60,0.85)] transition hover:opacity-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function OutlineButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-full border border-slate-800/70 py-4 p-7 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
