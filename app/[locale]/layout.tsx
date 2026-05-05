import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export async function generateStaticParams(): Promise<{ locale: string }[]> {
  return locales.map((locale) => ({ locale: locale as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params as { locale: Locale };
  const isTr = locale === "tr";
  return {
    title: {
      default: isTr
        ? "James Harrington | İnşaat Danışmanlığı Uzmanı"
        : "James Harrington | Construction Consulting Expert",
      template: isTr
        ? "%s | James Harrington İnşaat Danışmanlığı"
        : "%s | James Harrington Construction Consulting",
    },
    description: isTr
      ? "James Harrington, PE tarafından sunulan profesyonel inşaat danışmanlığı hizmetleri. Proje yönetimi, maliyet analizi, teknik denetim ve risk değerlendirmesinde uzman."
      : "Professional construction consulting services by James Harrington, PE. Expert in project management, cost analysis, technical supervision, and risk assessment.",
    openGraph: {
      type: "website",
      locale: isTr ? "tr_TR" : "en_US",
      url: "https://jamesharringtonconsulting.com",
      siteName: isTr
        ? "James Harrington İnşaat Danışmanlığı"
        : "James Harrington Construction Consulting",
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params as { locale: Locale };

  if (!locales.includes(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} nav={dict.nav} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} footer={dict.footer} nav={dict.nav} />
      <WhatsAppButton locale={locale} />
    </>
  );
}
