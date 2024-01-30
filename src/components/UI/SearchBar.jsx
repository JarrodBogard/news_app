import { Form } from "react-bootstrap";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = (selection) => {
    navigate("/articles?query=" + selection + "&page=1");
  };

  return (
    <>
      <h1 className="h-1 text-center text-white m-2">Article Search</h1>
      <Form className="w-50 m-auto" action="articles">
        <Form.Control
          className="shadow"
          type="text"
          name="query"
          placeholder="Search articles here..."
        />
      </Form>
      <div className="container mt-2 d-flex justify-content-around text-white">
        <div onClick={() => handleSearch("finance")}>Finance</div>
        <div onClick={() => handleSearch("politics")}>Politics</div>
        <div onClick={() => handleSearch("sports")}>Sports</div>
        <div onClick={() => handleSearch("health")}>Health</div>
        <div onClick={() => handleSearch("technology")}>Technology</div>
      </div>
    </>
  );
};

export default SearchBar;
