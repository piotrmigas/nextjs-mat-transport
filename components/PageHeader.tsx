'use client';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from '@/i18n/navigation';
import Link from 'next/link';

type Props = {
  header: string;
};

const PageHeader = ({ header }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <div className='flex justify-center bg-gray-900 items-center text-white py-2'>
        {pathname.startsWith('/fleet/') && (
          <Link href='/fleet'>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        )}
        <h6>{header}</h6>
      </div>
    </>
  );
};

export default PageHeader;
