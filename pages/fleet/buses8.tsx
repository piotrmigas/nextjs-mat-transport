import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { GetStaticProps } from 'next';
import VehicleInfo from '../../components/VehicleInfo';
import { data } from '../../data/fleet/buses8';
import { useMemo } from 'react';

const Buses8 = () => {
  const { t } = useTranslation('common');

  const buses8 = useMemo(
    () =>
      data.map(({ header, seats, info, images }) => (
        <VehicleInfo header={t(header)} seats={t(seats)} info={t(info)} key={header} images={images} />
      )),
    [t]
  );

  return (
    <Layout title={t`buses8.header`}>
      <PageHeader header={t`buses8.header`} />
      <div className='text-black bg-gray-200'>
        <div className='max-w-6xl mx-auto pt-5 pb-9 px-8'>{buses8}</div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});

export default Buses8;
