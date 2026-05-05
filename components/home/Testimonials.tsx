import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Stories"
          title="What Clients Say"
          subtitle="Real feedback from property owners and developers who chose independent consulting."
          centered
          light
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white/5 border border-white/10 rounded-sm p-8 hover:bg-white/8 hover:border-brand-yellow/30 transition-all duration-300"
            >
              {/* Quote mark */}
              <div
                className="text-5xl font-serif leading-none mb-4 opacity-40"
                style={{ color: "#C8941A" }}
              >
                "
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                {testimonial.content}
              </p>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Author */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {testimonial.role}
                  {testimonial.company && ` · ${testimonial.company}`}
                </div>
                <div className="text-xs text-brand-yellow mt-1">{testimonial.projectType}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
