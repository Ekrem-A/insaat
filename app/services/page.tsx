import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Construction project consulting, cost analysis, technical supervision, risk assessment, and contractor evaluation — detailed expertise for every stage of your project.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="py-20 bg-brand-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-8 rounded-full" style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">
              Services
            </span>
            <div className="h-0.5 w-8 rounded-full" style={{ background: "linear-gradient(90deg, #E8791A, #C8941A)" }} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-5">
            Expert Consulting at Every Stage
          </h1>
          <p className="text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Construction projects fail at specific, predictable points. My services are designed to
            provide expert coverage at exactly those moments — protecting your investment with
            the kind of independent oversight that large developers take for granted.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start scroll-mt-24 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-4xl">{service.icon}</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark leading-tight">
                    {service.title}
                  </h2>
                </div>
                <p className="text-brand-gray leading-relaxed mb-6">{service.fullDescription}</p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, #C8941A, #E8791A)" }}
                      >
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-brand-dark leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button href="/contact">Discuss Your Project</Button>
              </div>

              {/* Process */}
              <div className="bg-brand-light rounded-sm p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-yellow mb-6">
                  How It Works
                </h3>
                <div className="space-y-6">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div
                        className="w-8 h-8 rounded-sm flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{ background: "linear-gradient(135deg, #C8941A, #E8791A)" }}
                      >
                        {step.step}
                      </div>
                      <div>
                        <div className="font-semibold text-brand-dark text-sm mb-1">{step.title}</div>
                        <p className="text-xs text-brand-gray leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Start with a free consultation. We'll talk through your project and I'll tell you exactly
            where expert oversight will provide the most value — with no obligation to proceed.
          </p>
          <Button href="/contact" size="lg">Get Free Consultation</Button>
        </div>
      </section>
    </div>
  );
}
