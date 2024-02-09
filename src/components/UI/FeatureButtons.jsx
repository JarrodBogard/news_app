import { useLocation } from "react-router-dom";
import classes from "../../css/Icons.module.css";

const FeatureButtons = ({ article, onLike, onUnlike }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="d-flex justify-content-around">
      <span className={`material-symbols-outlined ${classes.icon}`}>share</span>
      <span className={`material-symbols-outlined ${classes.icon}`}>
        comment
      </span>
      <span
        className={`material-symbols-outlined ${classes.icon}`}
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
