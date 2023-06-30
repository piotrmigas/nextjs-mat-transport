import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  const { t } = useTranslation('common');

  const router = useRouter();

  return (
    <div className='page-container font-body'>
      <div className='content-wrap'>
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <link rel='icon' href='/favicon.ico' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={title} key='ogtitle' />
          <meta property='og:description' content={t`description`} />
          <meta property='og:image' content='/img/logo.png' />
          <meta name='description' content={t`description`} />
          <link rel='canonical' href={`https://mattransport.vercel.app${router.pathname}`} />
        </Head>
        <Navbar />
        <main>{children}</main>
        <a
          href='https://api.whatsapp.com/send?phone=48695574028'
          className='whatsapp-button'
          target='_blank'
          rel='noreferrer'
          aria-label='Whatsapp'
        >
          <i className='fab fa-whatsapp no-underline' />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
