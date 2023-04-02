import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Image from 'next/image';

type VehicleInfoProps = {
  header: string;
  seats: string;
  info: string;
  images: string[];
};

const options = {
  buttons: {
    showDownloadButton: false,
    showFullscreenButton: false,
    showThumbnailsButton: false,
    showAutoplayButton: false,
  },
  progressBar: {
    showProgressBar: false,
  },
  settings: {
    disablePanzoom: true,
    disableWheelControls: true,
  },
  caption: {
    showCaption: false,
  },
};

export default function VehicleInfo({ header, seats, info, images }: VehicleInfoProps) {
  return (
    <div className='mt-4 mb-6'>
      <h5 className='my-4 text-center'>{header}</h5>
      <div className='rounded-md bg-gray-400 to-gray-50'>
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <div className='grid md:grid-cols-5 gap-4 px-4 pt-4 sm:px-5'>
              <div className='rounded-md cursor-pointer md:col-span-2'>
                <Image src={images[0]} className='cursor-pointer' alt='' width={800} height={532} />
              </div>
              <div className='md:col-span-3'>
                <h5 className='pb-1 sm:text-lg'>{seats}</h5>
                <p className='text-sm sm:text-base'>{info}</p>
              </div>
            </div>
            <div className='grid sm:grid-cols-5 gap-4 p-4 sm:px-5'>
              {images.slice(1).map((img) => (
                <div key={img} className='rounded-md'>
                  <Image src={img} alt='' className='object-cover cursor-pointer' width={800} height={532} />
                </div>
              ))}
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    </div>
  );
}
