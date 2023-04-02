import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { LightboxOptions } from '../types';
import { GetStaticProps } from 'next';

type TestimonialsProps = {
  customLightbox: LightboxOptions;
};

const Testimonials = ({ customLightbox }: TestimonialsProps) => {
  const { t } = useTranslation('common');

  return (
    <Layout title={t`navbar.testimonials`}>
      <PageHeader header={t`testimonials.header`} />
      <div className='bg-yellow-50 text-black'>
        <div className='pb-5 max-w-5xl mx-auto px-8'>
          <h6 className='py-4 text-center'>
            <Trans>{t`testimonials.title`}</Trans>
          </h6>
          <p className='mb-5'>{t`testimonials.p1`}</p>
          <p className='my-5'>{t`testimonials.p2`}</p>
          <SimpleReactLightbox>
            <SRLWrapper options={customLightbox}>
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-5'>
                <div className='border-2 border-solid border-black rounded bg-white'>
                  <Image
                    src='/img/testimonials/1.jpg'
                    alt=''
                    className='w-full object-cover cursor-pointer'
                    width={600}
                    height={400}
                  />
                  <p className='p-3 text-center'>
                    <Trans>{t`testimonials.img1`}</Trans>
                  </p>
                </div>
                <div className='border-2 border-solid border-black rounded bg-white'>
                  <Image
                    src='/img/testimonials/2.jpg'
                    alt=''
                    className='w-full h-52 object-contain cursor-pointer'
                    width={543}
                    height={365}
                  />
                  <p className='pt-7 text-center'>
                    <Trans>{t`testimonials.img2`}</Trans>
                  </p>
                </div>
                <div className='border-2 border-solid border-black rounded bg-white'>
                  <Image
                    src='/img/testimonials/3.jpg'
                    alt=''
                    className='w-full object-cover cursor-pointer'
                    width={600}
                    height={400}
                  />
                  <p className='p-3 text-center'>{t`testimonials.img3`}</p>
                </div>
                <div className='border-2 border-solid border-black rounded bg-white'>
                  <Image
                    src='/img/testimonials/4.jpg'
                    alt=''
                    className='w-full object-cover cursor-pointer'
                    width={1200}
                    height={900}
                  />
                  <p className='p-3 text-center'>{t`testimonials.img4`}</p>
                </div>
                <div className='border-2 border-solid border-black bg-white rounded relative'>
                  <Image src='/img/testimonials/5.jpg' alt='' className='cursor-pointer object-contain' layout='fill' />
                </div>
                <div className='border-2 border-solid border-black rounded'>
                  <Image
                    src='/img/testimonials/6.jpg'
                    alt=''
                    className='w-full h-full object-cover cursor-pointer'
                    width={1054}
                    height={1083}
                  />
                </div>
                <div className='border-2 border-solid border-black rounded'>
                  <Image
                    src='/img/testimonials/7.jpg'
                    alt=''
                    className='w-full h-full object-cover cursor-pointer'
                    width={1051}
                    height={1110}
                  />
                </div>
                <div className='border-2 border-solid border-black rounded'>
                  <Image
                    src='/img/testimonials/8.jpg'
                    alt=''
                    className='w-full h-full object-cover cursor-pointer'
                    width={1054}
                    height={1063}
                  />
                </div>
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
          <ul className='my-5 divide-y divide-gray-400 text-justify'>
            <li className='py-1'>
              <Trans>{t`testimonials.li1`}</Trans>
            </li>
            <li className='py-1'>
              <Trans>{t`testimonials.li2`}</Trans>
            </li>
            <li className='py-1'>
              <Trans>{t`testimonials.li3`}</Trans>
            </li>
            <li className='py-1'>{t`testimonials.li4`}</li>
            <li className='py-1'>{t`testimonials.li5`}</li>
            <li className='py-1'>{t`testimonials.li6`}</li>
            <li className='py-1'>
              <Trans>{t`testimonials.li7`}</Trans>
            </li>
            <li className='py-1'>{t`testimonials.li8`}</li>
          </ul>
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

export default Testimonials;
