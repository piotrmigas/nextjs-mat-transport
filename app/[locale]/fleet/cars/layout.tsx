import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: 'fleet',
  });

  return {
    title: t('cars'),
  };
}

export default async function FleetLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
