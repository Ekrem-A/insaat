import type { Locale } from './config';

// Dynamic import keeps each dictionary out of the other locale's bundle
const dictionaries = {
  en: () => import('./dictionaries/en').then((m) => m.default),
  tr: () => import('./dictionaries/tr').then((m) => m.default),
} as const;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)['en']>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return (dictionaries[locale] ?? dictionaries.en)();
}
