'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          <div className='embla__slide'>Slide 1</div>
          <div className='embla__slide'>Slide 2</div>
          <div className='embla__slide'>Slide 3</div>
        </div>
      </div>
      <button className='embla__prev' onClick={goToPrev}>
        Scroll to prev
      </button>
      <button className='embla__next' onClick={goToNext}>
        Scroll to next
      </button>
    </div>
  );
};

export default Carousel;
