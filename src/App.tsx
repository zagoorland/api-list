import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "./components/Container";
import ListOfUsers from "./pages/ListOfUsers";
import SearchUser from "./pages/SearchUser";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <ListOfUsers />
          </Route>
          <Route path="/search">
            <SearchUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
