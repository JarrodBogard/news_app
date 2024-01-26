import { useLoaderData } from "react-router";

const ArticlesPage = () => {
  const { articles } = useLoaderData();
  //   keys: author, content, description, publishedAt, source {id, name}, title, url, urlToImage

  const displayData = (
    <ul>
      {articles.map((article) => (
        <li key={article.source.id + Math.random()}>
          <h1>{article.title}</h1>
          <img src={article.urlToImage} alt={article.title} />
        </li>
      ))}
    </ul>
  );

  return <>{displayData}</>;
};

export default ArticlesPage;
