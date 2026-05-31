import { useTranslations } from 'next-intl';
import PageHeader from '@/components/PageHeader';
import { carsData, getPageMetadata } from '@/helper';
import VehicleInfo from '@/components/VehicleInfo';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, 'fleet.cars');
}

const Cars = () => {
  const t = useTranslations('cars');

  return (
    <>
      <PageHeader header={t('header')} />
      <div className='bg-gray-200 text-black'>
        <div className='max-w-6xl mx-auto pt-5 pb-9 px-8'>
          {carsData.map(({ header, seats, info, images }) => (
            <VehicleInfo header={t(header)} seats={t(seats)} info={t(info)} key={header} images={images} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cars;
