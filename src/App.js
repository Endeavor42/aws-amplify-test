import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                <p>This is the best hello world in the world!</p>
              </p>
              <a href="/form">Sign In</a>
            </header>
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
