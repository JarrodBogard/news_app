import { json } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
let uid;

onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid;
  }
});

const API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const api_key = import.meta.env.VITE_API_KEY;

export const initArticlesData = async () => {
  const response = await fetch(`${API_URL + api_key}`);

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

export const savedArticlesData = async () => {
  const response = await fetch(
    `https://react-course-http-tutorial-default-rtdb.firebaseio.com/favorites/${uid}.json`
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
  return articles;
};

// for (const key in data) {
//   for (const obj in data[key]) {
//     articles.push({
//       id: obj,
//       name: data[key][obj].name,
//       author: data[key][obj].author,
//       title: data[key][obj].title,
//       description: data[key][obj].description,
//       content: data[key][obj].content,
//       publishedAt: data[key][obj].publishedAt,
//       url: data[key][obj].url,
//       urlToImage: data[key][obj].urlToImage,
//     });
//   }
