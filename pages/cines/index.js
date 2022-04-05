import Head from 'next/head';
import Header from '../../components/Header/Header';

export default function Cines() {
  return (
    <>
      <Head>
        <title>Nelson-Movies | Cines</title>
        <meta
          name='nelson-movies'
          content='Bienvenido al cine de Nelson Gamero'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <h1>Cines</h1>
      </main>
    </>
  );
}
