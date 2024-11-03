import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSquareFull } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const navigation = [
    { name: <FontAwesomeIcon icon={faHome} />, href: '/', ariaLabel: 'Home' },
    { name: t`navbar.about`, href: '/about', ariaLabel: 'About' },
    { name: t`navbar.fleet`, href: '/fleet', ariaLabel: 'Fleet' },
    { name: t`navbar.testimonials`, href: '/testimonials', ariaLabel: 'Testimonials' },
    { name: t`navbar.contact`, href: '/contact', ariaLabel: 'Contact' },
    { name: 'Mat Sport', href: '/sport', ariaLabel: 'Sport' },
  ];

  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 md:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-14'>
              <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                <Disclosure.Button
                  aria-label='menu'
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none'
                >
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center md:items-stretch md:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <Link href='/' aria-label='Home Logo'>
                    <a className='block h-8 w-auto md:hidden lg:block'>
                      <Image src='/img/logo.png' alt='' width={52} height={32} />
                    </a>
                  </Link>
                </div>
                <div className='hidden md:block md:mx-auto'>
                  <div className='flex space-x-4'>
                    {navigation.map(({ name, href, ariaLabel }, index) => (
                      <Link href={href} key={index} aria-label={ariaLabel}>
                        <a
                          className={`${
                            router.pathname == href || (router.pathname.includes('fleet') && href.includes('fleet'))
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                          }
                        px-3 py-2 rounded-md text-sm font-medium flex-shrink-0`}
                        >
                          {name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
                <Link href={router.pathname} locale='pl' aria-label='PL language'>
                  <a className='mr-3 hidden sm:block mt-1'>
                    <Image src='/img/langPl.png' alt='' className='object-cover w-5 h-5' width={20} height={20} />
                  </a>
                </Link>
                <Link href={router.pathname} locale='en' aria-label='EN language'>
                  <a className='mr-3 hidden sm:block mt-1'>
                    <Image src='/img/langEn.png' alt='' className='object-cover w-5 h-5' width={20} height={20} />
                  </a>
                </Link>
                <a
                  href='https://facebook.com/mattransport'
                  aria-label='Facebook'
                  className='hidden sm:block mr-3 mt-1'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a
                  href='https://www.instagram.com/mattransport'
                  aria-label='Instagram'
                  className='hidden sm:block mt-1'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faInstagram} mask={faSquareFull} />
                </a>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map(({ name, href, ariaLabel }, index) => (
                <Link href={href} key={index} aria-label={ariaLabel}>
                  <a
                    className={`${
                      router.pathname == href && 'bg-gray-900 text-white'
                    } text-gray-300 hover:bg-gray-700 hover:text-white
                  block px-3 py-2 rounded-md text-base font-medium text-center`}
                  >
                    {name}
                  </a>
                </Link>
              ))}
              <div className='flex justify-center'>
                <Link href={router.pathname} locale='pl' aria-label='PL language'>
                  <a className='block sm:hidden mx-2 py-3'>
                    <Image src='/img/langPl.png' alt='' width={20} height={20} className='object-cover w-5 h-5' />
                  </a>
                </Link>
                <Link href={router.pathname} locale='en' aria-label='EN language'>
                  <a className='block sm:hidden mx-2 py-3'>
                    <Image src='/img/langEn.png' alt='' className='object-cover w-5 h-5' width={20} height={20} />
                  </a>
                </Link>
                <a
                  href='https://facebook.com/mattransport'
                  aria-label='Facebook'
                  className='block sm:hidden mx-2 mt-2'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faFacebookSquare} className='mt-0.5' />
                </a>
                <a
                  href='https://www.instagram.com/mattransport'
                  aria-label='Instagram'
                  className='block sm:hidden mx-2 mt-2'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faInstagram} mask={faSquareFull} className='mt-0.5' />
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
