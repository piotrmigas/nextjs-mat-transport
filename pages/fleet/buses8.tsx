import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { GetStaticProps } from 'next';
import VehicleInfo from '../../components/VehicleInfo';
import { fleet } from '../../data/fleet';

const Buses8 = () => {
  const { t } = useTranslation('common');

  return (
    <Layout title={t`buses8.header`}>
      <PageHeader header={t`buses8.header`} />
      <div className='text-black bg-gray-200'>
        <div className='max-w-6xl mx-auto pt-5 pb-9 px-8'>
          {fleet().buses8.map((vehicle) => (
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

export default Buses8;
