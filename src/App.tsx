import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "./components/Container";
import ListOfUsers from "./pages/ListOfUsers";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <ListOfUsers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
