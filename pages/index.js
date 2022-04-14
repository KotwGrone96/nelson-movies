import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import ShowTimeLayout from '../components/ShowTimeLayout/ShowTimeLayout';
import Footer from '../components/Footer/Footer';

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
      <Banner />
      <main>
        <ShowTimeLayout />
      </main>
      <Footer />
    </>
  );
}
