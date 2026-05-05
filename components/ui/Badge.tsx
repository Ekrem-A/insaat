interface BadgeProps {
  label: string;
  variant?: "default" | "yellow" | "dark";
}

export default function Badge({ label, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-brand-muted text-brand-gray",
    yellow: "bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20",
    dark: "bg-brand-dark text-white",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
