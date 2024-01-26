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

export const searchBarArticlesLoader = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;

  const query = searchParams.get("query");

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${api_key}`
  );

  if (!response.ok) {
    throw json({ message: "Unable to fetch data" }, { status: 500 });
  }

  return response;
};
