import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="Home-Page">
        <div className="main-content">
          <Link to="/hikes" className="home-item">
            Gear Checklists
          </Link>
        </div>
        <div className="main-content">
          <Link to="/mygear" className="home-item">
            My Gear
          </Link>
        </div>
        <div className="main-content">
          <Link to="/buildapack" className="home-item">
            Build A Pack{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
