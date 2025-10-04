import { getRequestConfig } from 'next-intl/server';
import type { RequestConfig } from 'next-intl/server';
import routing from './routing';
import { hasLocale } from 'next-intl';

export default getRequestConfig(async ({ requestLocale }): Promise<RequestConfig> => {
 const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    locale: locale,
    messages
  };
});