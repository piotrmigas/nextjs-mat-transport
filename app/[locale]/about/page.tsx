import PageHeader from '@/components/PageHeader';
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('about');

  return (
    <>
      <PageHeader header={t('header')} />
      <div className='py-4 bg-gray-200 text-black'>
        <div className='max-w-5xl mx-auto p-8'>
          <p className='pb-2'>{t.rich('p1', { b: (chunks) => <b>{chunks}</b> })}</p>
          <p className='pb-2'>{t.rich('p2', { b: (chunks) => <b>{chunks}</b> })}</p>
          <p className='pb-2'>{t('p3')}</p>
          <p className='pb-2'>{t('p4')}</p>
          <p className='font-bold my-4'>Mirosław Mildner, Paweł Mildner</p>
        </div>
      </div>
    </>
  );
};

export default About;
