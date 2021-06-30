import Head from 'next/head';
import GlobalStyles from './globalStyles';

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
        <h1>Easybank</h1>
      </div>
    </>
  )
}
