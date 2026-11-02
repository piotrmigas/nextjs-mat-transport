'use client';

import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Watch as Loader } from 'react-loader-spinner';
import Form from '@/components/ContactForm';
import PageHeader from '@/components/PageHeader';
import { faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations('contact');
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <ToastContainer hideProgressBar />
      <PageHeader header={t('header')} />
      <div className='bg-gray-200 text-gray-900'>
        <div className='max-w-6xl'>
          <div className='flex flex-col sm:flex-row gap-6 sm:gap-0 pt-6 pb-5'>
            <div className='w-full sm:w-1/2'>
              <h5 className='mb-5 font-semibold text-center'>{t('name')}</h5>
              <div className='flex justify-center mb-4 text-sm'>
                <div className='w-5/6 sm:ml-[16.666667%] sm:w-2/3'>
                  <div className='flex items-center'>
                    <div className='flex w-1/3 shrink-0 justify-center'>
                      <FontAwesomeIcon icon={faMapMarkerAlt} className='text-3xl' />
                    </div>
                    <div className='w-2/3'>
                      <h6 className='font-semibold'>{t('header1')}</h6>
                      <p className='whitespace-pre-line'>{t.rich('p1', { b: (chunks) => <b>{chunks}</b> })}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center pb-3 text-sm'>
                <div className='w-5/6 sm:ml-[16.666667%] sm:w-2/3'>
                  <div className='flex'>
                    <div className='w-1/3 shrink-0' />
                    <div className='w-2/3'>
                      <h6 className='font-semibold'>{t('header2')}</h6>
                      <p className='whitespace-pre-line'>{t.rich('p2', { b: (chunks) => <b>{chunks}</b> })}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center text-sm'>
                <div className='w-5/6 sm:ml-[16.666667%] sm:w-2/3'>
                  <div className='flex items-center'>
                    <div className='flex w-1/3 shrink-0 justify-center'>
                      <FontAwesomeIcon icon={faPhoneVolume} className='text-3xl' />
                    </div>
                    <div className='w-2/3'>
                      <h6 className='font-semibold text-'>{t('header3')}</h6>
                      <p>+48 695 57 40 28</p>
                      <p>+48 601 55 49 81</p>
                      <p>TEL/FAX 12 655 49 81</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className='pt-4 font-semibold text-center'>
                e-mail:{' '}
                <a href='mailto:biuro@mattransport.pl' className='font-normal'>
                  biuro@mattransport.pl
                </a>
              </p>
            </div>
            <div className='w-full px-8 sm:w-1/2 sm:p-0'>
              <div className='relative h-80 sm:h-full'>
                {!loaded && (
                  <Loader
                    height={25}
                    width={25}
                    wrapperClass='absolute inset-0 z-10 flex items-center justify-center'
                  />
                )}
                <iframe
                  onLoad={() => setLoaded(true)}
                  className='w-full h-full border border-solid border-gray-300 rounded-md'
                  title='map'
                  src='https://maps.google.pl/maps?f=q&amp;source=s_q&amp;hl=pl&amp;geocode=+&amp;q=MATTRANSPORT&amp;g=Wodna+4,+Krak%C3%B3w&amp;ie=UTF8&amp;hq=FIRMA+MATTRANSPORT&amp;hnear=Krak%C3%B3w,+ma%C5%82opolskie&amp;t=m&amp;z=12&amp;iwloc=A&amp;output=embed'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-lg px-8 sm:max-w-xl mx-auto pb-10 text-black'>
          <h5 className='text-center py-5 font-semibold'>{t('formHeader')}</h5>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;
