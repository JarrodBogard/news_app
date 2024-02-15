import { json } from "react-router-dom";

const API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const api_key = import.meta.env.VITE_API_KEY;

export const initArticlesData = async () => {
  const response = await fetch(`${API_URL + api_key}`);
  console.log("fired init");

  if (!response.ok) {
    throw json(
      { message: "Unable to fetch data" },
      { status: response.status }
    );
  }

  const responseData = await response.json();
  return responseData.articles;

  // return response;
};

export const searchArticlesData = async (category) => {
  // const category = params.category; // moved to loader

  console.log("fired search");
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${category}&apiKey=${api_key}`
  );

  if (!response.ok) {
    throw json(
      { message: "Unable to fetch data" }, // status(401): "data fetch unauthorized"
      { status: response.status }
    );
  }

  const responseData = await response.json();
  return responseData.articles;
  // return response;
};

export const savedArticlesData = async (userId) => {
  console.log("fired saved");
  const response = await fetch(
    `https://react-course-http-tutorial-default-rtdb.firebaseio.com/favorites/${userId}.json`
  );

  if (!response.ok) {
    throw json(
      { message: "Unable to fetch data" }, // status(404): "This page does not exist"
      { status: response.status }
    );
  }

  const data = await response.json();

  if (!data) return null;

  const articles = [];

  for (const [key, value] of Object.entries(data)) {
    articles.push({
      id: key,
      name: value.name,
      author: value.author,
      title: value.title,
      description: value.description,
      content: value.content,
      publishedAt: value.publishedAt,
      url: value.url,
      urlToImage: value.urlToImage,
    });
  }
  // for (const key in data) {
  //   articles.push({
  //     id: key,
  //     name: data[key].name,
  //     author: data[key].author,
  //     title: data[key].title,
  //     description: data[key].description,
  //     content: data[key].content,
  //     publishedAt: data[key].publishedAt,
  //     url: data[key].url,
  //     urlToImage: data[key].urlToImage,
  //   });
  // }

  console.log(articles);

  return articles;
};