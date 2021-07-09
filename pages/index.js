import Head from 'next/head';
import GlobalStyles from './globalStyles';

import Theme from './../utils/Theme';
import Header from './../components/Header';
import Slogan from './../components/Slogan';

export default function Home() {
  return (
    <Theme>
      <GlobalStyles />
      <div>
        <Head>
          <title>Easybank!!!</title>
          <meta name="description" content="Easybank challenge" />
          <link rel="icon" href="/favicon-32x32.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
        <Header />
        <main>
          <Slogan />
        </main>
      </div>
    </Theme>
  )
}
