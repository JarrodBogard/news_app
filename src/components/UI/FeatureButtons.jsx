import { useEffect, useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from "../../css/Icons.module.css";
import { savedArticlesData } from "../../util/http";

const FeatureButtons = ({ article, onLike, onUnlike, savedArticles }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [saved, setSaved] = useState(false);

  useLayoutEffect(() => {
    if (savedArticles.length) {
      const existingArticle = savedArticles.find(
        (savedArticle) => savedArticle.title === article.title
      );
      if (existingArticle) {
        setSaved(true);
      }
    }
  }, [article, savedArticles]);

  // useEffect(() => {
  //   const fetchSaved = async () => {
  //     const savedArticles = await savedArticlesData();
  //     if (
  //       savedArticles.find(
  //         (savedArticle) => savedArticle.title === article.title
  //       )
  //     ) {
  //       setSaved(true);
  //     }
  //   };
  //   fetchSaved();
  // }, [article]);

  return (
    <div className="d-flex justify-content-around">
      <span className={`material-symbols-outlined ${classes.icon}`}>share</span>
      <span className={`material-symbols-outlined ${classes.icon}`}>
        comment
      </span>
      <span
        className={`material-symbols-outlined ${saved ? classes.fill : ""} ${
          classes.icon
        } `}
        onClick={
          pathname === "/saved"
            ? (event) => onUnlike(event, article.id)
            : (event) => onLike(event, article)
        }
      >
        favorite
      </span>
    </div>
  );
};

export default FeatureButtons;
