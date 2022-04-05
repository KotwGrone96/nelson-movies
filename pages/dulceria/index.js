import Head from 'next/head';
import Header from '../../components/Header/Header';

export default function Dulceria() {
  return (
    <>
      <Head>
        <title>Nelson-Movies | Dulcería</title>
        <meta
          name='nelson-movies'
          content='Bienvenido al cine de Nelson Gamero'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <h1>Dulcería</h1>
      </main>
    </>
  );
}
