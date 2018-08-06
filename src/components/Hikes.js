import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Hikes extends React.Component {
  render() {
    return (
      <div>
        <h1>Gear Checklists For Your Next Adventure</h1>
        <ul>
          <li>
            <Link to="/hikes/tenessentials">
              The Ten Essentials for Every Trip
            </Link>
          </li>
          <li>
            <Link to="/hikes/threeseasongearlist">
              Three-Season Backpacking Gear
            </Link>
          </li>
          <li>
            <Link to="/hikes/ultralightgearlist">
              Ultralight Backpacking Gear
            </Link>
          </li>
          <li>Winter Backpacking Gear</li>
          <li>Desert Backpacking Gear</li>
        </ul>
      </div>
    );
  }
}

export default Hikes;
