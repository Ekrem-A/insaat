import Button from "@/components/ui/Button";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  cta: Dictionary["cta"];
  locale: string;
};

export default function CallToAction({ cta, locale }: Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-sm px-8 sm:px-12 py-14 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(#C8941A 1px, transparent 1px), linear-gradient(90deg, #C8941A 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 opacity-20 blur-3xl"
            style={{ background: "#C8941A" }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="h-px w-10 opacity-60"
                style={{ background: "linear-gradient(90deg, transparent, #C8941A)" }}
              />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">
                {cta.eyebrow}
              </span>
              <div
                className="h-px w-10 opacity-60"
                style={{ background: "linear-gradient(90deg, #C8941A, transparent)" }}
              />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              {cta.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              {cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href={`/${locale}/contact`} size="lg">
                {cta.primary}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <a
                href="tel:+13035550147"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {cta.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
