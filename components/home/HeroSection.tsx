import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
        }}
      />

      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#C8941A 1px, transparent 1px), linear-gradient(90deg, #C8941A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at top right, #C8941A 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div
              className="h-px w-12"
              style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }}
            />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">
              Licensed Professional Engineer
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 animate-fade-in animate-delay-100">
            Professional Construction Consulting{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #C8941A, #E8791A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              You Can Trust
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl animate-fade-in animate-delay-200">
            I help property owners and investors build with confidence — catching
            problems before they become expensive, choosing the right
            contractors, and keeping projects on track from the first consultation
            to final handover.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
            <Button href="/contact" size="lg">
              Get Free Consultation
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              View Projects
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap gap-6 animate-fade-in animate-delay-400">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "200+", label: "Projects Completed" },
              { value: "$120M+", label: "Projects Managed" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div
                  className="w-px h-8 opacity-30"
                  style={{ background: "#C8941A" }}
                />
                <div>
                  <div className="text-xl font-bold text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white/5 to-transparent" />
    </section>
  );
}
