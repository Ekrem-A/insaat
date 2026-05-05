import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  footer: Dictionary["footer"];
  nav: Dictionary["nav"];
};

export default function Footer({ locale, footer, nav }: FooterProps) {
  const serviceIds = [
    "project-consulting",
    "cost-analysis",
    "technical-supervision",
    "risk-assessment",
    "contractor-evaluation",
  ];

  const quickLinks = [
    { label: nav.about, href: `/${locale}/about` },
    { label: nav.projects, href: `/${locale}/projects` },
    { label: nav.blog, href: `/${locale}/blog` },
    { label: nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center font-bold text-white text-sm shrink-0"
                style={{ background: "linear-gradient(135deg, #C8941A, #E8791A)" }}
              >
                JH
              </div>
              <div>
                <div className="font-bold text-white text-base leading-tight">James Harrington, PE</div>
                <div className="text-sm text-gray-400 leading-tight">Construction Consulting</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              {footer.description}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>{footer.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+13035550147" className="hover:text-brand-yellow transition-colors">
                  (303) 555-0147
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:james@harringtonconsulting.com" className="hover:text-brand-yellow transition-colors">
                  james@harringtonconsulting.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {footer.servicesTitle}
            </h3>
            <ul className="space-y-2">
              {serviceIds.map((id) => (
                <li key={id}>
                  <Link
                    href={`/${locale}/services#${id}`}
                    className="text-sm text-gray-400 hover:text-brand-yellow transition-colors duration-200"
                  >
                    {id.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {footer.companyTitle}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-brand-yellow transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href={`/${locale}/contact`}
                className="inline-block px-5 py-2.5 rounded-sm text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #C8941A, #E8791A)" }}
              >
                {nav.cta}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {footer.copyright}</p>
          <p>{footer.license}</p>
        </div>
      </div>
    </footer>
  );
}
