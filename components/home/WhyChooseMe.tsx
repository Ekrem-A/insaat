import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: "🔍",
    title: "Independent — No Conflicts of Interest",
    description:
      "I'm not a contractor, architect, or material supplier. I work exclusively for you — with zero financial stake in any other decision on your project.",
  },
  {
    icon: "🏛️",
    title: "Licensed Professional Engineer",
    description:
      "Colorado PE License #45821. My assessments and reports carry professional engineering weight — useful for financing, disputes, and regulatory purposes.",
  },
  {
    icon: "📋",
    title: "Process-Driven, Not Reactive",
    description:
      "I use systematic inspection protocols and risk frameworks — not gut feel. Every critical stage has a defined checklist. Nothing falls through the cracks.",
  },
  {
    icon: "💬",
    title: "Plain Language Communication",
    description:
      "You don't need an engineering degree to understand what's happening on your project. I translate technical issues into clear decisions you can act on.",
  },
  {
    icon: "⏱️",
    title: "Responsive When It Matters",
    description:
      "Construction doesn't wait for office hours. When a critical decision or unexpected issue arises on-site, you'll get a prompt, decisive answer.",
  },
  {
    icon: "📈",
    title: "Measurable ROI",
    description:
      "Every client engagement I've completed has saved more than my consulting fee in caught defects, negotiated change orders, or avoided schedule delays.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="py-24" style={{ background: "#F9F5EE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Work With Me"
          title="The Independent Advantage"
          subtitle="Most construction problems are preventable. What makes the difference is having someone in your corner with the right expertise and no competing interests."
          centered
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
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
              Credentials & Memberships
            </span>
            {[
              "Licensed PE — Colorado, Texas, Arizona",
              "AACE International Member",
              "CMAA — Construction Management Association",
              "LEED Accredited Professional",
              "15+ Years Field Experience",
            ].map((item) => (
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
