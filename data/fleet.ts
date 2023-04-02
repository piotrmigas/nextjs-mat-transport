import { useTranslation } from 'next-i18next';

export const fleet = () => {
  const { t } = useTranslation('common');

  return {
    cars: [
      {
        header: t`cars.mercedese2018.header`,
        info: t`cars.mercedese2018.info`,
        seats: t`cars.mercedese2018.seats`,
        images: [
          '/img/fleet/cars/mercedes-e-2018/1.jpg',
          '/img/fleet/cars/mercedes-e-2018/2.jpg',
          '/img/fleet/cars/mercedes-e-2018/3.jpg',
          '/img/fleet/cars/mercedes-e-2018/4.jpg',
          '/img/fleet/cars/mercedes-e-2018/5.jpg',
          '/img/fleet/cars/mercedes-e-2018/6.jpg',
        ],
      },
      {
        header: t`cars.mercedese2019.header`,
        info: t`buses8.mercedesavantgarde.info`,
        seats: t`cars.mercedese2019.info`,
        images: [
          '/img/fleet/cars/mercedes-e-2019/1.jpg',
          '/img/fleet/cars/mercedes-e-2019/2.jpg',
          '/img/fleet/cars/mercedes-e-2019/3.jpg',
          '/img/fleet/cars/mercedes-e-2019/4.jpg',
          '/img/fleet/cars/mercedes-e-2019/5.jpg',
          '/img/fleet/cars/mercedes-e-2019/6.jpg',
        ],
      },
      {
        header: t`cars.bmw5black.header`,
        info: t`cars.bmw5black.info`,
        seats: t`cars.bmw5black.seats`,
        images: [
          '/img/fleet/cars/bmw-5-black/1.jpg',
          '/img/fleet/cars/bmw-5-black/2.jpg',
          '/img/fleet/cars/bmw-5-black/3.jpg',
          '/img/fleet/cars/bmw-5-black/4.jpg',
          '/img/fleet/cars/bmw-5-black/5.jpg',
          '/img/fleet/cars/bmw-5-black/6.jpg',
        ],
      },
      {
        header: t`cars.bmw5blue.header`,
        info: t`cars.bmw5blue.info`,
        seats: t`cars.bmw5blue.seats`,
        images: [
          '/img/fleet/cars/bmw-5-blue/1.jpg',
          '/img/fleet/cars/bmw-5-blue/2.jpg',
          '/img/fleet/cars/bmw-5-blue/3.jpg',
          '/img/fleet/cars/bmw-5-blue/4.jpg',
          '/img/fleet/cars/bmw-5-blue/5.jpg',
          '/img/fleet/cars/bmw-5-blue/6.jpg',
        ],
      },
    ],
    buses8: [
      {
        header: t`buses8.mercedesavantgarde.header`,
        info: t`buses8.mercedesavantgarde.info`,
        seats: t`buses8.mercedesavantgarde.seats`,
        images: [
          '/img/fleet/buses8/mercedes-v-avantgarde/1.jpg',
          '/img/fleet/buses8/mercedes-v-avantgarde/2.jpg',
          '/img/fleet/buses8/mercedes-v-avantgarde/3.jpg',
          '/img/fleet/buses8/mercedes-v-avantgarde/4.jpg',
          '/img/fleet/buses8/mercedes-v-avantgarde/5.jpg',
          '/img/fleet/buses8/mercedes-v-avantgarde/6.jpg',
        ],
      },
      {
        header: t`buses8.mercedesvitoextralong.header`,
        info: t`buses8.mercedesvitoextralong.info`,
        seats: t`buses8.mercedesvitoextralong.seats`,
        images: [
          '/img/fleet/buses8/mercedes-v-extralong/1.jpg',
          '/img/fleet/buses8/mercedes-v-extralong/2.jpg',
          '/img/fleet/buses8/mercedes-v-extralong/3.jpg',
          '/img/fleet/buses8/mercedes-v-extralong/4.jpg',
          '/img/fleet/buses8/mercedes-v-extralong/5.jpg',
          '/img/fleet/buses8/mercedes-v-extralong/6.jpg',
          '/img/fleet/buses8/mercedes-v-extralong/7.jpg',
          '/img/fleet/buses8/mercedes-v-extralong/8.jpg',
        ],
      },
      {
        header: 'MINIBUS VIANO VIP',
        info: t`buses8.minibusvianovip.info`,
        seats: t`buses8.minibusvianovip.seats`,
        images: [
          '/img/fleet/buses8/minibus-viano-vip/1.jpg',
          '/img/fleet/buses8/minibus-viano-vip/2.jpg',
          '/img/fleet/buses8/minibus-viano-vip/3.jpg',
          '/img/fleet/buses8/minibus-viano-vip/4.jpg',
          '/img/fleet/buses8/minibus-viano-vip/5.jpg',
          '/img/fleet/buses8/minibus-viano-vip/6.jpg',
        ],
      },
      {
        header: 'MINIBUS VIANO 2.2 CDI',
        info: t`buses8.minibusvianocdi.info`,
        seats: t`buses8.minibusvianovip.seats`,
        images: [
          '/img/fleet/buses8/minibus-viano-cdi/1.jpg',
          '/img/fleet/buses8/minibus-viano-cdi/2.jpg',
          '/img/fleet/buses8/minibus-viano-cdi/3.jpg',
          '/img/fleet/buses8/minibus-viano-cdi/4.jpg',
          '/img/fleet/buses8/minibus-viano-cdi/5.jpg',
        ],
      },
      {
        header: 'MERCEDES VITO 111CDI/115CDI',
        info: t`buses8.mercedesvito111.info`,
        seats: t`buses8.mercedesvito111.seats`,
        images: [
          '/img/fleet/buses8/mercedes-vito-111/1.jpg',
          '/img/fleet/buses8/mercedes-vito-111/2.jpg',
          '/img/fleet/buses8/mercedes-vito-111/3.jpg',
          '/img/fleet/buses8/mercedes-vito-111/4.jpg',
          '/img/fleet/buses8/mercedes-vito-111/5.jpg',
        ],
      },
    ],
    buses21: [
      {
        header: 'MERCEDES SPRINTER VIP 2020',
        info: t`buses21.mercedessprinter2020.info`,
        seats: t`buses21.mercedessprinter2020.seats`,
        images: [
          '/img/fleet/buses21/mercedes-sprinter-2020/1.jpg',
          '/img/fleet/buses21/mercedes-sprinter-2020/2.jpg',
          '/img/fleet/buses21/mercedes-sprinter-2020/3.jpg',
          '/img/fleet/buses21/mercedes-sprinter-2020/4.jpg',
          '/img/fleet/buses21/mercedes-sprinter-2020/5.jpg',
          '/img/fleet/buses21/mercedes-sprinter-2020/6.jpg',
        ],
      },
      {
        header: 'MERCEDES SPRINTER 2013',
        info: t`buses21.mercedessprinter2013.info`,
        seats: t`buses21.mercedessprinter2013.seats`,
        images: [
          '/img/fleet/buses21/mercedes-sprinter-2013/1.jpg',
          '/img/fleet/buses21/mercedes-sprinter-2013/2.jpg',
          '/img/fleet/buses21/mercedes-sprinter-2013/3.jpg',
          '/img/fleet/buses21/mercedes-sprinter-2013/4.jpg',
          '/img/fleet/buses21/mercedes-sprinter-2013/5.jpg',
        ],
      },
    ],
    coaches33: [
      {
        header: 'IVECO ROSERO VIP 2018',
        info: t`coaches33.ivecorosero.info`,
        seats: t`coaches33.ivecorosero.seats`,
        images: [
          '/img/fleet/coaches33/iveco-rosero/1.jpg',
          '/img/fleet/coaches33/iveco-rosero/2.jpg',
          '/img/fleet/coaches33/iveco-rosero/3.jpg',
          '/img/fleet/coaches33/iveco-rosero/4.jpg',
          '/img/fleet/coaches33/iveco-rosero/5.jpg',
          '/img/fleet/coaches33/iveco-rosero/6.jpg',
          '/img/fleet/coaches33/iveco-rosero/7.jpg',
        ],
      },
      {
        header: 'IVECO MAGO 2',
        info: t`coaches33.ivecomago2white.info`,
        seats: t`coaches33.ivecomago2white.seats`,
        images: [
          '/img/fleet/coaches33/iveco-mago-2-white/1.jpg',
          '/img/fleet/coaches33/iveco-mago-2-white/2.jpg',
          '/img/fleet/coaches33/iveco-mago-2-white/3.jpg',
          '/img/fleet/coaches33/iveco-mago-2-white/4.jpg',
          '/img/fleet/coaches33/iveco-mago-2-white/5.jpg',
        ],
      },
      {
        header: 'IVECO MAGO 2',
        info: t`coaches33.ivecomago2silver.info`,
        seats: t`coaches33.ivecomago2silver.seats`,
        images: [
          '/img/fleet/coaches33/iveco-mago-2-silver/1.jpg',
          '/img/fleet/coaches33/iveco-mago-2-silver/2.jpg',
          '/img/fleet/coaches33/iveco-mago-2-silver/3.jpg',
          '/img/fleet/coaches33/iveco-mago-2-silver/4.jpg',
          '/img/fleet/coaches33/iveco-mago-2-silver/5.jpg',
          '/img/fleet/coaches33/iveco-mago-2-silver/6.jpg',
        ],
      },
    ],
    coaches55: [
      {
        header: 'MERCEDES TOURISMO VIP CLASS',
        info: t`coaches55.mercedesturismo.info`,
        seats: t`coaches55.mercedesturismo.seats`,
        images: [
          '/img/fleet/coaches55/mercedes-turismo/1.jpg',
          '/img/fleet/coaches55/mercedes-turismo/2.jpg',
          '/img/fleet/coaches55/mercedes-turismo/3.jpg',
          '/img/fleet/coaches55/mercedes-turismo/4.jpg',
          '/img/fleet/coaches55/mercedes-turismo/5.jpg',
        ],
      },
      {
        header: 'SETRA 415 HD ROYAL CLASS',
        info: t`coaches55.setra415.info`,
        seats: t`coaches55.setra415.seats`,
        images: [
          '/img/fleet/coaches55/setra/1.jpg',
          '/img/fleet/coaches55/setra/2.jpg',
          '/img/fleet/coaches55/setra/3.jpg',
          '/img/fleet/coaches55/setra/4.jpg',
        ],
      },
      {
        header: 'NEOPLAN EUROLINER',
        info: t`coaches55.neoplaneuroliner.info`,
        seats: t`coaches55.neoplaneuroliner.seats`,
        images: [
          '/img/fleet/coaches55/neoplan/1.jpg',
          '/img/fleet/coaches55/neoplan/2.jpg',
          '/img/fleet/coaches55/neoplan/3.jpg',
        ],
      },
      {
        header: 'MERCEDES 350 RHD',
        info: t`coaches55.mercedes350.info`,
        seats: t`coaches55.mercedes350.seats`,
        images: [
          '/img/fleet/coaches55/mercedes-350/1.jpg',
          '/img/fleet/coaches55/mercedes-350/2.jpg',
          '/img/fleet/coaches55/mercedes-350/3.jpg',
        ],
      },
    ],
  };
};
