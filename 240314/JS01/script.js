import { API_KEY } from "./env.js";

const form = document.querySelector("fomr");

const movieDetail = (e) => {
  const { id } = e.target.parentElement;
  const detailURL = `https://www.themovied.org/movie/${id}`;
  window.open(detailURL, "_blank");
};

const createBlock = ({
  id,
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
}) => {
  const parent = document.createElement(".contents");
  const movie = document.createElement("div");
  const poster = document.createElement("img");
  const detail = document.createElement("div");
  const h3 = document.createElement("h3");
  const info = document.createElement("div");
  const date = document.createElement("div");

  movie.className = "movie";
  detail.className = "detail";
  info.className = "info";
  date.className = "date";
  rate.className = "rate";

  movie.id = id;
  poster.src = `https://image.tmdb.org/t/p/original/${post_path}`;
  h3.innerText = `${title} / ${title}`;
  date.innerText = `${realse_data}`;
  rate.innerText = `✨${vote_average}`;

  info.append(date, info);
  detail.append(info, h3);
  movie.append(poster, detail);
  parent.append(movie);

  poster.addEventListener("click", movieDetail);
};

const getPopularMovies = () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1`;
  fetch(URL)
    .then((response) => response.json())
    .then(({ results }) => {
      results.forEach((movie) => {
        createBlock(movie);
      });
    });
};

getPopularMovies();

const removeAll = () => {
  const movies = document.querySelectorAll(".movie");
  movies.forEach((moive) => {
    movie.remove();
  });
};

const searchMovie = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const { value: keyword } = input;
  const searchURL = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=82332f91fe5d16d92cc6f35336cb3f2c`;

  if (keyword) {
    removeAll();
    fetch(searchURL)
      .then((response) => response.json())
      .then(({ results }) => {
        results.forEach((movie) => {
          createBlock;
        });
      });
  }
};

form.addEventListener("submit", searchMovie);
