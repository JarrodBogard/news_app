import { useFetcher } from "react-router-dom";

import FeatureButtons from "../UI/FeatureButtons";

const ArticlesCardContent = ({ items, onOpen }) => {
  const { submit } = useFetcher();

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
  };

  return (
    <div className="row row-gap-2 align-items-center">
      {items.map((article) => (
        <div
          key={
            article.source
              ? article.source.id + Math.random()
              : article.id + Math.random()
          }
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
                alt={article.title.substring(0, 100) + "..."}
                className="card-img"
                style={{
                  height: "160px",
                  // objectFit: "cover",
                }}
              />
              <h5 className="card-text text-white">
                {article.title.substring(0, 100) + "..."}
              </h5>
              <FeatureButtons
                article={article}
                onLike={handleLike}
                onUnlike={handleUnlike}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesCardContent;
