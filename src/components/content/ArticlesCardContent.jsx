import { useFetcher } from "react-router-dom";

import classes from "../../css/Icons.module.css";

const ArticlesCardContent = ({ items, onOpen }) => {
  const { submit } = useFetcher();

  const handleLike = (event, article) => {
    event.stopPropagation();
    submit(article, { method: "POST", action: "add" });
  };

  return (
    <div className="row row-gap-2 align-items-center">
      {items.map((article) => (
        <div
          key={article.source.id + Math.random()}
          className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mt-3"
          onClick={() => onOpen(article.title)}
        >
          <div
            className="card text-center shadow border border-0 rounded-4"
            style={{ width: "22rem", height: "22rem" }}
          >
            <div className="card-body d-flex flex-column justify-content-between bg-dark bg-gradient rounded-3">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="card-img"
                style={{ maxHeight: "200px" }}
              />
              <h5 className="card-text text-white">
                {article.title.substring(0, 100) + "..."}
              </h5>
              <div className="d-flex justify-content-around">
                <span className={`material-symbols-outlined ${classes.icon}`}>
                  share
                </span>
                <span className={`material-symbols-outlined ${classes.icon}`}>
                  comment
                </span>
                <span
                  className={`material-symbols-outlined ${classes.icon}`}
                  onClick={(event) => handleLike(event, article)}
                >
                  favorite
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesCardContent;
