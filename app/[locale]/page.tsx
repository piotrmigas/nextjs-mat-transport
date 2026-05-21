import { use } from 'react';
import Img from 'next/image';
//import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
//import { useRouter } from 'next/router';
//import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import Layout from './layout';
//import { GetStaticProps } from 'next';
import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Carousel from '@/components/Carousel';
import { showcaseImgs } from '@/images';
import FadeIn from '@/components/FadeIn';

type Props = {
  customLightbox: any;
};

const Home = ({ params }: PageProps<'/[locale]'>) => {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  // useEffect(() => {
  //   if (!emblaApi) return;
  //   emblaApi.plugins().autoplay?.play();
  // }, [emblaApi]);

  // const [imgLoaded, setImgLoaded] = useState(false);
  // const [covid1Img, setCovid1Img] = useState('covid1');
  // const [covid2Img, setCovid2Img] = useState('covid2');
  // const router = useRouter();
  const t = useTranslations('home');

  // useEffect(() => {
  //   if (router.locale === 'en') {
  //     setCovid1Img('covid1en');
  //     setCovid2Img('covid2en');
  //   } else {
  //     setCovid1Img('covid1');
  //     setCovid2Img('covid2');
  //   }
  // }, [router.locale]);

  // useEffect(() => {
  //   const loadImg = async () => {
  //     try {
  //       await new Promise((resolve, reject) => {
  //         const loadImg = new Image();
  //         loadImg.src = showcaseImgs[0].src;
  //         loadImg.onload = () => resolve(showcaseImgs[0].src);
  //         loadImg.onerror = (err) => reject(err);
  //       });
  //       setImgLoaded(true);
  //     } catch (err) {
  //       console.log('Failed to load image', err);
  //     }
  //   };
  //   loadImg();
  // }, []);

  return (
    <FadeIn>
      <div className='mx-auto max-w-4xl'>
        <h4 className='text-center py-5 px-10'>{t('header')}</h4>
        <div className='pb-12'>
          <Carousel images={showcaseImgs} />
        </div>
        {/* <SimpleReactLightbox>
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
          </SimpleReactLightbox> */}
        <p className='py-8 px-8'>{t('content')}</p>
      </div>
    </FadeIn>
  );
};

export default Home;
