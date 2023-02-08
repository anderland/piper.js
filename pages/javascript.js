import fs from 'fs';
import path from 'path';

import Script from 'next/script';

import Layout from '../components/Layout';
import Logos from '../components/Logos';

const JavaScript = ({ logos }) => {
  return (
    <>
      <Script src='/js/piper.js' />
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

export default JavaScript;
