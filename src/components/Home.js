import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/hikes">Pick a Hike</Link>
        <Link to="/mygear">My Gear</Link>
        <a>Build A Pack </a>
      </div>
    );
  }
}

export default Home;
