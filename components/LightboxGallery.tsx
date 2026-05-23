'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

type LightBoxGalleryProps = {
  slides: { src: string }[];
  open: boolean;
  close: () => void;
};

const LightBoxGallery = ({ slides, open, close }: LightBoxGalleryProps) => {
  return <Lightbox open={open} close={close} slides={slides} />;
};

export default LightBoxGallery;
