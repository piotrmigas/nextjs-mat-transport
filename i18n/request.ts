import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { locale as getRootLocale } from 'next/root-params';
import { routing } from './routing';

export default getRequestConfig(async () => {
  const requested = await getRootLocale();
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
