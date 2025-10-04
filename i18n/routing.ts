import { defineRouting } from 'next-intl/routing';

const routing = defineRouting({
  locales: ['ar', 'en'],
  defaultLocale: 'en'
});

export default routing;