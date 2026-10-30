import { useTranslations } from 'next-intl';
import PageHeader from '@/components/PageHeader';
import { getPageMetadata } from '@/helper';
import type { Metadata } from 'next';
import { locale } from 'next/root-params';
import LightboxGallery from '@/components/LightboxGallery';

const testimonialImages = [
  '/images/testimonials/1.jpg',
  '/images/testimonials/2.jpg',
  '/images/testimonials/3.jpg',
  '/images/testimonials/4.jpg',
  '/images/testimonials/5.jpg',
  '/images/testimonials/6.jpg',
  '/images/testimonials/7.jpg',
  '/images/testimonials/8.jpg',
];

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(await locale(), 'testimonials');
}

const Testimonials = () => {
  const t = useTranslations('testimonials');
  const captions = [
    t.rich('img1', { b: (chunks) => <b>{chunks}</b> }),
    t.rich('img2', { b: (chunks) => <b>{chunks}</b> }),
    t('img3'),
    t('img4'),
  ];

  return (
    <>
      <PageHeader header={t('header')} />
      <div className='text-gray-900 bg-gray-200'>
        <div className='pb-5 max-w-5xl mx-auto px-8'>
          <h6 className='py-4 text-center'>{t.rich('title', { b: (chunks) => <b>{chunks}</b> })}</h6>
          <p className='mb-5'>{t('p1')}</p>
          <p className='my-5'>{t('p2')}</p>
          <LightboxGallery
            thumbnails={testimonialImages.map((src, index) => ({
              src,
              caption: captions[index],
            }))}
          />
          <ul className='my-5 divide-y divide-gray-400 text-justify'>
            <li className='py-1'>{t.rich('li1', { b: (chunks) => <b>{chunks}</b> })}</li>
            <li className='py-1'>{t.rich('li2', { b: (chunks) => <b>{chunks}</b> })}</li>
            <li className='py-1'>{t.rich('li3', { b: (chunks) => <b>{chunks}</b> })}</li>
            <li className='py-1'>{t('li4')}</li>
            <li className='py-1'>{t('li5')}</li>
            <li className='py-1'>{t('li6')}</li>
            <li className='py-1'>{t.rich('li7', { b: (chunks) => <b>{chunks}</b> })}</li>
            <li className='py-1'>{t('li8')}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
