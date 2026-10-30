'use client';

import { useState } from 'react';
import Image from 'next/image';
import LightboxGallery from './LightboxGallery';

type Props = {
  header: string;
  seats: string;
  info: string;
  images: string[];
};

const VehicleInfo = ({ header, seats, info, images }: Props) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const thumbnails = images.slice(1).map((img) => (
    <div
      key={img}
      className='rounded-md'
      onClick={() => {
        setIndex(images.indexOf(img));
        setLightboxOpen(!lightboxOpen);
      }}
    >
      <Image src={img} alt='' className='object-cover cursor-pointer' width={800} height={532} />
    </div>
  ));

  return (
    <div className='mb-10'>
      <h5 className='mb-4 text-center font-medium'>{header}</h5>
      <div className='rounded-md bg-gray-400 to-gray-50'>
        <div className='grid md:grid-cols-5 gap-4 p-4 sm:px-5'>
          <div className='rounded-md cursor-pointer md:col-span-2'>
            <Image
              src={images[0]}
              className='cursor-pointer'
              alt=''
              width={800}
              height={532}
              onClick={() => {
                setIndex(0);
                setLightboxOpen(!lightboxOpen);
              }}
            />
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
