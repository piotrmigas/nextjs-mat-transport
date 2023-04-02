import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <Layout title={t`navbar.about`}>
      <PageHeader header={t`about.header`} />
      <div className='py-4 bg-gray-200 text-black'>
        <div className='max-w-5xl mx-auto p-8'>
          <p className='pb-2'>
            <Trans>{t`about.p1`}</Trans>
          </p>
          <p className='pb-2'>
            <Trans>{t`about.p2`}</Trans>
          </p>
          <p className='pb-2'>{t`about.p3`}</p>
          <p className='pb-2'>{t`about.p4`}</p>
          <p className='font-bold my-4'>Mirosław Mildner, Paweł Mildner</p>
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

export default About;
