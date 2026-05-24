import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: 'navbar',
  });

  return {
    title: t('about'),
  };
}

export default async function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
