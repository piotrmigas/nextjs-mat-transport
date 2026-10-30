'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => null;

const Footer = () => {
  const year = useSyncExternalStore(subscribe, getYear, getServerYear);

  return (
    <footer>
      <div className='text-center py-3 bg-gray-800 text-gray-300 text-sm font-medium'>
        Copyright &copy; {year ?? ''} MAT TRANSPORT
      </div>
    </footer>
  );
};

export default Footer;
