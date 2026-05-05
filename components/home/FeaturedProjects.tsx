import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { projects } from "@/lib/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Recent Work"
            title="Projects That Speak for Themselves"
            subtitle="Real results from real clients. Every project tells a different story — here are three recent ones."
          />
          <Link
            href="/projects"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-brand-yellow hover:text-brand-orange transition-colors duration-200 group"
          >
            All projects
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <Link
              key={project.id}
              href={`/projects#${project.slug}`}
              className="group block bg-brand-light rounded-sm overflow-hidden border border-gray-100 hover:border-brand-yellow/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image placeholder / Category banner */}
              <div
                className="h-48 flex items-end p-6 relative"
                style={{
                  background:
                    i === 0
                      ? "linear-gradient(135deg, #0F172A, #1E293B)"
                      : i === 1
                      ? "linear-gradient(135deg, #1a2744, #0F172A)"
                      : "linear-gradient(135deg, #1E293B, #2d3f61)",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }}
                />
                <div>
                  <Badge label={project.category} variant="yellow" />
                  <div className="text-white/50 text-xs mt-2">
                    {project.location} · {project.year}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-base font-bold text-brand-dark mb-3 group-hover:text-brand-yellow transition-colors duration-200 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key result */}
                <div className="border-l-2 border-brand-yellow pl-3 mb-4">
                  <p className="text-xs font-medium text-brand-dark leading-relaxed">
                    {project.results[0]}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-brand-gray">
                  <span className="font-semibold text-brand-dark">{project.budget}</span>
                  <span>{project.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
