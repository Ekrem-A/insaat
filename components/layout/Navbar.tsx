"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";

type NavProps = {
  locale: Locale;
  nav: Dictionary["nav"];
};

export default function Navbar({ locale, nav }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: nav.home },
    { href: `/${locale}/about`, label: nav.about },
    { href: `/${locale}/services`, label: nav.services },
    { href: `/${locale}/projects`, label: nav.projects },
    { href: `/${locale}/blog`, label: nav.blog },
    { href: `/${locale}/contact`, label: nav.contact },
  ];

  const otherLocale: Locale = locale === "en" ? "tr" : "en";
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-sm flex items-center justify-center font-bold text-white text-sm"
              style={{ background: "linear-gradient(135deg, #C8941A, #E8791A)" }}>
              JH
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-brand-dark text-sm leading-tight">James Harrington</div>
              <div className="text-xs text-brand-gray leading-tight">Construction Consulting</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-dark hover:text-brand-yellow transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* CTA + Lang switcher + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <Link
              href={otherPath}
              className="hidden lg:inline-flex items-center px-3 py-1.5 rounded-sm text-xs font-semibold border border-brand-yellow/40 text-brand-yellow hover:bg-brand-yellow hover:text-white transition-all duration-200"
            >
              {otherLocale.toUpperCase()}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-sm text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #C8941A, #E8791A)" }}
            >
              {nav.cta}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-brand-dark transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-brand-dark transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-brand-dark transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-sm text-sm font-medium text-brand-dark hover:bg-brand-light hover:text-brand-yellow transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex gap-2">
            <Link
              href={`/${locale}/contact`}
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center px-5 py-3 rounded-sm text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #C8941A, #E8791A)" }}
            >
              {nav.cta}
            </Link>
            <Link
              href={otherPath}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-sm text-sm font-semibold border border-brand-yellow/40 text-brand-yellow hover:bg-brand-yellow hover:text-white transition-all duration-200"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
