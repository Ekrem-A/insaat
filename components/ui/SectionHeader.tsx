interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3" style={centered ? { justifyContent: "center" } : {}}>
          <div
            className="h-0.5 w-8 rounded-full"
            style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }}
          />
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-brand-gray"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
