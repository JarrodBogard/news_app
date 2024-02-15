import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../../firebase";
import classes from "../../css/Icons.module.css";
import { savedArticlesData } from "../../util/http";

const FeatureButtons = ({ article, onLike, onUnlike }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [saved, setSaved] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);

        const fetchSaved = async () => {
          const savedArticles = await savedArticlesData(uid);
          if (!savedArticles) {
            return;
          }

          const existingArticle = savedArticles.find(
            (savedArticle) => savedArticle.title === article.title
          );

          if (existingArticle) {
            setSaved(true);
          }
        };
        fetchSaved();
      } else {
        setUserId(null);
      }
    });
  }, [article]);

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
            ? (event) => onUnlike(event, { id: article.id, userId: userId })
            : (event) => onLike(event, { ...article, userId: userId })
        }
      >
        favorite
      </span>
    </div>
  );
};

export default FeatureButtons;
