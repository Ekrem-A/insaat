import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { getServices, getProjects, getTestimonials } from "@/lib/data";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseMe from "@/components/home/WhyChooseMe";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params as { locale: Locale };
  const dict = await getDictionary(locale);
  const services = getServices(locale);
  const projects = getProjects(locale);
  const testimonials = getTestimonials(locale);
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <HeroSection hero={dict.hero} locale={locale} />
      <ServicesOverview services={services} labels={dict.servicesOverview} locale={locale} />
      <WhyChooseMe data={dict.whyChooseMe} />
      <FeaturedProjects projects={featured} labels={dict.featuredProjects} locale={locale} />
      <Testimonials testimonials={testimonials} labels={dict.testimonials} />
      <CallToAction cta={dict.cta} locale={locale} />
    </>
  );
}
