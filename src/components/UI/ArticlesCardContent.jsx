const ArticlesCardContent = ({ items, onOpen }) => {
  return (
    <div className="row">
      {items.map((article) => (
        <div
          key={article.source.id + Math.random()}
          className="col-4 g-4"
          onClick={() => onOpen(article.title)}
        >
          <div
            className="card text-center shadow border border-0 rounded-4"
            style={{ width: "22rem", height: "22rem" }}
          >
            <div className="card-body d-flex flex-column justify-content-around bg-dark bg-gradient rounded-3">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="card-img"
                style={{ maxHeight: "200px" }}
              />
              <h5 className="card-text text-white">{article.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesCardContent;
