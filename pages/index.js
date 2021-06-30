import Head from 'next/head';
import GlobalStyles from './globalStyles';

import Header from './../components/Header';

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Head>
          <title>Easybank!!!</title>
          <meta name="description" content="Easybank challenge" />
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>
        <Header />
      </div>
    </>
  )
}
