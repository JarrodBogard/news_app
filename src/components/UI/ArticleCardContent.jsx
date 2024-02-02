// import { formatDistanceToNow } from "date-fns";
const ArticleCardContent = ({ article }) => {
  const date = new Date(article.publishedAt);
  return (
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
        <li className="list-group-item">
          Published at: {date.toLocaleString()}
        </li>
        <li className="list-group-item">
          {" "}
          Author: {article.author ? article.author : "unknown"}
        </li>
        <li className="list-group-item">Publisher: {article.source.name}</li>
      </ul>
    </div>
  );
};

export default ArticleCardContent;
