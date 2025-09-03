import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface PrimaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, children, loading, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "bg-[#6C4CF1] text-white font-semibold rounded px-6 py-2 shadow-sm transition hover:bg-[#5a3ed1] disabled:bg-[#bdb7e3] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#6C4CF1]",
        className
      )}
      disabled={props.disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  )
);

PrimaryButton.displayName = "PrimaryButton";
export { PrimaryButton };
