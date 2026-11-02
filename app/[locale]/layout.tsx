import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Montserrat } from 'next/font/google';
import { locale } from 'next/root-params';
import '../globals.css';
import { getPageMetadata } from '@/helper';
import { siteConfig } from '@/site-config';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
});

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(await locale(), 'title', '');
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentLocale = await locale();

  return (
    <html lang={currentLocale}>
      <body className={`bg-carbon text-white ${montserrat.className}`}>
        <div className='page-container'>
          <NextIntlClientProvider>
            <Navbar />
            <main>{children}</main>
            <a
              href={siteConfig.whatsappLink}
              className='whatsapp-button'
              target='_blank'
              rel='noreferrer'
              aria-label='Whatsapp'
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
