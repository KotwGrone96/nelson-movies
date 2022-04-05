import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';

export default function Home() {
  // const [movies, setMovies] = useState(false);

  // useEffect(() => {
  //   const TMDB_URL = 'https://api.themoviedb.org/3';
  //   const QUERY =
  //     '/discover/movie?release_date.gte=2022-03-30&release_date.lte=2022-05-01';
  //   const API_KEY = '&api_key=ee0500b9aad5ba779147720d683b3c9d';
  //   const LANG = '&language=es-PE';
  //   const PAGE = '&page=4';
  //   const URL =
  //     TMDB_URL +
  //     QUERY +
  //     API_KEY +
  //     LANG +
  //     '&region=US' +
  //     PAGE +
  //     '&sort_by=popularity';
  //   console.log(URL);

  //   const req = async (url) => {
  //     const res = await fetch(url);
  //     const movies = await res.json();
  //     setMovies(movies.results);
  //     console.log(movies.total_pages);
  //   };
  //   req(URL);
  // }, []);

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
      <main>
        <h1>Cine De Nelson</h1>
      </main>
    </>
  );
}
