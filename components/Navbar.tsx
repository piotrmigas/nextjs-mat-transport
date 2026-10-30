'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, Link } from '@/i18n/navigation';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Navbar = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('navbar');

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  const navigation = [
    {
      name: <FontAwesomeIcon icon={faHome} />,
      href: '/',
      ariaLabel: t('home'),
    },
    { name: t('about'), href: '/about', ariaLabel: t('about') },
    { name: t('fleet.home'), href: '/fleet', ariaLabel: t('fleet.home') },
    {
      name: t('testimonials'),
      href: '/testimonials',
      ariaLabel: t('testimonials'),
    },
    { name: t('contact'), href: '/contact', ariaLabel: t('contact') },
    { name: 'Mat Sport', href: '/sport', ariaLabel: 'Mat Sport' },
  ];

  const langButtons = [
    {
      src: '/images/langPl.png',
      alt: 'Polish',
      locale: 'pl',
    },
    {
      src: '/images/langEn.png',
      alt: 'English',
      locale: 'en',
    },
  ];

  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 md:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-14'>
              <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                <DisclosureButton
                  aria-label='menu'
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none'
                >
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </DisclosureButton>
              </div>
              <div className='flex-1 flex items-center justify-center md:items-stretch md:justify-start'>
                <div className='shrink-0 flex items-center'>
                  <Link href='/' aria-label='Home Logo' className='block h-8 w-auto md:hidden lg:block'>
                    <Image src='/images/logo.png' alt='' width={52} height={32} loading='eager' />
                  </Link>
                </div>
                <div className='hidden md:block md:mx-auto'>
                  <div className='flex space-x-4'>
                    {navigation.map(({ name, href, ariaLabel }, index) => (
                      <Link
                        href={href}
                        key={index}
                        aria-label={ariaLabel}
                        className={`${
                          pathname === href || (pathname.includes('fleet') && href.includes('fleet'))
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }
                        px-3 py-2 rounded-md text-sm font-medium shrink-0`}
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 hidden md:flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
                {langButtons.map(({ src, alt, locale }) => (
                  <Image
                    key={locale}
                    src={src}
                    alt={alt}
                    className={`object-cover ${alt === 'Polish' ? 'mr-3' : 'mr-2'} hidden sm:block cursor-pointer`}
                    width={20}
                    height={20}
                    onClick={() => switchLocale(locale)}
                  />
                ))}
                <a
                  href='https://facebook.com/mattransportkrakow'
                  aria-label='Facebook'
                  className='hidden sm:flex mr-1 items-center'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a
                  href='https://www.instagram.com/mattransport'
                  aria-label='Instagram'
                  className='hidden sm:flex items-center'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    gradientFill={{
                      id: 'instagramDesktopIcon',
                      type: 'radial',
                      cx: '30%',
                      cy: '107%',
                      r: '120%',
                      stops: [
                        { offset: '0%', color: '#fdf497' },
                        { offset: '5%', color: '#fdf497' },
                        { offset: '45%', color: '#fd5949' },
                        { offset: '60%', color: '#d6249f' },
                        { offset: '90%', color: '#285aeb' },
                      ],
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
          <DisclosurePanel className='md:hidden'>
            <div className='px-2 py-2 space-y-1'>
              {/* Mobile menu */}
              {navigation.map(({ name, href, ariaLabel }, index) => (
                <Link
                  href={href}
                  key={index}
                  aria-label={ariaLabel}
                  className={`${
                    pathname === href && 'bg-gray-900 text-white'
                  } text-gray-300 hover:bg-gray-700 hover:text-white
                  block px-3 py-2 rounded-md text-base font-medium text-center`}
                >
                  {name}
                </Link>
              ))}
              <div className='flex justify-center items-center py-2'>
                {langButtons.map(({ src, alt, locale }) => (
                  <Image
                    key={locale}
                    src={src}
                    alt={alt}
                    width={20}
                    height={20}
                    className={`object-cover cursor-pointer ${alt === 'Polish' ? 'mr-3' : 'mr-2'}`}
                    onClick={() => switchLocale(locale)}
                  />
                ))}
                <a
                  href='https://facebook.com/mattransport'
                  aria-label='Facebook'
                  className='flex items-center mr-1'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a
                  href='https://www.instagram.com/mattransport'
                  aria-label='Instagram'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center'
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    gradientFill={{
                      id: 'instagramMobileIcon',
                      type: 'radial',
                      cx: '30%',
                      cy: '107%',
                      r: '120%',
                      stops: [
                        { offset: '0%', color: '#fdf497' },
                        { offset: '5%', color: '#fdf497' },
                        { offset: '45%', color: '#fd5949' },
                        { offset: '60%', color: '#d6249f' },
                        { offset: '90%', color: '#285aeb' },
                      ],
                    }}
                  />
                </a>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
