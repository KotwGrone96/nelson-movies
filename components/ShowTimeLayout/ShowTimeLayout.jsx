/* eslint-disable @next/next/no-img-element */
import style from './showTimeLayout.module.css';
import { useRef, useEffect, useState } from 'react';
import { getMovies } from '../../helpers/helper';

export default function ShowTimeLayout() {
  const [movies, setMovies] = useState([]);
  const [nextMovies, setNextMovies] = useState([]);
  const [view, setView] = useState('current');
  const buttons = useRef();

  const movieSection = (view) => {
    setView(view);
  };

  const btnActive = (e, view) => {
    const btns = Object.values(buttons.current.children);
    const currentBtn = e.target;
    if (currentBtn.classList.contains(`${style.btn_active}`)) {
      movieSection(view);
      return;
    }
    btns.forEach((btn) => btn.classList.remove(`${style.btn_active}`));
    currentBtn.classList.add(`${style.btn_active}`);
    movieSection(view);
    return;
  };

  const API_KEY = 'api_key=ee0500b9aad5ba779147720d683b3c9d';
  const DISCOVER =
    '/discover/movie?primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-04-10';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const SORT = 'sort_by=popularity.desc';
  const LANG = 'language=es';
  const NEXT_MOVIES =
    '/discover/movie?primary_release_date.gte=2022-04-15&primary_release_date.lte=2022-06-01';
  const url = BASE_URL + DISCOVER + '&' + API_KEY + '&' + SORT + '&' + LANG;
  const nextUrl =
    BASE_URL + NEXT_MOVIES + '&' + API_KEY + '&' + SORT + '&' + LANG;

  const imgUrlBase = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const api = getMovies();
    const movies = async (endpoint) => {
      const res = await api.movies(endpoint);
      let fistFive = [];
      for (let i = 0; i < 5; i++) {
        fistFive.push(res.results[i]);
      }
      setMovies(fistFive);
    };
    movies(url);
  }, [url]);

  useEffect(() => {
    const api = getMovies();
    const movies = async (endpoint) => {
      const res = await api.movies(endpoint);
      let fistFive = [];
      for (let i = 0; i < 5; i++) {
        fistFive.push(res.results[i]);
      }
      setNextMovies(fistFive);
    };
    movies(nextUrl);
  }, [nextUrl]);

  return (
    <>
      <div className={style.showTime}>
        <div ref={buttons} className={style.buttons}>
          <button
            className={style.btn_active}
            onClick={(e) => btnActive(e, 'current')}>
            En cartelera
          </button>
          <button onClick={(e) => btnActive(e, 'soon')}>
            Próximos estrenos
          </button>
        </div>
        {view === 'current' ? (
          <div className={style.movies}>
            {movies.map((movie) => (
              <div key={movie.id} className={style.movieItem}>
                <img
                  src={`${imgUrlBase + movie.poster_path}`}
                  alt={movie.name}
                />
              </div>
            ))}
            <button className={style.btn_more_desktop}>
              Ver más películas
            </button>
          </div>
        ) : (
          <div className={style.movies}>
            {nextMovies.map((movie) => (
              <div key={movie.id} className={style.movieItem}>
                <img
                  src={`${imgUrlBase + movie.poster_path}`}
                  alt={movie.name}
                />
              </div>
            ))}
            <button className={style.btn_more_desktop}>
              Ver más películas
            </button>
          </div>
        )}
        <button className={style.btn_more}>Ver más películas</button>
      </div>
    </>
  );
}
