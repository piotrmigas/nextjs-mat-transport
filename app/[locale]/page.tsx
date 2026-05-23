import { use } from 'react';
import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Carousel from '@/components/Carousel';
import { showcaseImgs } from '@/images';
import FadeIn from '@/components/FadeIn';
import CovidInfo from '@/components/CovidInfo';

const Home = ({ params }: PageProps<'/[locale]'>) => {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  const t = useTranslations('home');

  return (
    <FadeIn>
      <div className='mx-auto max-w-4xl'>
        <h4 className='text-center py-5 px-10'>{t('header')}</h4>
        <div className='pb-12'>
          <Carousel images={showcaseImgs} />
        </div>
        <CovidInfo locale={locale} />
        <p className='py-8 px-8'>{t('content')}</p>
      </div>
    </FadeIn>
  );
};

export default Home;
