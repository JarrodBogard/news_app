import { useFetcher } from "react-router-dom";
import FeatureButtons from "../UI/FeatureButtons";

import classes from "../../css/FeatureButtons.module.css";

// import { formatDistanceToNow } from "date-fns";
const ArticleCardContent = ({ article, onClose }) => {
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
    const formatData = {
      ...article,
      name: article.source ? article.source.name : article.name,
    };
    submit(formatData, { method: "POST", action: "/add" });
  };

  const handleUnlike = (event, id) => {
    event.stopPropagation();
    submit({ id: id }, { method: "DELETE", action: "/delete" });
    setTimeout(() => {
      onClose();
    }, 1000);
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
          <li className="list-group-item">
            Publisher: {article.source ? article.source.name : article.name}
          </li>
        </ul>
      </div>
      <div className={classes.features}>
        <FeatureButtons
          article={article}
          onLike={handleLike}
          onUnlike={handleUnlike}
        />
      </div>
    </>
  );
};

export default ArticleCardContent;
