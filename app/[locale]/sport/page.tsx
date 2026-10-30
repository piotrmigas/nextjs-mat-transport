import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import { locale } from 'next/root-params';
import Carousel from '@/components/Carousel';
import FadeIn from '@/components/FadeIn';
import PageHeader from '@/components/PageHeader';
import { getPageMetadata, sportImgs } from '@/helper';

const achievements = ['li1', 'li2', 'li3', 'li4', 'li5', 'li6', 'li7', 'li8'].reverse();

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(await locale(), 'header', 'sport');
}

const Sport = () => {
  const t = useTranslations('sport');

  return (
    <>
      <PageHeader header={t('header')} />
      <FadeIn>
        <div className='mx-auto max-w-5xl pt-8'>
          <Carousel images={sportImgs} />
          <div className='mx-auto max-w-3xl px-8 py-5'>
            <h6 className='pt-5 text-center'>{t('ul')}</h6>
            <ul className='mx-auto divide-y divide-gray-100 py-3'>
              {achievements.map((achievement) => (
                <li className='py-1' key={achievement}>
                  {t(achievement)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Sport;
