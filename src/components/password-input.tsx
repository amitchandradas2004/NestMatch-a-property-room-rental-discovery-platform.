import React, { forwardRef, useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  placeholder?: string;
  error?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ id, label, placeholder, error, ...props }, ref) => {
    const [show, setShow] = useState(false);

    return (
      <div className="space-y-1.5 w-full select-none text-left">
        <label htmlFor={id} className="block text-xs font-bold text-foreground/80 dark:text-[#e3e3e3] uppercase tracking-wider">
          {label}
        </label>
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted dark:text-slate-500 pointer-events-none">
            <Lock className="h-4.5 w-4.5" />
          </div>
          <input
            id={id}
            ref={ref}
            type={show ? "text" : "password"}
            placeholder={placeholder}
            className={`w-full py-3 pl-11 pr-12 rounded-xl border ${
              error
                ? "border-rose-500/50 bg-rose-500/5 dark:bg-rose-950/10 focus:ring-rose-500/20 focus:border-rose-500"
                : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131314] focus:ring-primary/20 focus:border-primary"
            } text-foreground dark:text-[#e3e3e3] placeholder-muted focus:outline-none focus:ring-4 transition-all duration-200 text-sm font-semibold`}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted dark:text-slate-500 hover:text-primary transition-colors focus:outline-none"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
          </button>
        </div>
        <div className="min-h-[1.25rem] overflow-hidden">
          {error && (
            <p className="text-xs text-rose-600 dark:text-rose-450 font-bold transition-all animate-in fade-in slide-in-from-top-1">
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;
