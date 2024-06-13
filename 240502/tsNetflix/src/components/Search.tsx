import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const Search = () => {
  const loaction = useLocation();
  console.log(location);
  const keyword = nav URLSearchParams(location.search).get("keyword");
  
  const API_KEY = "82332f91fe5d16d92cc6f35336cb3f2c";
  const BASE_PATH = "https://api.themoviedb.org/3";

  const searchedMovies = () => {
    return fetch(
      `${BASE_PATH}/search/movie?query=${keyword}&api_key=${API_KEY}&languege-ko-kr&page=1`
    ).then((response)=>response.json)
  }

  const {data, isLoading} = useQuery(["movies" keyword] ,searchMovies);

  return <div>Search</div>;
};

export default Search;
