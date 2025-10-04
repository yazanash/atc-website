import createMiddleware from 'next-intl/middleware';
import routing from './i18n/routing';

export default createMiddleware(routing);

export const config = {
   matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)']
};

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// const locales = ['ar', 'en'];
// const defaultLocale = 'ar';

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;

//   if (pathname === '/') {
//     return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!_next|favicon.ico).*)'],
// };