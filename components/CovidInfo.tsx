'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { getLocalizedCovidImgs } from '@/images';

type CovidInfoProps = {
  locale: string;
};

const CovidInfo = ({ locale }: CovidInfoProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const localizedImgs = useMemo(() => getLocalizedCovidImgs(locale), [locale]);

  return (
    <>
      <div className='flex justify-center items-center gap-4 max-w-3xl px-8 flex-wrap sm:flex-nowrap mx-auto'>
        {localizedImgs.map((src, i) => (
          <div
            key={i}
            onClick={() => {
              setIndex(i);
              setLightboxOpen(true);
            }}
          >
            <Image
              src={src}
              alt={`covidInfo${index + 1}`}
              className='object-cover cursor-pointer'
              width={334}
              height={265}
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={localizedImgs.map((src) => ({ src }))}
      />
    </>
  );
};

export default CovidInfo;
