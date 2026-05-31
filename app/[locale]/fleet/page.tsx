import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faShuttleVan, faBus } from '@fortawesome/free-solid-svg-icons';
import { getPageMetadata } from '@/helper';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, 'fleet.home');
}

const Fleet = () => {
  const t = useTranslations('fleet');

  const icons = [
    { name: 'cars', text: 'cars' },
    { name: 'buses8', text: 'buses8' },
    { name: 'buses21', text: 'buses21' },
    { name: 'coaches33', text: 'coaches33' },
    { name: 'coaches55', text: 'coaches55' },
  ];

  const getIcon = (name: string) => {
    if (name.includes('buses')) return faShuttleVan;
    if (name.includes('coaches')) return faBus;
    return faCar;
  };

  return (
    <>
      <PageHeader header={t('header')} />
      <div className='text-black bg-gray-200'>
        <div className='max-w-6xl mx-auto pt-5 pb-14 px-8'>
          <p className='py-5 font-medium'>{t('title')}</p>
          <p>{t('content')}</p>
          <hr className='my-10 border-gray-400' />
          <div className='grid md:grid-cols-5 pb-10 gap-3'>
            {icons.map(({ text, name }) => (
              <div className='grid sm:grid-rows-2 gap-3 text-center justify-center items-center' key={text}>
                <p className='whitespace-pre-line'>{t(text)}</p>
                <Link href={`/fleet/${name}`} aria-label='Fleet'>
                  <FontAwesomeIcon icon={getIcon(name)} className='fa-3x' />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fleet;
