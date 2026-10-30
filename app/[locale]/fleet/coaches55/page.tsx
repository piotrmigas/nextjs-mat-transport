import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import PageHeader from '@/components/PageHeader';
import VehicleInfo from '@/components/VehicleInfo';
import { coaches55Data, getPageMetadata } from '@/helper';
import { locale } from 'next/root-params';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(await locale(), 'fleet.coaches55');
}

const Coaches55 = () => {
  const t = useTranslations('coaches55');

  return (
    <>
      <PageHeader header={t('header')} />
      <div className='text-gray-900 bg-gray-200'>
        <div className='max-w-6xl mx-auto pt-5 pb-9 px-8'>
          {coaches55Data.map(({ header, seats, info, images }, i) => (
            <VehicleInfo
              key={i}
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

export default Coaches55;
