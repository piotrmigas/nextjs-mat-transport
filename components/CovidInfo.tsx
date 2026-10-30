'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import LightboxGallery from './LightboxGallery';
import { getLocalizedCovidImgs } from '@/helper';

const CovidInfo = () => {
  const locale = useLocale();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const localizedImgs = useMemo(() => getLocalizedCovidImgs(locale), [locale]);

  return (
    <>
      <div className='flex justify-center items-center gap-4  flex-wrap sm:flex-nowrap mx-auto'>
        {localizedImgs.map((src, i) => (
          <button
            type='button'
            key={i}
            className='h-67.5 w-110 overflow-hidden'
            onClick={() => {
              setIndex(i);
              setLightboxOpen((isOpen) => !isOpen);
            }}
          >
            <Image
              src={src}
              alt='covid info'
              className='h-auto w-full object-cover object-top cursor-zoom-in'
              width={2000}
              height={1545}
            />
          </button>
        ))}
      </div>
      <LightboxGallery
        toggler={lightboxOpen}
        sources={localizedImgs}
        sourceIndex={index}
      />
    </>
  );
};

export default CovidInfo;
