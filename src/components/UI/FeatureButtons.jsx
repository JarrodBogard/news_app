import classes from "../../css/Icons.module.css";

const FeatureButtons = ({ article, onLike }) => {
  return (
    <div className="d-flex justify-content-around">
      <span className={`material-symbols-outlined ${classes.icon}`}>share</span>
      <span className={`material-symbols-outlined ${classes.icon}`}>
        comment
      </span>
      <span
        className={`material-symbols-outlined ${classes.icon}`}
        onClick={(event) => onLike(event, article)}
      >
        favorite
      </span>
    </div>
  );
};

export default FeatureButtons;
