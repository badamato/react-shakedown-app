import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/hikes">Gear Checklists</Link>
          </li>
          <li>
            <Link to="/mygear">My Gear</Link>
          </li>
          <li>
            <Link to="/buildapack">Build A Pack </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
