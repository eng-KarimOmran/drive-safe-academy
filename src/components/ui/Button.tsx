import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary:
      "border border-primary bg-transparent hover:bg-primary hover:text-white",
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-lg px-6 h-9 text-sm font-medium transition-all duration-300 active:scale-95",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
