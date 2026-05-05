import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params as { locale: Locale };
  return {
    title: locale === "tr" ? "Hakkımda" : "About",
    description:
      locale === "tr"
        ? "15+ yıllık inşaat mühendisliği deneyimi sizin hizmetinizde. James Harrington'ın geçmişi, sertifikaları ve bağımsız inşaat danışmanlığına yaklaşımı."
        : "15+ years of construction engineering experience at your service. Learn about James Harrington's background, certifications, and approach to independent construction consulting.",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params as { locale: Locale };
  const dict = await getDictionary(locale);
  const a = dict.about;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-brand-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-8 rounded-full" style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }} />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">
                  {a.eyebrow}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-6">
                {a.headline}
              </h1>
              <p className="text-lg text-brand-gray leading-relaxed mb-6">{a.p1}</p>
              <p className="text-lg text-brand-gray leading-relaxed mb-8">{a.p2}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={`/${locale}/contact`} size="lg">
                  {a.ctaPrimary}
                </Button>
                <Button href={`/${locale}/projects`} variant="outline" size="lg">
                  {a.ctaSecondary}
                </Button>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="relative">
              <div
                className="aspect-4/5 rounded-sm flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0F172A, #1E293B)" }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(#C8941A 1px, transparent 1px), linear-gradient(90deg, #C8941A 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="text-center text-white/40 p-8">
                  <div className="text-6xl mb-4">👷</div>
                  <div className="text-sm">{a.photoCaption}</div>
                  <div className="text-xs opacity-60 mt-1">{a.photoSubCaption}</div>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-sm border border-gray-100 shadow-xl p-5">
                <div className="text-3xl font-bold text-brand-dark">15+</div>
                <div className="text-xs text-brand-gray mt-0.5">{a.statLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={a.approachEyebrow}
            title={a.approachTitle}
            subtitle={a.approachSubtitle}
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {a.values.map((v) => (
              <div key={v.title} className="p-8 rounded-sm border border-gray-100 bg-brand-light">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-base font-bold text-brand-dark mb-3">{v.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={a.timelineEyebrow}
            title={a.timelineTitle}
            subtitle={a.timelineSubtitle}
          />
          <div className="mt-14 relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block"
              style={{ background: "linear-gradient(to bottom, #C8941A, transparent)" }}
            />
            <div className="space-y-8">
              {a.timeline.map((item, i) => (
                <div key={i} className="md:pl-20 relative">
                  <div
                    className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 border-white hidden md:flex items-center justify-center"
                    style={{ background: "#C8941A" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <div className="bg-white rounded-sm border border-gray-100 p-7 hover:border-brand-yellow/30 transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-brand-dark text-base">{item.role}</h3>
                        <div className="text-sm text-brand-yellow font-medium">{item.company}</div>
                      </div>
                      <span className="text-xs font-semibold text-brand-gray bg-brand-muted px-3 py-1 rounded self-start sm:self-center">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm text-brand-gray leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={a.certificationsEyebrow}
            title={a.certificationsTitle}
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {a.certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex items-start gap-4 p-6 rounded-sm border border-gray-100 hover:border-brand-yellow/30 hover:bg-brand-light transition-all duration-200"
              >
                <div
                  className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "linear-gradient(135deg, #C8941A22, #E8791A22)" }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: "#C8941A" }} />
                </div>
                <div>
                  <div className="font-semibold text-brand-dark text-sm">{cert.label}</div>
                  <div className="text-xs text-brand-gray mt-1">{cert.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">{a.ctaHeadline}</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">{a.ctaBody}</p>
          <Button href={`/${locale}/contact`} size="lg">
            {a.ctaButton}
          </Button>
        </div>
      </section>
    </div>
  );
}
