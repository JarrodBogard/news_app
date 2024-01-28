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
    <div className="row">
      {articles.map((article) => (
        <div key={article.source.id + Math.random} className="col-4 g-4">
          <div
            className="card bg-light"
            style={{ width: "22rem", height: "22rem" }}
          >
            <div className="card-body d-flex flex-column justify-content-around text-center shadow">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="rounded shadow"
                style={{ height: "200px" }}
              />
              <h5>{article.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container">
      <Form className="w-50 m-auto" action="articles">
        <h1 className="h-1 text-center text-muted text-secondary m-2">
          Article Search
        </h1>
        <Form.Control
          type="text"
          name="query"
          placeholder="Search articles here..."
        />
      </Form>
      <div className="container m-2 d-flex justify-content-around">
        <div onClick={() => handleSearch("finance")}>Finance</div>
        <div onClick={() => handleSearch("politics")}>Politics</div>
        <div onClick={() => handleSearch("sports")}>Sports</div>
        <div onClick={() => handleSearch("health")}>Health</div>
        <div onClick={() => handleSearch("technology")}>Technology</div>
      </div>
      {displayData}
    </div>
  );
};

export default HomePage;
