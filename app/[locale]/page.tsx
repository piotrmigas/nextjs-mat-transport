import { useTranslations } from 'next-intl';
import Carousel from '@/components/Carousel';
import { showcaseImgs } from '@/helper';
import FadeIn from '@/components/FadeIn';
import CovidInfo from '@/components/CovidInfo';

const Home = () => {
  const t = useTranslations('home');

  return (
    <FadeIn>
      <div className='mx-auto max-w-4xl px-7 min-[57rem]:px-0'>
        <h4 className='text-center py-5 mx-10'>{t('header')}</h4>
        <div className='mb-10'>
          <Carousel images={showcaseImgs} />
        </div>
        <CovidInfo />
        <p className='my-10'>{t('content')}</p>
      </div>
    </FadeIn>
  );
};

export default Home;
