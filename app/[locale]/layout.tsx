import type { Metadata } from "next";
import { Poppins,Cairo  } from "next/font/google";
import "./../globals.css";
import ResponsiveNavBar from "../components/NavBar/ResponsiveNavBar";
import Footer from "../components/Footer/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const cairo = Cairo({
  subsets: ['arabic'],
  weight: [ "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-cairo'
});

export const metadata: Metadata = {
  title: "Website App",
  description: "Trioverse",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; 
   const messages = await getMessages();
  return (
    <html lang={locale} dir={locale=="ar"? "rtl":"ltr"}>
      <body className={`${cairo.className} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
        <ResponsiveNavBar dir={locale=="ar"? "rtl":"ltr"}></ResponsiveNavBar>
        {children}
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
