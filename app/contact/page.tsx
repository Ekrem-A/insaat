import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free construction consulting consultation with James Harrington, PE. Contact by form, phone, email, or WhatsApp.",
};

const contactInfo = [
  {
    icon: "📞",
    label: "Phone",
    value: "(303) 555-0147",
    href: "tel:+13035550147",
    description: "Mon–Fri, 8am–6pm MT",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "james@harringtonconsulting.com",
    href: "mailto:james@harringtonconsulting.com",
    description: "Response within one business day",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "Chat directly",
    href: "https://wa.me/13035550147?text=Hi%20James%2C%20I%27d%20like%20to%20schedule%20a%20free%20consultation.",
    description: "Quick questions welcome",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Denver, CO",
    href: undefined,
    description: "Serving clients nationwide",
  },
];

export default async function ContactPage() {
  const dict = await getDictionary('en');
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 rounded-full" style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">
              Contact
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            Let's Talk About Your Project
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            The first consultation is free and there's no commitment to proceed.
            Fill out the form and I'll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form — takes 3 cols */}
            <div className="lg:col-span-3 bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden">
              <div
                className="px-8 py-5 border-b border-gray-100"
                style={{ background: "linear-gradient(135deg, #F9F5EE, #FDF8F0)" }}
              >
                <h2 className="text-lg font-bold text-brand-dark">Send a Message</h2>
                <p className="text-xs text-brand-gray mt-0.5">
                  Tell me about your project and I'll reach out to schedule a call.
                </p>
              </div>
              <div className="p-8">
                <ContactForm dict={dict.contactPage} />
              </div>
            </div>

            {/* Sidebar — takes 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info cards */}
              <div>
                <h2 className="text-lg font-bold text-brand-dark mb-5">Other Ways to Reach Me</h2>
                <div className="space-y-3">
                  {contactInfo.map((info) => (
                    <div
                      key={info.label}
                      className="bg-white rounded-sm border border-gray-100 p-5 hover:border-brand-yellow/30 transition-colors duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">{info.icon}</div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-brand-gray mb-0.5">
                            {info.label}
                          </div>
                          {info.href ? (
                            <a
                              href={info.href}
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="font-semibold text-brand-dark text-sm hover:text-brand-yellow transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="font-semibold text-brand-dark text-sm">{info.value}</span>
                          )}
                          <div className="text-xs text-brand-gray mt-0.5">{info.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-brand-dark rounded-sm p-6 text-white">
                <h3 className="font-bold text-base mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    { step: "1", text: "I'll review your project details and reach out to schedule a 30-min call." },
                    { step: "2", text: "We discuss your specific situation, goals, and any immediate concerns." },
                    { step: "3", text: "I explain exactly how I'd approach your project and what value I'd deliver." },
                    { step: "4", text: "If it's a good fit, we move forward. No pressure if it isn't." },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-sm flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, #C8941A, #E8791A)" }}
                      >
                        {item.step}
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp quick link */}
              <a
                href="https://wa.me/13035550147?text=Hi%20James%2C%20I%27d%20like%20to%20schedule%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] text-white p-5 rounded-sm hover:bg-[#1DB954] transition-colors duration-200 group"
              >
                <svg className="w-8 h-8 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <div className="font-bold text-sm">Chat on WhatsApp</div>
                  <div className="text-xs text-white/80">Quick questions? Message me directly</div>
                </div>
                <svg
                  className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-200"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
