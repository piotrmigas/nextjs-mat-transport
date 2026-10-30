import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PageHeader from '@/components/PageHeader';
import { getPageMetadata } from '@/helper';
import type { Metadata } from 'next';
import { locale } from 'next/root-params';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(await locale(), 'about');
}

const About = () => {
  const t = useTranslations('about');

  return (
    <>
      <PageHeader header={t('header')} />
      <div className='py-8 bg-gray-200 text-gray-900'>
        <div className='max-w-4xl mx-auto'>
          <p className='pb-6 leading-relaxed'>{t.rich('p1', { b: (chunks) => <b>{chunks}</b> })}</p>
          <p className='pb-6 leading-relaxed'>{t.rich('p2', { b: (chunks) => <b>{chunks}</b> })}</p>
          <p className='pb-6 leading-relaxed'>{t('p3')}</p>
          <p className='pb-8 leading-relaxed'>{t('p4')}</p>
          <p className='font-bold mt-1'>Mirosław Mildner, Paweł Mildner</p>
        </div>
        <div className='mt-10 mb-4 flex justify-center'>
          <Image src='/images/about/pfr.jpg' alt='Polish Development Fund' loading='eager' width={670} height={596} />
        </div>
      </div>
    </>
  );
};

export default About;
