'use client';

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import Image from 'next/image';
import { Watch as Loader } from 'react-loader-spinner';
import { DotButton, useDotButton } from './DotButton';

type CarouselProps = {
  images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(() => new Set());
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(), Fade()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const markImageLoaded = (src: string) => {
    setLoadedImages((loaded) => new Set(loaded).add(src));
  };

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {images.map((src, index) => (
            <div className='embla__slide' key={index}>
              <Image
                src={src}
                alt='carousel image'
                width={900}
                height={460}
                onLoad={() => markImageLoaded(src)}
                onError={() => markImageLoaded(src)}
              />
              {selectedIndex === index && !loadedImages.has(src) && (
                <Loader
                  height={25}
                  width={25}
                  wrapperClass='absolute inset-0 z-10 flex items-center justify-center'
                  color='#d60126'
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => {
              emblaApi?.plugins().autoplay?.stop();
              onDotButtonClick(index);
            }}
            className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
