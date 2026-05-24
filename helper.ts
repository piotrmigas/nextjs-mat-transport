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

export const carsData = [
  {
    header: 'mercedese2025.header',
    info: 'mercedese2025.info',
    seats: 'mercedese2025.seats',
    images: [
      '/images/fleet/cars/mercedes-e-2025/1.jpg',
      '/images/fleet/cars/mercedes-e-2025/2.jpg',
      '/images/fleet/cars/mercedes-e-2025/3.jpg',
      '/images/fleet/cars/mercedes-e-2025/4.jpg',
      '/images/fleet/cars/mercedes-e-2025/5.jpg',
      '/images/fleet/cars/mercedes-e-2025/6.jpg',
    ],
  },
  {
    header: 'mercedese2021.header',
    info: 'mercedese2021.info',
    seats: 'mercedese2021.seats',
    images: [
      '/images/fleet/cars/mercedes-e-2021/1.jpg',
      '/images/fleet/cars/mercedes-e-2021/2.jpg',
      '/images/fleet/cars/mercedes-e-2021/3.jpg',
      '/images/fleet/cars/mercedes-e-2021/4.jpg',
      '/images/fleet/cars/mercedes-e-2021/5.jpg',
      '/images/fleet/cars/mercedes-e-2021/6.jpg',
    ],
  },
  {
    header: 'mercedese2022.header',
    info: 'mercedese2022.info',
    seats: 'mercedese2022.seats',
    images: [
      '/images/fleet/cars/mercedes-e-2022/1.jpg',
      '/images/fleet/cars/mercedes-e-2022/2.jpg',
      '/images/fleet/cars/mercedes-e-2022/3.jpg',
      '/images/fleet/cars/mercedes-e-2022/4.jpg',
      '/images/fleet/cars/mercedes-e-2022/5.jpg',
      '/images/fleet/cars/mercedes-e-2022/6.jpg',
    ],
  },
  {
    header: 'bmw5black.header',
    info: 'bmw5black.info',
    seats: 'bmw5black.seats',
    images: [
      '/images/fleet/cars/bmw-5-black/1.jpg',
      '/images/fleet/cars/bmw-5-black/2.jpg',
      '/images/fleet/cars/bmw-5-black/3.jpg',
      '/images/fleet/cars/bmw-5-black/4.jpg',
      '/images/fleet/cars/bmw-5-black/5.jpg',
      '/images/fleet/cars/bmw-5-black/6.jpg',
    ],
  },
  {
    header: 'bmw5blue.header',
    info: 'bmw5blue.info',
    seats: 'bmw5blue.seats',
    images: [
      '/images/fleet/cars/bmw-5-blue/1.jpg',
      '/images/fleet/cars/bmw-5-blue/2.jpg',
      '/images/fleet/cars/bmw-5-blue/3.jpg',
      '/images/fleet/cars/bmw-5-blue/4.jpg',
      '/images/fleet/cars/bmw-5-blue/5.jpg',
      '/images/fleet/cars/bmw-5-blue/6.jpg',
    ],
  },
];
