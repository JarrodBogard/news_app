import { json } from "react-router-dom";

const API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const api_key = import.meta.env.VITE_API_KEY;

export const initArticlesLoader = async () => {
  const response = await fetch(`${API_URL + api_key}`);

  if (!response.ok) {
    throw json({ message: "Unable to fetch data" }, { status: 500 });
  }

  return response;
};

export const searchBarArticlesLoader = async ({ params }) => {
  // const searchParams = new URL(request.url).searchParams;
  // let query = searchParams.get("query");

  const category = params.category;

  // if (!query) {
  //   const queryString = window.location.search;
  //   const params = new URLSearchParams(queryString);
  //   query = params.get("query");
  // }

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${category}&apiKey=${api_key}`
  );

  if (!response.ok) {
    throw json({ message: "Unable to fetch data" }, { status: 500 });
  }

  return response;
};
