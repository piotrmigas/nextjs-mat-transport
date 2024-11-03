import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet' />
        <link rel='canonical' href='https://mattransport.vercel.app' />
      </Head>
      <body className='bg-carbon text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
