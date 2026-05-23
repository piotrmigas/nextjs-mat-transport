export const showcaseImgs = [
  '/images/home/carousel/1.webp',
  '/images/home/carousel/2.webp',
  '/images/home/carousel/3.webp',
  '/images/home/carousel/4.webp',
  '/images/home/carousel/5.webp',
  '/images/home/carousel/6.webp',
  '/images/home/carousel/7.webp',
  '/images/home/carousel/8.webp',
  '/images/home/carousel/9.webp',
];

export const covidInfoImgs = ['/images/home/covid1.webp', '/images/home/covid2.webp'];

export const getLocalizedImagePath = (imagePath: string, locale: string): string => {
  if (locale === 'en') {
    const lastDotIndex = imagePath.lastIndexOf('.');
    return imagePath.slice(0, lastDotIndex) + 'en' + imagePath.slice(lastDotIndex);
  }
  return imagePath;
};

export const getLocalizedCovidImgs = (locale: string): string[] => {
  return covidInfoImgs.map((img) => getLocalizedImagePath(img, locale));
};
