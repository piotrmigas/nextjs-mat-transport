'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { isImageFitCover, isImageSlide, useLightboxProps, useLightboxState } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});

type LightBoxGalleryProps = {
  slides: { src: string }[];
  open: boolean;
  close: () => void;
  index?: number;
};

function NextJsImage({ slide, offset, rect }: any) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();
  const { currentIndex } = useLightboxState();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isImageSlide(slide) || typeof slide.src !== 'string') {
    return undefined;
  }

  const width = !cover ? rect.width : rect.width;
  const height = !cover ? rect.height : rect.height;

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        fill
        alt=''
        src={slide.src}
        loading='eager'
        draggable={false}
        style={{
          objectFit: cover ? 'cover' : 'contain',
          cursor: click ? 'pointer' : undefined,
        }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={offset === 0 ? () => click?.({ index: currentIndex }) : undefined}
      />
    </div>
  );
}

const LightBoxGallery = ({ slides, open, close, index = 0 }: LightBoxGalleryProps) => {
  return <Lightbox open={open} close={close} slides={slides} index={index} render={{ slide: NextJsImage }} />;
};

export default LightBoxGallery;
