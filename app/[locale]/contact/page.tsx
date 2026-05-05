import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params as { locale: Locale };
  return {
    title: locale === "tr" ? "İletişim" : "Contact",
    description:
      locale === "tr"
        ? "James Harrington, PE ile ücretsiz inşaat danışmanlığı görüşmesi ayarlayın. Form, telefon, e-posta veya WhatsApp ile ulaşın."
        : "Get a free construction consulting consultation with James Harrington, PE. Contact by form, phone, email, or WhatsApp.",
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params as { locale: Locale };
  const dict = await getDictionary(locale);
  const cp = dict.contactPage;

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 rounded-full" style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">
              {cp.eyebrow}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            {cp.headline}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">{cp.subtitle}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden">
              <div
                className="px-8 py-5 border-b border-gray-100"
                style={{ background: "linear-gradient(135deg, #F9F5EE, #FDF8F0)" }}
              >
                <h2 className="text-lg font-bold text-brand-dark">{cp.formTitle}</h2>
                <p className="text-xs text-brand-gray mt-0.5">{cp.formSubtitle}</p>
              </div>
              <div className="p-8">
                <ContactForm dict={cp} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info cards */}
              <div>
                <h2 className="text-lg font-bold text-brand-dark mb-5">{cp.otherWaysTitle}</h2>
                <div className="space-y-3">
                  {cp.contactInfo.map((info) => (
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
                <h3 className="font-bold text-base mb-4">{cp.expectTitle}</h3>
                <ul className="space-y-3">
                  {cp.expectSteps.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-sm flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, #C8941A, #E8791A)" }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp quick link */}
              <a
                href={cp.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] text-white p-5 rounded-sm hover:bg-[#1DB954] transition-colors duration-200 group"
              >
                <svg className="w-8 h-8 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.093.541 4.06 1.485 5.775L0 24l6.347-1.462A11.932 11.932 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.012-1.368l-.36-.213-3.767.868.936-3.653-.234-.375A9.818 9.818 0 1112 21.818z"/>
                </svg>
                <div>
                  <div className="font-bold text-sm">{cp.whatsappTitle}</div>
                  <div className="text-xs text-white/80 mt-0.5">{cp.whatsappSubtitle}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
