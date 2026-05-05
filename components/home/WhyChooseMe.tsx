import SectionHeader from "@/components/ui/SectionHeader";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  data: Dictionary["whyChooseMe"];
};

export default function WhyChooseMe({ data }: Props) {
  return (
    <section className="py-24" style={{ background: "#F9F5EE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={data.eyebrow}
          title={data.title}
          subtitle={data.subtitle}
          centered
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-8 rounded-sm border border-gray-100 hover:border-brand-yellow/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3 className="text-base font-bold text-brand-dark mb-3 group-hover:text-brand-yellow transition-colors duration-200">
                {reason.title}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications bar */}
        <div className="mt-14 p-6 bg-white rounded-sm border border-gray-100">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gray">
              {data.credentialsTitle}
            </span>
            {data.credentials.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-brand-dark font-medium">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#C8941A" }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
