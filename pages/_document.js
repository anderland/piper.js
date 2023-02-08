import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>Area-based resize with JS and React</title>
        <meta
          name='description'
          content="Effortlessly resize logos in JavaScript and React with our area-based approach, utilizing Piper Haywood's proven formula for consistent surface area. Learn more at https://piperhaywood.com/images-consistent-surface-area/."
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
