import { useFetcher } from "react-router-dom";
import FeatureButtons from "../UI/FeatureButtons";

import classes from "../../css/FeatureButtons.module.css";

// import { formatDistanceToNow } from "date-fns";
const ArticleCardContent = ({ article }) => {
  const { submit } = useFetcher();

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  const formattedTime = new Date(article.publishedAt).toLocaleTimeString(
    "en-US"
  );

  const handleLike = (event, article) => {
    event.stopPropagation();
    submit(article, { method: "POST", action: "/add" });
  };

  return (
    <>
      <div className="card border border-0 shadow">
        <img
          src={article.urlToImage}
          className="card-img-top "
          alt={article.title}
        />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.content}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Published: {formattedDate}</li>
          <li className="list-group-item">
            {" "}
            Author: {article.author ? article.author : "unknown"}
          </li>
          <li className="list-group-item">Publisher: {article.source.name}</li>
        </ul>
      </div>
      <div className={classes.features}>
        <FeatureButtons article={article} onLike={handleLike} />
      </div>
    </>
  );
};

export default ArticleCardContent;
