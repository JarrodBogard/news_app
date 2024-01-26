import { json } from "react-router-dom";

const API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
//newsapi.org/v2/top-headlines?country=us&apiKey=ba1ffded503547d0ab97540410145bb5

export const articlesLoader = async () => {
  const response = await fetch(`${API_URL + import.meta.env.VITE_API_KEY}`);

  if (!response.ok) {
    throw json({ message: "Unable to fetch data" }, { status: 500 });
  }

  return response;
};

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=ba1ffded503547d0ab97540410145bb5
