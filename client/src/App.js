import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Hikes from "./components/Hikes";
import TenEssentials from "./components/TenEssentials";
import ThreeSeasonGearList from "./components/ThreeSeasonGearList";
import UltralightGearList from "./components/UltralightGearList";
import WinterGearList from "./components/WinterGearList";
import DesertGearList from "./components/DesertGearList";
import MyGear from "./components/MyGear";
import BuildAPack from "./components/BuildAPack";
import Category from "./components/Category";

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
          {/* Gear Checklists */}
          <Route exact path="/hikes" component={Hikes} />
          <Route exact path="/hikes/tenessentials" component={TenEssentials} />
          <Route
            exact
            path="/hikes/threeseasongearlist"
            component={ThreeSeasonGearList}
          />
          <Route
            exact
            path="/hikes/ultralightgearlist"
            component={UltralightGearList}
          />
          <Route
            exact
            path="/hikes/wintergearlist"
            component={WinterGearList}
          />
          <Route
            exact
            path="/hikes/desertgearlist"
            component={DesertGearList}
          />
          {/* My Gear Inventory */}
          <Route exact path="/mygear" component={MyGear} />
          {/* Build a Pack */}
          <Route exact path="/buildapack" component={BuildAPack} />
          <Route exact path="/buildapack/:category" component={Category} />
        </div>
      </Router>
    );
  }
}

export default App;
//comment
