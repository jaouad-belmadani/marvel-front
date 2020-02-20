import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Characters from "./containers/Characters";
import RelatedComics from "./containers/RelatedComics";
import Header from "./components/Header";

import Comics from "./containers/Comics";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/relatedcomics/:id">
          <RelatedComics />
        </Route>
        <Route exact path="/comics">
          <Comics />
        </Route>
        <Route exact path="/">
          <Characters />
        </Route>
      </Switch>
      <footer>
        <p>Designed by-jaouad</p>
      </footer>
    </Router>
  );
}

export default App;
