import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
import GearType from "./components/GearType";
import About from "./components/About";

import logo from "./logo.svg";
import "./App.css";

const Navigation = props => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/hikes">Gear Checklists</NavLink>
      </li>
      <li>
        <NavLink to="/mygear">My Gear</NavLink>
      </li>
      <li>
        <NavLink to="/buildapack">Build A Pack</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Shakedown</h1>
          </header>
          {/* Navigation */}
          <Navigation />
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
          <Route path="/buildapack" component={BuildAPack} />

          <Route
            exact
            path="/buildapack/:category/:geartype"
            component={GearType}
          />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
//comment
