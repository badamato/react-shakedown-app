import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navigation from "./components/Navigations";
import Home from "./components/Home";
import Hikes from "./components/Hikes";
import TenEssentials from "./components/TenEssentials";
import ThreeSeasonGearList from "./components/ThreeSeasonGearList";
import WinterGearList from "./components/WinterGearList";
import DesertGearList from "./components/DesertGearList";
import MyGear from "./components/MyGear";
import BuildAPack from "./components/BuildAPack";
import Category from "./components/Category";
import OneCategoryList from "./components/OneCategoryList";
import OneGearType from "./components/OneGearType";
import About from "./components/About";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <header className="header">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <h1 className="App-title"> Shakedown</h1>
            </header>
          </div>
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
          {/* Route to Categories */}
          <Route exact path="/buildapack" component={BuildAPack} />
          {/* Route to Sub-categories */}
          <Route
            exact
            path="/buildapack/:categoryid"
            component={OneCategoryList}
          />
          {/* Route to Sub-sub-categories */}
          <Route
            exact
            path="/buildapack/geartype/:typeid"
            component={OneGearType}
          />
          {/* About */}
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
//comment
