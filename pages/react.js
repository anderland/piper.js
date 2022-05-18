import Head from 'next/head';
import logos from '../public/logos/logos.json';
import Link from 'next/link';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const images = document.querySelectorAll(
      '.logos.logos--config-dynamic .logo'
    );

    function max_img_width(image) {
      var ideal_area = 9000;
      var ideal_ratio = Math.sqrt(
        ideal_area / (image.naturalWidth * image.naturalHeight)
      );

      image.width = Math.round(image.naturalWidth * ideal_ratio);
      image.classList.remove('hidden');
    }

    images.forEach(max_img_width);
  });

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Area-based image sizing with JS</title>
        <meta
          name='description'
          content="Logo Cloud based on Piper Haywoods's formula https://piperhaywood.com/images-consistent-surface-area/"
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20'>
        <h1 className='text-2xl font-bold'>Area-based image sizing with JS</h1>

        <h3>
          <a href='/'>Javascript</a>
          {' | '}
          <b>
            <a href='/react'>useEffect</a>
          </b>
        </h3>

        <p className='mt-3 text-sm max-w-xl'>
          This is an attempt at resizing logos with JS based on{' '}
          <Link href='https://piperhaywood.com/images-consistent-surface-area/'>
            <a className='text-green-500 hover:text-green-400'>
              Piper Haywoods
            </a>
          </Link>
          's formula. The benefits of this approach vs a max-width/max-height
          one are shown in{' '}
          <Link href='https://nicksherman.com/size-by-area/'>
            <a className='text-green-500 hover:text-green-400'>Nick Sherman</a>
          </Link>
          's demo. The actual logos for this demo come from{' '}
          <Link href='https://github.com/gilbarbara/logos'>
            <a className='text-green-500 hover:text-green-400'>Gil Barbara</a>
          </Link>
          . I also have looked at the proportional image normalization formula
          shown in this{' '}
          <Link
            className='text-green-500 hover:text-green-400'
            href='https://codepen.io/danpaquette/pen/jXpbQK'
          >
            <a className='text-green-500 hover:text-green-400'>Pen</a>
          </Link>{' '}
          by Dan Paquette, but I thought that Piper's formula worked best for my
          needs (logos in very weird shapes). Quick{' '}
          <Link
            className='text-green-500 hover:text-green-400'
            href='https://tailwindcss.com/docs/guides/nextjs'
          >
            <a className='text-green-500 hover:text-green-400'>Nextjs</a>
          </Link>{' '}
          wrapper only for demo purposes. Please feel free to improve this.
        </p>

        <div className='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8'>
          {logos
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((logo) => (
              <Link key={logo.files[0]} href={`/${logo.url}`}>
                <div className='col-span-1 flex justify-center py-8 px-8 bg-gray-100 h-40 logos'>
                  {logo.files[1] ? (
                    <img
                      className='logo cursor-pointer hidden'
                      src={`/logos/logos/${logo.files[1]}`}
                      alt={logo.name}
                    />
                  ) : (
                    <img
                      className='logo cursor-pointer hidden'
                      src={`/logos/logos/${logo.files[0]}`}
                      alt={logo.name}
                    />
                  )}
                </div>
              </Link>
            ))}
        </div>
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='text-green-500 hover:text-green-400'
          href='https://github.com/anderland/piper.js'
        >
          https://github.com/anderland/piper.js
        </a>
      </footer>
    </div>
  );
};

export default Home;
