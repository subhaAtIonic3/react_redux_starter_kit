import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./containers/Home/Home";
import Details from "./containers/Details/Details";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/details" component={Details} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

export default App;
