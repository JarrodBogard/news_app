import { useLoaderData } from "react-router-dom";
import ArticlePage from "../../pages/Article";
import { useState } from "react";

const Card = () => {
  const { articles } = useLoaderData();
  //   keys: author, content, description, publishedAt, source {id, name}, title, url, urlToImage
  const [isToggled, setIsToggled] = useState(false);
  const [filteredArticle, setFilteredArticle] = useState(null);

  const handleClick = (selection) => {
    setIsToggled(!isToggled);
    setFilteredArticle(
      ...articles.filter((article) => article.title === selection)
    );
  };

  const cardData = (
    <div className="row">
      {articles.map((article) => (
        <div
          key={article.source.id + Math.random()}
          className="col-4 g-4"
          onClick={() => handleClick(article.title)}
        >
          <div
            className="card bg-light text-center  "
            style={{ width: "22rem", height: "22rem" }}
          >
            <div className="card-body d-flex flex-column justify-content-around bg-dark bg-gradient rounded">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="card-img"
              />
              <h5 className="card-text text-white">{article.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {isToggled && <ArticlePage article={filteredArticle} />}
      {cardData}
    </>
  );
};

export default Card;
