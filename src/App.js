import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./containers/Home/Home";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

export default App;
