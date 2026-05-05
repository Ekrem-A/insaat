import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "15+ years of construction engineering experience at your service. Learn about James Harrington's background, certifications, and approach to independent construction consulting.",
};

const timeline = [
  {
    year: "2011–2014",
    role: "Site Engineer",
    company: "Meridian Construction Group",
    description:
      "Managed on-site engineering for mid-scale commercial and residential projects across Colorado and Wyoming. Responsible for structural inspection, subcontractor coordination, and quality control documentation.",
  },
  {
    year: "2014–2017",
    role: "Project Engineer",
    company: "Apex Engineering Solutions",
    description:
      "Led technical engineering on public infrastructure and mixed-use development projects with budgets up to $15M. Developed expertise in cost management, scheduling, and risk assessment.",
  },
  {
    year: "2017–2020",
    role: "Senior Project Manager",
    company: "Harrington & Associates",
    description:
      "Took on full project management responsibility for complex, multi-million dollar construction projects. Developed independent consulting methodology and began serving private clients alongside firm work.",
  },
  {
    year: "2020–Present",
    role: "Independent Construction Consultant",
    company: "James Harrington Consulting",
    description:
      "Launched independent practice serving property owners, investors, and companies who need expert, unbiased construction consulting. To date, managed and supervised over $120M in project value.",
  },
];

const certifications = [
  { label: "Licensed Professional Engineer (PE)", detail: "Colorado #45821 · Texas · Arizona" },
  { label: "LEED Accredited Professional", detail: "Green Building Certification Institute" },
  { label: "AACE International Member", detail: "Certified Cost Professional candidate" },
  { label: "Construction Management Association (CMAA)", detail: "Active member since 2015" },
  { label: "OSHA 30-Hour Construction", detail: "Current certification" },
  { label: "BS Civil Engineering", detail: "University of Colorado Boulder, 2011" },
];

export default function AboutPage() {
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
                  About James
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-6">
                The Consultant in Your Corner
              </h1>
              <p className="text-lg text-brand-gray leading-relaxed mb-6">
                I started my career building things — inspecting concrete pours, coordinating subcontractors,
                and solving the thousand small problems that arise on any construction site.
                After 15 years on projects ranging from $500K custom homes to $15M+ commercial
                developments, I realized the people who needed expert construction advice most were the
                ones who didn't have a building department behind them.
              </p>
              <p className="text-lg text-brand-gray leading-relaxed mb-8">
                Property owners, private investors, and small companies were making multi-million dollar
                decisions without anyone in their corner who truly understood construction. That's why
                I left traditional practice to offer independent consulting — bringing the same
                expertise that large developers take for granted to clients who deserve it just as much.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Start a Conversation
                </Button>
                <Button href="/projects" variant="outline" size="lg">
                  See My Work
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
                  <div className="text-sm">James Harrington, PE</div>
                  <div className="text-xs opacity-60 mt-1">Construction Consultant</div>
                </div>
                {/* Accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }}
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-sm border border-gray-100 shadow-xl p-5">
                <div className="text-3xl font-bold text-brand-dark">15+</div>
                <div className="text-xs text-brand-gray mt-0.5">Years of field experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="My Approach"
            title="How I Work"
            subtitle="Three principles that guide every client engagement."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Precision Over Speed",
                body: "I'd rather take an extra hour to be certain than give you a quick answer that turns out to be wrong. Construction decisions are often irreversible — they deserve careful analysis.",
              },
              {
                icon: "🤝",
                title: "Radical Transparency",
                body: "You'll always know exactly what I found, what it means, and what I recommend. If I can't improve your project outcome, I'll tell you that too — even if it means a shorter engagement.",
              },
              {
                icon: "📐",
                title: "Systems, Not Intuition",
                body: "Good consulting is repeatable. I use structured inspection protocols, risk frameworks, and cost-estimation methodologies — not gut feel — so nothing important is left to chance.",
              },
            ].map((v) => (
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
            eyebrow="Career Path"
            title="Experience That Matters"
            subtitle="Over 15 years moving from hands-on site engineering to independent consulting — the full spectrum of construction practice."
          />

          <div className="mt-14 relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block"
              style={{ background: "linear-gradient(to bottom, #C8941A, transparent)" }}
            />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="md:pl-20 relative">
                  {/* Dot */}
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
            eyebrow="Credentials"
            title="Education & Certifications"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
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
          <h2 className="text-2xl font-bold text-white mb-4">Let's Talk About Your Project</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            The first consultation is always free. No commitment, no pressure — just an honest
            conversation about your project and how I can help.
          </p>
          <Button href="/contact" size="lg">
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
