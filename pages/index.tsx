import { useState, useEffect } from 'react';
import Img from 'next/image';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index';
import Layout from '../components/Layout';
import { showcaseImgs } from '../data/showcaseImgs';
import { LightboxOptions } from '../types';
import { GetStaticProps } from 'next';

type HomeProps = {
  customLightbox: LightboxOptions;
};

const Home = ({ customLightbox }: HomeProps) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [covid1Img, setCovid1Img] = useState('covid1');
  const [covid2Img, setCovid2Img] = useState('covid2');

  const router = useRouter();
  const { t } = useTranslation('common');

  useEffect(() => {
    if (router.locale === 'en') {
      setCovid1Img('covid1en');
      setCovid2Img('covid2en');
    } else {
      setCovid1Img('covid1');
      setCovid2Img('covid2');
    }
  }, [router.locale]);

  useEffect(() => {
    const loadImg = async () => {
      try {
        await new Promise((resolve, reject) => {
          const loadImg = new Image();
          loadImg.src = showcaseImgs[0].src;
          loadImg.onload = () => resolve(showcaseImgs[0].src);
          loadImg.onerror = (err) => reject(err);
        });
        setImgLoaded(true);
      } catch (err) {
        console.log('Failed to load image', err);
      }
    };
    loadImg();
  }, []);

  return (
    imgLoaded && (
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
      >
        <Layout title={t`title`}>
          <div className='mx-auto max-w-4xl'>
            <h4 className='text-center py-5 px-10'>{t`home.header`}</h4>
            <div className='pb-12'>
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                animationHandler='fade'
                interval={4000}
              >
                {showcaseImgs.map(({ id, src }) => (
                  <div key={id}>
                    <img src={src} alt='' width='900' height='460' />
                  </div>
                ))}
              </Carousel>
            </div>
            <SimpleReactLightbox>
              <SRLWrapper options={customLightbox}>
                <div className='flex justify-center items-center gap-4 max-w-3xl px-8 flex-wrap sm:flex-nowrap mx-auto'>
                  <Img
                    src={`/img/home/${covid1Img}.webp`}
                    alt=''
                    className='object-cover cursor-pointer'
                    width={334}
                    height={265}
                  />
                  <Img
                    src={`/img/home/${covid2Img}.webp`}
                    alt=''
                    className='object-cover cursor-pointer'
                    width={334}
                    height={265}
                  />
                </div>
              </SRLWrapper>
            </SimpleReactLightbox>
            <p className='py-8 px-8'>{t`home.content`}</p>
          </div>
        </Layout>
      </motion.div>
    )
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});

export default Home;
