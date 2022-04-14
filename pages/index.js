import Head from 'next/head';
import Header from '../components/Header/Header';
import ShowTimeLayout from '../components/ShowTimeLayout/ShowTimeLayout';
import Footer from '../components/Footer/Footer';
import Carrousel from '../components/Carrousel/Carrousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nelson-Movies | Home</title>
        <meta
          name='nelson-movies'
          content='Bienvenido al cine de Nelson Gamero'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Carrousel />
      <main>
        <ShowTimeLayout />
      </main>
      <Footer />
    </>
  );
}
