import { useTranslations } from 'next-intl';
import PageHeader from '@/components/PageHeader';
import { carsData, getPageMetadata } from '@/helper';
import VehicleInfo from '@/components/VehicleInfo';
import type { Metadata } from 'next';
import { locale } from 'next/root-params';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(await locale(), 'fleet.cars');
}

const Cars = () => {
  const t = useTranslations('cars');

  return (
    <>
      <PageHeader header={t('header')} />
      <div className='bg-gray-200 text-gray-900'>
        <div className='max-w-6xl mx-auto py-9'>
          {carsData.map(({ header, seats, info, images }, i) => (
            <VehicleInfo header={t(header)} seats={t(seats)} info={t(info)} key={i} images={images} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cars;
