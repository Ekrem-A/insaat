import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n/config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Pass through: already has locale prefix
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (hasLocale) return NextResponse.next();

  // Pass through: Next.js internals, static files, API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Detect locale from cookie, then Accept-Language header
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const preferredLocale =
    cookieLocale && (locales as readonly string[]).includes(cookieLocale)
      ? cookieLocale
      : detectFromHeader(request.headers.get('accept-language'));

  const locale = preferredLocale || defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

function detectFromHeader(header: string | null): string | undefined {
  if (!header) return undefined;
  for (const part of header.split(',')) {
    const lang = part.split(';')[0].trim().split('-')[0].toLowerCase();
    if ((locales as readonly string[]).includes(lang)) return lang;
  }
  return undefined;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
