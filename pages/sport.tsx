import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { sportImgs } from '../data/sportImgs';
import PageHeader from '../components/PageHeader';
import { GetStaticProps } from 'next';

const Sport = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    const loadImg = async () => {
      try {
        await new Promise((resolve, reject) => {
          const loadImg = new Image();
          loadImg.src = sportImgs[0].src;
          loadImg.onload = () => resolve(sportImgs[0].src);
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
      <Layout title='Mat Sport'>
        <PageHeader header='Mat Sport' />
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
          className='mx-auto max-w-4xl pt-8'
        >
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            animationHandler='fade'
            interval={4000}
          >
            {sportImgs.map(({ id, src }) => (
              <div key={id}>
                <img src={src} alt='' width='900' height='460' />
              </div>
            ))}
          </Carousel>
          <div className='max-w-2xl mx-auto px-8 py-5'>
            <h6 className='pt-5 text-center'>{t`sport.ul`}</h6>
            <ul className='py-3 divide-y divide-gray-100 mx-auto'>
              <li className='py-1'>{t`sport.li1`}</li>
              <li className='py-1'>{t`sport.li2`}</li>
              <li className='py-1'>{t`sport.li3`}</li>
              <li className='py-1'>{t`sport.li4`}</li>
              <li className='py-1'>{t`sport.li5`}</li>
              <li className='py-1'>{t`sport.li6`}</li>
            </ul>
          </div>
        </motion.div>
      </Layout>
    )
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});

export default Sport;
