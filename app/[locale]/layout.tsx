import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Montserrat } from 'next/font/google';
import '../globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
});

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
  });

  return {
    title: t('title'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`bg-carbon text-white ${montserrat.className}`}>
        <div className='page-container'>
          <NextIntlClientProvider>
            <Navbar />
            <main>{children}</main>
            <a
              href='https://api.whatsapp.com/send?phone=48695574028'
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
