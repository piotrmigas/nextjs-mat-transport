'use client';

import { useState, type ReactNode } from 'react';
import FsLightbox from 'fslightbox-react';
import Image from 'next/image';

type Thumbnail = {
  src: string;
  alt?: string;
  caption?: ReactNode;
};

type Props = {
  toggler?: boolean;
  sources?: string[];
  sourceIndex?: number;
  thumbnails?: Thumbnail[];
};

const LightboxGallery = ({
  toggler,
  sources,
  sourceIndex = 0,
  thumbnails,
}: Props) => {
  const [internalState, setInternalState] = useState({
    toggler: false,
    sourceIndex: 0,
  });
  const controlled = toggler !== undefined;
  const gallerySources = sources ?? thumbnails?.map(({ src }) => src) ?? [];

  return (
    <>
      {thumbnails && (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-5'>
          {thumbnails.map(({ src, alt = '', caption }, index) => (
            <figure
              key={src}
              className='overflow-hidden rounded border-2 border-solid border-black bg-white'
            >
              <button
                type='button'
                aria-label={`Open image ${index + 1}`}
                className='relative block h-52 w-full cursor-zoom-in'
                onClick={() =>
                  setInternalState((state) => ({
                    toggler: !state.toggler,
                    sourceIndex: index,
                  }))
                }
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
                  className='object-contain'
                />
              </button>
              {caption && <figcaption className='p-3 text-center'>{caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
      <FsLightbox
        toggler={controlled ? toggler : internalState.toggler}
        sources={gallerySources}
        sourceIndex={controlled ? sourceIndex : internalState.sourceIndex}
      />
    </>
  );
};

export default LightboxGallery;
