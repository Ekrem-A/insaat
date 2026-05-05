import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data/services";

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="What I Do"
            title="Services That Protect Your Investment"
            subtitle="From initial feasibility through final handover — expert guidance at every critical stage of your construction project."
          />
          <Link
            href="/services"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-brand-yellow hover:text-brand-orange transition-colors duration-200 group"
          >
            View all services
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className={`group relative p-8 rounded-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                i === 0
                  ? "border-brand-yellow/30 bg-brand-light"
                  : "border-gray-100 bg-white hover:border-brand-yellow/20"
              }`}
            >
              {/* Icon */}
              <div className="text-4xl mb-5">{service.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-yellow transition-colors duration-200">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-brand-gray leading-relaxed mb-6">
                {service.shortDescription}
              </p>

              {/* Arrow link */}
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-yellow">
                Learn more
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>

              {/* Accent corner */}
              {i === 0 && (
                <div
                  className="absolute top-0 right-0 w-16 h-1 rounded-bl"
                  style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
