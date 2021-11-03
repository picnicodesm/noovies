const API_KEY = "254cf5e35a92db305509644d6bf10686";
const BASE_URL = "https://api.themoviedb.org/3";

const Trending = () =>
  fetch(`${BASE_URL}/trending/movie/week?api_key==${API_KEY}`).then((res) =>
    res.json()
  );

const Upcoming = () =>
  fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=KR`
  ).then((res) => res.json());

const nowPlaying = () =>
  fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
  ).then((res) => res.json());
