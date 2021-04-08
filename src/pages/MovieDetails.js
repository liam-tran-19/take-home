import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Button, Card, Navbar } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

const MovieDetails = () => {
  const { state } = useLocation();
  const history = useHistory();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div>
      <div>
        <Navbar>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <b>{currentUser.email}</b>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
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
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default MovieDetails;
