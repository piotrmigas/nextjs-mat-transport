import { useTranslations } from 'next-intl';
import PageHeader from '@/components/PageHeader';
import VehicleInfo from '@/components/VehicleInfo';
import { coaches33Data, getPageMetadata } from '@/helper';
import type { Metadata } from 'next';
import { locale } from 'next/root-params';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(await locale(), 'fleet.coaches33');
}

const Coaches33 = () => {
  const t = useTranslations('coaches33');

  return (
    <>
      <PageHeader header={t('header')} />
      <div className='text-gray-900 bg-gray-200'>
        <div className='max-w-6xl mx-auto pt-5 pb-9 px-8'>
          {coaches33Data.map(({ header, seats, info, images }, i) => (
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

export default Coaches33;
