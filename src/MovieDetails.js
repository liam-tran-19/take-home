import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Form, Col, Row, Button, Card } from "react-bootstrap";
const MovieDetails = () => {
  const { state } = useLocation();
  const history = useHistory();
  // return <div><button onClick={()=> history.push('/', state)}>back</button></div>;
  return (
    <div className="list">
      <Button variant="secondary" onClick={() => history.push("/", state)}>
        Back
      </Button>
      <Card>
        <Card.Title style={{ textAlign: "center" }}>{state.Title}</Card.Title>
        <Card.Img variant="top" src={state.Poster} />
        <Card.Body>
          <Card.Text>
            Year: <b>{state.Year}</b>
          </Card.Text>
          <Card.Text>
            Type: <b>{state.Type}</b>
          </Card.Text>
          <Card.Text>
            Released: <b>{state.Released}</b>
          </Card.Text>
          <Card.Text>
            Genre: <b>{state.Genre}</b>
          </Card.Text>
          <Card.Text>
            Ratings:{" "}
            {state.Ratings.map((rating) => (
              <div>
                <p>
                  Source: <b>{rating.Source}</b>
                </p>
                <p>
                  Value: <b>{rating.Value}</b>
                </p>
              </div>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDetails;
