import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

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

export const sportImgs = [
  '/images/sport/1.webp',
  '/images/sport/2.webp',
  '/images/sport/3.webp',
  '/images/sport/4.webp',
  '/images/sport/5.webp',
  '/images/sport/6.webp',
  '/images/sport/7.webp',
  '/images/sport/8.webp',
  '/images/sport/9.webp',
];

const covidInfoImgs = ['/images/home/covid1.webp', '/images/home/covid2.webp'];

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

export type FleetVehicle = {
  headerKey: string;
  infoKey: string;
  seatsKey: string;
  images: string[];
};

export const carsData: FleetVehicle[] = [
  {
    headerKey: 'mercedese2025.header',
    infoKey: 'mercedese2025.info',
    seatsKey: 'mercedese2025.seats',
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
    headerKey: 'mercedese2021.header',
    infoKey: 'mercedese2021.info',
    seatsKey: 'mercedese2021.seats',
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
    headerKey: 'mercedese2022.header',
    infoKey: 'mercedese2022.info',
    seatsKey: 'mercedese2022.seats',
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
    headerKey: 'bmw5black.header',
    infoKey: 'bmw5black.info',
    seatsKey: 'bmw5black.seats',
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
    headerKey: 'bmw5blue.header',
    infoKey: 'bmw5blue.info',
    seatsKey: 'bmw5blue.seats',
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

export const buses8Data: FleetVehicle[] = [
  {
    headerKey: 'mercedesavantgarde.header',
    infoKey: 'mercedesavantgarde.info',
    seatsKey: 'mercedesavantgarde.seats',
    images: [
      '/images/fleet/buses8/mercedes-v-avantgarde/1.jpg',
      '/images/fleet/buses8/mercedes-v-avantgarde/2.jpg',
      '/images/fleet/buses8/mercedes-v-avantgarde/3.jpg',
      '/images/fleet/buses8/mercedes-v-avantgarde/4.jpg',
      '/images/fleet/buses8/mercedes-v-avantgarde/5.jpg',
      '/images/fleet/buses8/mercedes-v-avantgarde/6.jpg',
    ],
  },
  {
    headerKey: 'mercedesvitoextralong.header',
    infoKey: 'mercedesvitoextralong.info',
    seatsKey: 'mercedesvitoextralong.seats',
    images: [
      '/images/fleet/buses8/mercedes-v-extralong/1.jpg',
      '/images/fleet/buses8/mercedes-v-extralong/2.jpg',
      '/images/fleet/buses8/mercedes-v-extralong/3.jpg',
      '/images/fleet/buses8/mercedes-v-extralong/4.jpg',
      '/images/fleet/buses8/mercedes-v-extralong/5.jpg',
      '/images/fleet/buses8/mercedes-v-extralong/6.jpg',
      '/images/fleet/buses8/mercedes-v-extralong/7.jpg',
      '/images/fleet/buses8/mercedes-v-extralong/8.jpg',
    ],
  },
  {
    headerKey: 'minibusvianovip.header',
    infoKey: 'minibusvianovip.info',
    seatsKey: 'minibusvianovip.seats',
    images: [
      '/images/fleet/buses8/minibus-viano-vip/1.jpg',
      '/images/fleet/buses8/minibus-viano-vip/2.jpg',
      '/images/fleet/buses8/minibus-viano-vip/3.jpg',
      '/images/fleet/buses8/minibus-viano-vip/4.jpg',
      '/images/fleet/buses8/minibus-viano-vip/5.jpg',
      '/images/fleet/buses8/minibus-viano-vip/6.jpg',
    ],
  },
  {
    headerKey: 'minibusvianocdi.header',
    infoKey: 'minibusvianocdi.info',
    seatsKey: 'minibusvianocdi.seats',
    images: [
      '/images/fleet/buses8/minibus-viano-cdi/1.jpg',
      '/images/fleet/buses8/minibus-viano-cdi/2.jpg',
      '/images/fleet/buses8/minibus-viano-cdi/3.jpg',
      '/images/fleet/buses8/minibus-viano-cdi/4.jpg',
      '/images/fleet/buses8/minibus-viano-cdi/5.jpg',
    ],
  },
  {
    headerKey: 'mercedesvito111.header',
    infoKey: 'mercedesvito111.info',
    seatsKey: 'mercedesvito111.seats',
    images: [
      '/images/fleet/buses8/mercedes-vito-111/1.jpg',
      '/images/fleet/buses8/mercedes-vito-111/2.jpg',
      '/images/fleet/buses8/mercedes-vito-111/3.jpg',
      '/images/fleet/buses8/mercedes-vito-111/4.jpg',
      '/images/fleet/buses8/mercedes-vito-111/5.jpg',
    ],
  },
];

export const buses21Data: FleetVehicle[] = [
  {
    headerKey: 'mercedessprinter2020.header',
    infoKey: 'mercedessprinter2020.info',
    seatsKey: 'mercedessprinter2020.seats',
    images: [
      '/images/fleet/buses21/mercedes-sprinter-2020/1.jpg',
      '/images/fleet/buses21/mercedes-sprinter-2020/2.jpg',
      '/images/fleet/buses21/mercedes-sprinter-2020/3.jpg',
      '/images/fleet/buses21/mercedes-sprinter-2020/4.jpg',
      '/images/fleet/buses21/mercedes-sprinter-2020/5.jpg',
    ],
  },
  {
    headerKey: 'mercedessprinter2013.header',
    infoKey: 'mercedessprinter2013.info',
    seatsKey: 'mercedessprinter2013.seats',
    images: [
      '/images/fleet/buses21/mercedes-sprinter-2013/1.jpg',
      '/images/fleet/buses21/mercedes-sprinter-2013/2.jpg',
      '/images/fleet/buses21/mercedes-sprinter-2013/3.jpg',
      '/images/fleet/buses21/mercedes-sprinter-2013/4.jpg',
      '/images/fleet/buses21/mercedes-sprinter-2013/5.jpg',
    ],
  },
];

export const coaches33Data: FleetVehicle[] = [
  {
    headerKey: 'ivecorosero.header',
    infoKey: 'ivecorosero.info',
    seatsKey: 'ivecorosero.seats',
    images: [
      '/images/fleet/coaches33/iveco-rosero/1.jpg',
      '/images/fleet/coaches33/iveco-rosero/2.jpg',
      '/images/fleet/coaches33/iveco-rosero/3.jpg',
      '/images/fleet/coaches33/iveco-rosero/4.jpg',
      '/images/fleet/coaches33/iveco-rosero/5.jpg',
      '/images/fleet/coaches33/iveco-rosero/6.jpg',
      '/images/fleet/coaches33/iveco-rosero/7.jpg',
    ],
  },
  {
    headerKey: 'ivecomago2white.header',
    infoKey: 'ivecomago2white.info',
    seatsKey: 'ivecomago2white.seats',
    images: [
      '/images/fleet/coaches33/iveco-mago-2-white/1.jpg',
      '/images/fleet/coaches33/iveco-mago-2-white/2.jpg',
      '/images/fleet/coaches33/iveco-mago-2-white/3.jpg',
      '/images/fleet/coaches33/iveco-mago-2-white/4.jpg',
      '/images/fleet/coaches33/iveco-mago-2-white/5.jpg',
    ],
  },
  {
    headerKey: 'ivecomago2silver.header',
    infoKey: 'ivecomago2silver.info',
    seatsKey: 'ivecomago2silver.seats',
    images: [
      '/images/fleet/coaches33/iveco-mago-2-silver/1.jpg',
      '/images/fleet/coaches33/iveco-mago-2-silver/2.jpg',
      '/images/fleet/coaches33/iveco-mago-2-silver/3.jpg',
      '/images/fleet/coaches33/iveco-mago-2-silver/4.jpg',
      '/images/fleet/coaches33/iveco-mago-2-silver/5.jpg',
      '/images/fleet/coaches33/iveco-mago-2-silver/6.jpg',
    ],
  },
];

export const coaches55Data: FleetVehicle[] = [
  {
    headerKey: 'mercedesturismo.header',
    infoKey: 'mercedesturismo.info',
    seatsKey: 'mercedesturismo.seats',
    images: [
      '/images/fleet/coaches55/mercedes-turismo/1.jpg',
      '/images/fleet/coaches55/mercedes-turismo/2.jpg',
      '/images/fleet/coaches55/mercedes-turismo/3.jpg',
      '/images/fleet/coaches55/mercedes-turismo/4.jpg',
      '/images/fleet/coaches55/mercedes-turismo/5.jpg',
    ],
  },
  {
    headerKey: 'setra415.header',
    infoKey: 'setra415.info',
    seatsKey: 'setra415.seats',
    images: [
      '/images/fleet/coaches55/setra/1.jpg',
      '/images/fleet/coaches55/setra/2.jpg',
      '/images/fleet/coaches55/setra/3.jpg',
    ],
  },
  {
    headerKey: 'neoplaneuroliner.header',
    infoKey: 'neoplaneuroliner.info',
    seatsKey: 'neoplaneuroliner.seats',
    images: [
      '/images/fleet/coaches55/neoplan/1.jpg',
      '/images/fleet/coaches55/neoplan/2.jpg',
      '/images/fleet/coaches55/neoplan/3.jpg',
    ],
  },
  {
    headerKey: 'mercedes350.header',
    infoKey: 'mercedes350.info',
    seatsKey: 'mercedes350.seats',
    images: [
      '/images/fleet/coaches55/mercedes-350/1.jpg',
      '/images/fleet/coaches55/mercedes-350/2.jpg',
      '/images/fleet/coaches55/mercedes-350/3.jpg',
    ],
  },
];

export async function getPageMetadata(
  locale: string,
  translationKey: string,
  namespace: string = 'navbar',
): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace,
  });

  return {
    title: t(translationKey),
  };
}
