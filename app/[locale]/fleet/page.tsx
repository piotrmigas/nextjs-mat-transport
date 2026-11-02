import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faShuttleVan, faBus } from '@fortawesome/free-solid-svg-icons';
import { getPageMetadata } from '@/helper';
import { locale } from 'next/root-params';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(await locale(), 'fleet.home');
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
      <div className='text-gray-900 bg-gray-200'>
        <div className='max-w-4xl mx-auto pt-3 pb-10'>
          <p className='py-5 font-medium'>{t('title')}</p>
          <p>{t('content')}</p>
          <ul className='list-disc list-outside pl-5 pt-5 leading-8'>
            <li>{t('li1')}</li>
            <li>{t('li2')}</li>
            <li>{t('li3')}</li>
            <li>{t('li4')}</li>
          </ul>
          <hr className='my-10 border-gray-400' />
          <div className='grid md:grid-cols-5 pb-10 gap-3'>
            {icons.map(({ text, name }) => (
              <div className='grid sm:grid-rows-2 gap-3 text-center justify-center items-center' key={text}>
                <p className='whitespace-pre-line'>{t(text)}</p>
                <Link href={`/fleet/${name}`} aria-label='Fleet'>
                  <FontAwesomeIcon icon={getIcon(name)} className='fa-4x' />
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
