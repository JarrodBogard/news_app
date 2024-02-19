import { useState, useLayoutEffect } from "react";
import classes from "../../css/Icons.module.css";

const FeatureButtons = ({ article, onLike, onUnlike, savedArticles }) => {
  const [existingArticle, setExistingArticle] = useState(null);

  useLayoutEffect(() => {
    if (savedArticles && savedArticles.length) {
      const foundArticle = savedArticles.find(
        (savedArticle) => savedArticle.title === article.title
      );
      if (foundArticle) {
        setExistingArticle(foundArticle);
      }
    }
  }, [article, savedArticles]);

  return (
    <div className="d-flex justify-content-around">
      <span className={`material-symbols-outlined ${classes.icon}`}>share</span>
      <span className={`material-symbols-outlined ${classes.icon}`}>
        comment
      </span>
      <span
        className={`material-symbols-outlined ${
          existingArticle ? classes.fill : ""
        } ${classes.icon} `}
        onClick={
          existingArticle
            ? (event) => onUnlike(event, existingArticle.id)
            : (event) => onLike(event, article)
        }
      >
        favorite
      </span>
    </div>
  );
};

export default FeatureButtons;
