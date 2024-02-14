import { json } from "react-router-dom";

const API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const api_key = import.meta.env.VITE_API_KEY;

export const initArticlesLoader = async () => {
  const response = await fetch(`${API_URL + api_key}`);

  if (!response.ok) {
    throw json(
      { message: "Unable to fetch data" },
      { status: response.status }
    );
  }

  return response;
};

export const searchArticlesLoader = async ({ params }) => {
  const category = params.category;

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${category}&apiKey=${api_key}`
  );
  console.log(response);

  if (!response.ok) {
    throw json(
      { message: "Unable to fetch data" }, // status(401): "data fetch unauthorized"
      { status: response.status }
    );
  }

  return response;
};

export const savedArticlesLoader = async () => {
  const response = await fetch(
    "https://react-course-http-tutorial-default-rtdb.firebaseio.com/favorites.json"
  );

  if (!response.ok) {
    throw json(
      { message: "Unable to fetch data" }, // status(404): "This page does not exist"
      { status: response.status }
    );
  }

  const data = await response.json();

  const articles = [];

  for (const key in data) {
    articles.push({
      id: key,
      name: data[key].name,
      author: data[key].author,
      title: data[key].title,
      description: data[key].description,
      content: data[key].content,
      publishedAt: data[key].publishedAt,
      url: data[key].url,
      urlToImage: data[key].urlToImage,
    });
  }

  return { articles };
};
