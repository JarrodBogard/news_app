import { useLoaderData } from "react-router-dom";
const Card = () => {
  const { articles } = useLoaderData();
  //   keys: author, content, description, publishedAt, source {id, name}, title, url, urlToImage
  return (
    <div className="row">
      {articles.map((article) => (
        <div key={article.source.id + Math.random} className="col-4 g-4">
          <div
            className="card bg-light"
            style={{ width: "22rem", height: "22rem" }}
          >
            <div className="card-body d-flex flex-column justify-content-around text-center bg-dark bg-gradient rounded">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="card-img"
                // style={{ height: "200px" }}
              />
              <h5 className="card-text text-white">{article.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
