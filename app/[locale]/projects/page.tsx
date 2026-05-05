import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { getProjects } from "@/lib/data";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params as { locale: Locale };
  return {
    title: locale === "tr" ? "Projeler" : "Projects",
    description:
      locale === "tr"
        ? "Geçmiş inşaat danışmanlığı projeleri — konut, ticari, endüstriyel ve karma kullanım. Gerçek sonuçlar, gerçek rakamlar."
        : "Past construction consulting projects — residential, commercial, industrial, and mixed-use. Real results, real numbers.",
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params as { locale: Locale };
  const dict = await getDictionary(locale);
  const projects = getProjects(locale);
  const pp = dict.projectsPage;

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 rounded-full" style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">{pp.eyebrow}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            {pp.headline}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">{pp.subtitle}</p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {pp.stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-brand-yellow pl-4">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={pp.caseStudiesEyebrow}
            title={pp.caseStudiesTitle}
            subtitle={pp.caseStudiesSubtitle}
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                id={project.slug}
                className="bg-brand-light rounded-sm border border-gray-100 overflow-hidden hover:border-brand-yellow/30 hover:shadow-xl transition-all duration-300 group scroll-mt-24"
              >
                <div
                  className="h-10 flex items-center px-5 gap-3"
                  style={{ background: "linear-gradient(90deg, #0F172A, #1E293B)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C8941A" }} />
                  <span className="text-white/70 text-xs font-medium">{project.category}</span>
                  <span className="text-white/40 text-xs ml-auto">{project.year}</span>
                </div>

                <div className="p-7">
                  <h3 className="text-base font-bold text-brand-dark mb-1 group-hover:text-brand-yellow transition-colors duration-200 leading-snug">
                    {project.title}
                  </h3>
                  <div className="text-xs text-brand-gray mb-4">{project.location}</div>
                  <p className="text-sm text-brand-gray leading-relaxed mb-6">{project.description}</p>

                  <div className="mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-brand-yellow mb-2">
                      {pp.keyResults}
                    </div>
                    <ul className="space-y-1.5">
                      {project.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-xs text-brand-dark leading-relaxed">
                          <span className="mt-0.5 text-brand-yellow shrink-0">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-xs text-brand-gray">{pp.budget}</div>
                      <div className="text-sm font-bold text-brand-dark">{project.budget}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-brand-gray">{pp.duration}</div>
                      <div className="text-sm font-medium text-brand-dark">{project.duration}</div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-light text-center border-t border-gray-100">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">{pp.ctaTitle}</h2>
          <p className="text-brand-gray text-sm leading-relaxed mb-8">{pp.ctaBody}</p>
          <Button href={`/${locale}/contact`} size="lg">{pp.ctaButton}</Button>
        </div>
      </section>
    </div>
  );
}
