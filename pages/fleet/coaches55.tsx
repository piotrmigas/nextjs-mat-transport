import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { GetStaticProps } from 'next';
import { fleet } from '../../data/fleet';
import VehicleInfo from '../../components/VehicleInfo';

const Coaches55 = () => {
  const { t } = useTranslation('common');

  return (
    <Layout title={t`coaches55.header`}>
      <PageHeader header={t`coaches55.header`} />
      <div className='bg-gray-200 text-black'>
        <div className='max-w-6xl mx-auto pt-5 pb-9 px-8'>
          {fleet().coaches55.map((vehicle) => (
            <VehicleInfo {...vehicle} key={vehicle.header} />
          ))}
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

export default Coaches55;
