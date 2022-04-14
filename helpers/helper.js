export const getMovies = () => {
  const req = (url) => {
    return fetch(url).then((res) => res.json());
  };

  const movies = (url) => req(url);

  return { movies };
};
