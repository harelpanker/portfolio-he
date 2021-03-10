import Head from 'next/head';

import HomeHero from './components/HomeHero';
import Services from './components/Services';
import Faqs from './components/Faqs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Harel Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeHero />
      <Services />
      <Faqs />
    </>
  );
}
