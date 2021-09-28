import axios from "axios";

const API_KEY = "93e18502a4f670f89316c5fc1b091bd6";
const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY };

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get("/trending/all/day", {
    params: {
      language: "en-US",
    },
  });

  return data.results;
};

export async function fetchMovieById(id) {
  const { data } = await axios.get(`/movie/${id}`);

  return data;
}

export async function fetchMovieCasts(id) {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      language: "en-US",
    },
  });

  return data.cast;
}

export async function fetchMovieReviews(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: {
      language: "en-US",
    },
  });

  return data.results;
}

export async function fetchMovieByName(query) {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query: `${query}`,
    },
  });
  return data.results;
}
