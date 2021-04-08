import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Element from "./Element";
import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <Switch>
            <Route path="/" exact component={MovieList} />
            <Route path="/details" component={MovieDetails} />
            <Route path="/element" component={Element} />
          </Switch>
        </Router>
      </div>
    </Container>
  );
}

export default App;