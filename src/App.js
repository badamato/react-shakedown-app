import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Hikes from "./components/Hikes";
import MyGear from "./components/MyGear";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Shakedown</h1>
          </header>
          <Route exact path="/" component={Home} />
          <Route exact path="/hikes" component={Hikes} />
          <Route exact path="/mygear" component={MyGear}/>

        </div>
      </Router>
    );
  }
}

export default App;
//comment
