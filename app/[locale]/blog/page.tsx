import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { getBlogPosts } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params as { locale: Locale };
  return {
    title: locale === "tr" ? "Blog" : "Blog",
    description:
      locale === "tr"
        ? "İnşaat danışmanlığı, proje yönetimi, maliyet analizi ve kalite denetimi hakkında uzman makaleler — mülk sahipleri ve yatırımcılar için."
        : "Expert articles on construction consulting, project management, cost analysis, and quality supervision — written for property owners and investors.",
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params as { locale: Locale };
  const dict = await getDictionary(locale);
  const posts = getBlogPosts(locale);
  const bp = dict.blogPage;
  const [featured, ...rest] = posts;
  const dateLocale = locale === "tr" ? "tr-TR" : "en-US";

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-brand-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-8 rounded-full" style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">
              {bp.eyebrow}
            </span>
            <div className="h-0.5 w-8 rounded-full" style={{ background: "linear-gradient(90deg, #E8791A, #C8941A)" }} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark leading-tight tracking-tight mb-5">
            {bp.headline}
          </h1>
          <p className="text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">{bp.subtitle}</p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-yellow mb-6">
            {bp.latestArticle}
          </div>
          <Link href={`/${locale}/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div
              className="aspect-video rounded-sm flex items-center justify-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0F172A, #1E293B)" }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(#C8941A 1px, transparent 1px), linear-gradient(90deg, #C8941A 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="text-6xl opacity-40">📋</div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }}
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge label={featured.category} variant="yellow" />
                <span className="text-xs text-brand-gray">{featured.readTime} {bp.minRead}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark leading-tight mb-4 group-hover:text-brand-yellow transition-colors duration-200">
                {featured.title}
              </h2>
              <p className="text-brand-gray leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-brand-dark">{featured.author}</div>
                <time className="text-xs text-brand-gray">
                  {new Date(featured.publishedAt).toLocaleDateString(dateLocale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* More articles */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow={bp.eyebrow} title={bp.moreArticlesTitle} />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/${locale}/blog/${post.slug}`}
                className="group block bg-white rounded-sm border border-gray-100 overflow-hidden hover:border-brand-yellow/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="h-40 flex items-center justify-center relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #0F172A, #1E293B)" }}
                >
                  <div className="text-4xl opacity-30">📖</div>
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: "linear-gradient(90deg, #C8941A, #E8791A)" }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge label={post.category} />
                    <span className="text-xs text-brand-gray">{post.readTime} {bp.min}</span>
                  </div>
                  <h3 className="text-sm font-bold text-brand-dark leading-snug mb-3 group-hover:text-brand-yellow transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-xs text-brand-gray leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <time className="block mt-4 text-xs text-brand-gray/70">
                    {new Date(post.publishedAt).toLocaleDateString(dateLocale, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
