import React, { useState } from "react";
import { Form, Col, Row, Button, Card} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetMovieList } from "./redux/actions";
import { useHistory, useLocation } from "react-router-dom";

const MovieList = () => {
  const options = [
    {
      label: "movie",
      value: "movie",
    },
    {
      label: "series",
      value: "series",
    },
    {
      label: "episode",
      value: "episode",
    },
  ];

  const history = useHistory();
  const { state } = useLocation();

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (state) {
      document.getElementById("search").value = state.Title;
      document.getElementById("type").value = state.Type;
    }
  }, [state]);

  const { data } = useSelector((state) => state.movieState);
  console.log(data);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(GetMovieList(title, type, year));
  };
  const closeModal = () => {};
  return (
    <div className="list">
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Search
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Search"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="search"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Type
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
              id="type"
            >
              <option disabled selected>
                Choose Type
              </option>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Year
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>

      {data.Title && (
        <Card>
          <Card.Title style={{ textAlign: "center" }}>{data.Title}</Card.Title>
          <Card.Img variant="top" src={data.Poster} />
          <Card.Body>
            <Card.Text>
              Year: <b>{data.Year}</b>
            </Card.Text>
            <Card.Text>
              Type: <b>{data.Type}</b>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={() => history.push("/details", data)}>
              Details
            </Button>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
};

export default MovieList;
