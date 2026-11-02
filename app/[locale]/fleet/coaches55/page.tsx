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
          {coaches55Data.map(({ headerKey, seatsKey, infoKey, images }, i) => (
            <VehicleInfo key={i} header={t(headerKey)} seats={t(seatsKey)} info={t(infoKey)} images={images} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Coaches55;
