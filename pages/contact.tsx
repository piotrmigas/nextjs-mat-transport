import { useState } from 'react';
import { GetStaticProps } from 'next';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Watch as Loader } from 'react-loader-spinner';
import Form from '../components/Form';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const { t } = useTranslation('common');

  const [loaded, setLoaded] = useState(false);

  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
  };

  return (
    <Layout title={t`navbar.contact`}>
      <Provider template={AlertTemplate} {...options}>
        <PageHeader header={t`contact.header`} />
        <div className='bg-gray-200 text-black'>
          <div className='max-w-6xl'>
            <div className='grid sm:grid-cols-2 gap-6 sm:gap-0 pt-6 pb-5'>
              <div>
                <h5 className='mb-5 font-semibold text-center'>{t`contact.name`}</h5>
                <div className='grid grid-cols-6 mb-4 text-sm'>
                  <div className='col-start-1 sm:col-start-2 col-span-5 sm:col-span-4'>
                    <div className='grid grid-cols-3 items-center'>
                      <i className='fas fa-map-marker-alt text-3xl text-center' />
                      <div className='col-span-2'>
                        <h6 className='font-semibold'>{t`contact.h1`}</h6>
                        <p>
                          <Trans>{t`contact.p1`}</Trans>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-6 pb-3 text-sm'>
                  <div className='col-start-1 sm:col-start-2 col-span-5 sm:col-span-4'>
                    <div className='grid grid-cols-3'>
                      <div className='col-start-2 col-span-2'>
                        <h6 className='font-semibold'>{t`contact.h2`}</h6>
                        <p>
                          <Trans>{t`contact.p2`}</Trans>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-6 text-sm'>
                  <div className='col-start-1 sm:col-start-2 col-span-5 sm:col-span-4'>
                    <div className='grid grid-cols-3 items-center'>
                      <i className='fas fa-phone-volume text-3xl text-center' />
                      <div className='col-span-2'>
                        <h6 className='font-semibold text-'>{t`contact.h3`}</h6>
                        <p>+48 695 57 40 28</p>
                        <p>+48 601 55 49 81</p>
                        <p>TEL/FAX 12 655 49 81</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className='pt-4 font-semibold text-center'>
                  e-mail:{' '}
                  <a href='mailto:biuro@mattransport.pl' className='font-normal'>
                    biuro@mattransport.pl
                  </a>
                </p>
              </div>
              <div className='px-8 sm:p-0'>
                {!loaded && <Loader height={25} width={25} wrapperClass='flex items-center justify-center h-full' />}
                <iframe
                  onLoad={() => setLoaded(true)}
                  className='w-full h-80 sm:h-full border border-solid border-gray-300 rounded-md'
                  title='map'
                  src='https://maps.google.pl/maps?f=q&amp;source=s_q&amp;hl=pl&amp;geocode=+&amp;q=MATTRANSPORT&amp;g=Wodna+4,+Krak%C3%B3w&amp;ie=UTF8&amp;hq=FIRMA+MATTRANSPORT&amp;hnear=Krak%C3%B3w,+ma%C5%82opolskie&amp;t=m&amp;z=12&amp;iwloc=A&amp;output=embed'
                />
              </div>
            </div>
          </div>
          <div className='max-w-lg px-8 sm:max-w-xl mx-auto pb-10 text-black'>
            <h5 className='text-center py-5 font-semibold'>{t`contact.formHeader`}</h5>
            <Form />
          </div>
        </div>
      </Provider>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});

export default Contact;
