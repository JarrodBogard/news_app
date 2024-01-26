import { Form } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
const HomePage = () => {
  const { articles } = useLoaderData();
  //   keys: author, content, description, publishedAt, source {id, name}, title, url, urlToImage
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    navigate("articles");
  };

  const displayData = (
    <ul>
      {articles.map((article) => (
        <li key={article.source.id + Math.random()}>
          <h1>{article.title}</h1>
          <img src={article.urlToImage} alt={article.title} />
          <p>{article.description}</p>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <Form onSubmit={handleSearch}>
        <h1>Search Articles</h1>
        <Form.Control type="text" placeholder="Search articles here..." />
      </Form>
      {displayData}
    </div>
  );
};

export default HomePage;
