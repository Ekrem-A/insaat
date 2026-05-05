import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { getBlogPosts } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams(): Promise<{ locale: string; slug: string }[]> {
  const { blogPosts: enPosts } = await import("@/lib/data/blog-posts");
  const { blogPosts: trPosts } = await import("@/lib/data/tr/blog-posts");
  return [
    ...enPosts.map((p) => ({ locale: "en" as string, slug: p.slug })),
    ...trPosts.map((p) => ({ locale: "tr" as string, slug: p.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params as { locale: Locale; slug: string };
  const posts = getBlogPosts(locale);
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params as { locale: Locale; slug: string };
  const dict = await getDictionary(locale);
  const posts = getBlogPosts(locale);
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);
  const bpd = dict.blogPost;
  const dateLocale = locale === "tr" ? "tr-TR" : "en-US";

  const renderContent = (content: string) => {
    return content
      .split("\n\n")
      .map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="text-xl font-bold text-brand-dark mt-10 mb-4">
              {trimmed.replace("## ", "")}
            </h2>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={i} className="text-base font-bold text-brand-dark mt-8 mb-3">
              {trimmed.replace("### ", "")}
            </h3>
          );
        }
        if (trimmed.startsWith("---")) {
          return <hr key={i} className="border-gray-200 my-8" />;
        }
        if (trimmed.startsWith("| ")) {
          const rows = trimmed.split("\n").filter((r) => !r.match(/^[\|-]+$/));
          const [header, ...bodyRows] = rows;
          const cells = (row: string) =>
            row.split("|").filter(Boolean).map((c) => c.trim());
          return (
            <div key={i} className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    {cells(header).map((c, j) => (
                      <th key={j} className="px-4 py-2 text-left font-semibold text-xs">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyRows.map((row, j) => (
                    <tr key={j} className={j % 2 === 0 ? "bg-brand-light" : "bg-white"}>
                      {cells(row).map((c, k) => (
                        <td key={k} className="px-4 py-2 text-brand-gray text-xs">{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        if (trimmed.startsWith("- ") || trimmed.match(/^🚩/m)) {
          const lines = trimmed.split("\n").filter(Boolean);
          return (
            <ul key={i} className="space-y-2 my-4 pl-2">
              {lines.map((line, j) => {
                const html = line
                  .replace(/^[-•]\s*/, "")
                  .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*(.+?)\*/g, "<em>$1</em>");
                return (
                  <li key={j} className="flex items-start gap-2 text-sm text-brand-gray leading-relaxed">
                    <span className="mt-1 text-brand-yellow shrink-0">•</span>
                    <span dangerouslySetInnerHTML={{ __html: html }} />
                  </li>
                );
              })}
            </ul>
          );
        }

        const html = trimmed
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.+?)\*/g, "<em>$1</em>")
          .replace(
            /\[(.+?)\]\((.+?)\)/g,
            `<a href="$2" class="text-brand-yellow hover:text-brand-orange underline">$1</a>`
          );

        return (
          <p
            key={i}
            className="text-brand-gray leading-relaxed"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      })
      .filter(Boolean);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-brand-light border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-xs text-brand-gray hover:text-brand-yellow transition-colors mb-6"
          >
            {bpd.backToBlog}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Badge label={post.category} variant="yellow" />
            <span className="text-xs text-brand-gray">{post.readTime} {bpd.minRead}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark leading-tight tracking-tight mb-5">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="font-medium text-brand-dark">{post.author}</span>
            <span className="text-brand-gray/50">·</span>
            <time className="text-brand-gray">
              {new Date(post.publishedAt).toLocaleDateString(dateLocale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose-custom space-y-5">{renderContent(post.content)}</div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </div>

          {/* Author box */}
          <div className="mt-10 p-6 bg-brand-light rounded-sm border border-gray-100 flex items-start gap-5">
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center text-white font-bold text-sm shrink-0"
              style={{ background: "linear-gradient(135deg, #C8941A, #E8791A)" }}
            >
              JH
            </div>
            <div>
              <div className="font-bold text-brand-dark text-sm">{post.author}</div>
              <div className="text-xs text-brand-gray mt-1 leading-relaxed">
                {bpd.authorDescription}
              </div>
              <Link
                href={`/${locale}/about`}
                className="text-xs text-brand-yellow hover:text-brand-orange mt-2 inline-block transition-colors"
              >
                {bpd.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-brand-light border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-yellow mb-8">
              {bpd.relatedTitle}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/${locale}/blog/${p.slug}`}
                  className="group block bg-white rounded-sm border border-gray-100 p-6 hover:border-brand-yellow/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Badge label={p.category} />
                    <span className="text-xs text-brand-gray">{p.readTime} {dict.blogPage.min}</span>
                  </div>
                  <h3 className="font-bold text-brand-dark text-sm leading-snug group-hover:text-brand-yellow transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-brand-gray leading-relaxed mt-2 line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 bg-brand-dark text-center">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-xl font-bold text-white mb-3">{bpd.ctaTitle}</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">{bpd.ctaBody}</p>
          <Button href={`/${locale}/contact`} size="lg">{bpd.ctaButton}</Button>
        </div>
      </section>
    </div>
  );
}
