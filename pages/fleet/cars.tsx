import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { GetStaticProps } from 'next';
import { data } from '../../data/fleet/cars';
import VehicleInfo from '../../components/VehicleInfo';
import { useMemo } from 'react';

const Cars = () => {
  const { t } = useTranslation('common');

  const cars = useMemo(
    () =>
      data.map(({ header, seats, info, images }) => (
        <VehicleInfo header={t(header)} seats={t(seats)} info={t(info)} key={header} images={images} />
      )),
    [t]
  );

  return (
    <Layout title={t`cars.header`}>
      <PageHeader header={t`cars.header`} />
      <div className='bg-gray-200 text-black'>
        <div className='max-w-6xl mx-auto pt-5 pb-9 px-8'>{cars}</div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});

export default Cars;
