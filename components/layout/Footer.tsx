import Link from "next/link";

const services = [
  { label: "Project Consulting", href: "/services#project-consulting" },
  { label: "Cost Analysis", href: "/services#cost-analysis" },
  { label: "Technical Supervision", href: "/services#technical-supervision" },
  { label: "Risk Assessment", href: "/services#risk-assessment" },
  { label: "Contractor Evaluation", href: "/services#contractor-evaluation" },
];

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
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
              Independent construction consulting for property owners, investors, and developers.
              15+ years of experience ensuring projects are built on time, on budget, and to standard.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Denver, CO — serving clients nationwide</span>
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
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-brand-yellow transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
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
                href="/contact"
                className="inline-block px-5 py-2.5 rounded-sm text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #C8941A, #E8791A)" }}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} James Harrington Construction Consulting. All rights reserved.</p>
          <p>Licensed Professional Engineer · Colorado PE License #45821</p>
        </div>
      </div>
    </footer>
  );
}
