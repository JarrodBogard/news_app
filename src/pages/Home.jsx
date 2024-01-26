import { Form } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
const HomePage = () => {
  const { articles } = useLoaderData();
  //   keys: author, content, description, publishedAt, source {id, name}, title, url, urlToImage
  const navigate = useNavigate();

  const handleSearch = (selection) => {
    navigate("/articles?query=" + selection);
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
      <Form action="articles">
        <h1>Search Articles</h1>
        <Form.Control
          type="text"
          name="query"
          placeholder="Search articles here..."
        />
      </Form>
      <div onClick={() => handleSearch("finance")}>Finance</div>
      <div onClick={() => handleSearch("politics")}>Politics</div>
      <div onClick={() => handleSearch("sports")}>Sports</div>
      <div onClick={() => handleSearch("health")}>Health</div>
      <div onClick={() => handleSearch("technology")}>Technology</div>
      {displayData}
    </div>
  );
};

export default HomePage;
