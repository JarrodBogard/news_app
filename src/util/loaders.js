import { defer } from "react-router-dom";

import {
  initArticlesData,
  searchArticlesData,
  savedArticlesData,
} from "./http";

export const initDataLoader = () => {
  return defer({
    articles: initArticlesData(),
  });
};

export const searchDataLoader = ({ params }) => {
  const category = params.category;
  return defer({
    articles: searchArticlesData(category),
  });
};

export const savedDataLoader = () => {
  return defer({
    articles: savedArticlesData(),
  });
};
