import { Form } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
const HomePage = () => {
  const { articles } = useLoaderData();
  //   keys: author, content, description, publishedAt, source {id, name}, title, url, urlToImage
  const navigate = useNavigate();

  const handleSearch = (selection) => {
    navigate("/articles?query=" + selection);
  };

  // const displayData = (
  //   <ul className="row list-group" style={{ width: "18rem" }}>
  //     {articles.map((article) => (
  //       <li
  //         style={{ height: "20rem" }}
  //         className="list-group-item w-100 col-4"
  //         key={article.source.id + Math.random()}
  //       >
  //         <img
  //           className="card-img-top rounded w-100"
  //           src={article.urlToImage}
  //           alt={article.title}
  //         />

  //         <div className="card-body w-100">
  //           <h5 className="card-title">{article.title}</h5>
  //           {/* <p className="card-text">{article.description}</p> */}
  //           <a href="#" className="btn btn-primary">
  //             Go somewhere
  //           </a>
  //         </div>
  //       </li>
  //     ))}
  //   </ul>
  // );

  const displayData = (
    <div className="row">
      {articles.map((article) => (
        <div key={article.source.id + Math.random} className="col-4 g-4">
          <div className="card">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5>{article.title}</h5>
              <p>{article.description}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // const displayData = (
  //   <ul className="row justify-content-around ">
  //     {articles.map((article) => (
  //       <li
  //         className="list-group-item m-2 col-3"
  //         key={article.source.id + Math.random()}
  //       >
  //         <h1>{article.title}</h1>
  //         <img
  //           className="img-thumbnail"
  //           src={article.urlToImage}
  //           alt={article.title}
  //         />
  //         <p>{article.description}</p>
  //       </li>
  //     ))}
  //   </ul>
  // );

  return (
    <div className="container">
      <Form className="w-50 m-auto" action="articles">
        <h1 className="h-1 text-center text-muted">Article Search</h1>
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
