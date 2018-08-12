import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="Home-Page">
        <Link to="/hikes" className="home-item">Gear Checklists</Link>

        <Link to="/mygear" className="home-item">My Gear</Link>

        <Link to="/buildapack" className="home-item">Build A Pack </Link>
      </div>
    );
  }
}

export default Home;
