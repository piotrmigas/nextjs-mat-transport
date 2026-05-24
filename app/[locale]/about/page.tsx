import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PageHeader from '@/components/PageHeader';

const About = () => {
  const t = useTranslations('about');

  return (
    <>
      <PageHeader header={t('header')} />
      <div className='py-8 bg-gray-200 text-black'>
        <div className='max-w-5xl mx-auto px-8'>
          <p className='pb-6 leading-relaxed'>{t.rich('p1', { b: (chunks) => <b>{chunks}</b> })}</p>
          <p className='pb-6 leading-relaxed'>{t.rich('p2', { b: (chunks) => <b>{chunks}</b> })}</p>
          <p className='pb-6 leading-relaxed'>{t('p3')}</p>
          <p className='pb-8 leading-relaxed'>{t('p4')}</p>
          <div className='pt-4 border-t border-gray-400'>
            <p className='font-medium'>Mirosław Mildner, Paweł Mildner</p>
          </div>
        </div>
        <div className='mt-10 mb-4 flex justify-center'>
          <Image src='/images/about/pfr.jpg' alt='Polski Fundusz Rozwoju' loading='eager' width={670} height={596} />
        </div>
      </div>
    </>
  );
};

export default About;
