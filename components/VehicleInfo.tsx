'use client';

import { useState, type Dispatch, type SetStateAction } from 'react';
import Image from 'next/image';
import LightboxGallery from './LightboxGallery';

const openLightboxAt = (
  setIndex: (value: number) => void,
  setLightboxOpen: Dispatch<SetStateAction<boolean>>,
  index: number,
) => {
  setIndex(index);
  setLightboxOpen((isOpen) => !isOpen);
};

type Props = {
  header: string;
  seats: string;
  info: string;
  images: string[];
};

const VehicleInfo = ({ header, seats, info, images }: Props) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const thumbnails = images.slice(1).map((img, thumbnailIndex) => {
    const actualIndex = thumbnailIndex + 1;

    return (
      <button
        key={img}
        type='button'
        className='rounded-md overflow-hidden border-0 bg-transparent p-0 text-left'
        aria-label={`Open vehicle image ${actualIndex + 1}`}
        onClick={() => openLightboxAt(setIndex, setLightboxOpen, actualIndex)}
      >
        <Image src={img} alt='' className='object-cover cursor-pointer' width={800} height={532} />
      </button>
    );
  });

  return (
    <div className='mb-10'>
      <h5 className='mb-4 text-center font-medium'>{header}</h5>
      <div className='rounded-md bg-gray-400 to-gray-50'>
        <div className='grid md:grid-cols-5 gap-4 p-4 sm:px-5'>
          <div className='rounded-md md:col-span-2'>
            <button
              type='button'
              className='w-full rounded-md border-0 bg-transparent p-0 text-left'
              aria-label='Open vehicle gallery'
              onClick={() => openLightboxAt(setIndex, setLightboxOpen, 0)}
            >
              <Image src={images[0]} className='cursor-pointer' alt='' width={800} height={532} />
            </button>
          </div>
          <div className='md:col-span-3 md:flex md:flex-col'>
            <h5 className='pb-1 sm:text-lg'>{seats}</h5>
            <p className='text-sm sm:text-base'>{info}</p>
            {images.length <= 4 && <div className='mt-4 md:mt-auto grid sm:grid-cols-3 gap-4 pt-4'>{thumbnails}</div>}
          </div>
        </div>
        {images.length > 4 && <div className='grid sm:grid-cols-5 gap-4 p-4 sm:px-5'>{thumbnails}</div>}
        <LightboxGallery toggler={lightboxOpen} sources={images} sourceIndex={index} />
      </div>
    </div>
  );
};

export default VehicleInfo;
