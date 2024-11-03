import Link from 'next/link';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { GetStaticProps } from 'next';
import { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faShuttleVan, faBus } from '@fortawesome/free-solid-svg-icons';

const Fleet = () => {
  const { t } = useTranslation('common');

  const icons = [
    { name: 'cars', text: 'fleet.cars' },
    { name: 'buses8', text: 'fleet.buses8' },
    { name: 'buses21', text: 'fleet.buses21' },
    { name: 'coaches33', text: 'fleet.coaches33' },
    { name: 'coaches55', text: 'fleet.coaches55' },
  ];

  const getIcon = (name: string) => {
    if (name.includes('buses')) return faShuttleVan;
    if (name.includes('coaches')) return faBus;
    return faCar;
  };

  const categories = useMemo(
    () =>
      icons.map(({ text, name }) => (
        <div className='grid sm:grid-rows-2 gap-3 text-center justify-center items-center' key={text}>
          <Trans>
            <p>{t(text)}</p>
          </Trans>
          <Link href={`/fleet/${name}`} aria-label='Fleet'>
            <a>
              <FontAwesomeIcon icon={getIcon(name)} className='fa-3x' />
            </a>
          </Link>
        </div>
      )),
    [t]
  );

  return (
    <Layout title={t`navbar.fleet`}>
      <PageHeader header={t`fleet.header`} />
      <div className='text-black bg-gray-200'>
        <div className='max-w-6xl mx-auto pt-5 pb-14 px-8'>
          <p className='py-5'>{t`fleet.title`}</p>
          <p>{t`fleet.content`}</p>
          <hr className='my-10 border-gray-400' />
          <div className='grid md:grid-cols-5 pb-10 gap-3'>{categories}</div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});

export default Fleet;
