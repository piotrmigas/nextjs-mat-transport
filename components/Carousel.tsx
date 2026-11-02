'use client';

import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import Image from 'next/image';
import { DotButton, useDotButton } from './DotButton';

type CarouselProps = {
  images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false }),
    Fade(),
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

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
              <Image src={src} alt='carousel image' width={900} height={460} />
            </div>
          ))}
        </div>
      </div>
      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
