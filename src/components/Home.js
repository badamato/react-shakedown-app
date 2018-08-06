import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/hikes">Gear Checklists</Link>
        <Link to="/mygear">My Gear</Link>
        <Link to="/buildapack">Build A Pack </Link>
      </div>
    );
  }
}

export default Home;
