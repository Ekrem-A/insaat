import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const baseClasses =
  "inline-flex items-center justify-center font-semibold rounded-sm transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-yellow";

const variantClasses = {
  primary:
    "text-white shadow-md hover:shadow-lg focus-visible:ring-brand-yellow",
  secondary:
    "bg-brand-dark text-white hover:bg-brand-dark-2 shadow-md hover:shadow-lg",
  outline:
    "border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-white",
};

const sizeClasses = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-sm px-6 py-3 gap-2",
  lg: "text-base px-8 py-4 gap-2",
};

const primaryStyle = { background: "linear-gradient(135deg, #C8941A, #E8791A)" };

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  const style = variant === "primary" ? primaryStyle : undefined;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        style={style}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={style}
    >
      {children}
    </button>
  );
}
