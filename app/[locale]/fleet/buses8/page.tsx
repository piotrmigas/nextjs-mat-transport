import { useTranslations } from 'next-intl';
import PageHeader from '@/components/PageHeader';
import VehicleInfo from '@/components/VehicleInfo';
import { buses8Data, getPageMetadata } from '@/helper';
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, 'fleet.cars');
}

const Buses8 = () => {
  const t = useTranslations('buses8');

  return (
    <>
      <PageHeader header={t('header')} />
      <div className='text-black bg-gray-200'>
        <div className='max-w-6xl mx-auto pt-5 pb-9 px-8'>
          {buses8Data.map(({ header, seats, info, images }) => (
            <VehicleInfo
              key={header}
              header={header.includes('.') ? t(header) : header}
              seats={t(seats)}
              info={t(info)}
              images={images}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Buses8;
