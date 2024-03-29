import { useEffect } from 'react';

import fs from 'fs';
import path from 'path';

import Layout from '../components/Layout';
import Logos from '../components/Logos';

const React = ({ logos }) => {
  const handler = (e) => {
    var images = document.querySelectorAll('.logos .logo');

    function max_img_width(image) {
      var ideal_area = 5000;
      var ideal_ratio = Math.sqrt(
        ideal_area / (image.naturalWidth * image.naturalHeight)
      );

      image.width = Math.round(image.naturalWidth * ideal_ratio);
      image.classList.remove('hidden');
    }

    images.forEach(max_img_width);
  };

  useEffect(() => {
    const handleLoad = () => {
      handler();
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      <Layout>
        <Logos logos={logos} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const logosPath = path.join(process.cwd(), 'public/logos/logos.json');
  const logosJson = fs.readFileSync(logosPath, 'utf-8');
  const logos = JSON.parse(logosJson);

  return {
    props: {
      logos,
    },
  };
}

export default React;
