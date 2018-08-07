import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Essentials extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Backpacks</li>
          <li>Shelters</li>
          <li>Sleeping Bags</li>
          <li>Sleeping Pads</li>
          <li>Stoves</li>
          <li>Cookware</li>
          <li>Water filters/purifiers</li>
          <li>Water Bottles/ Reservoirs</li>
          <li>Headlamps</li>
          <li>Navigation</li>
          <li>First Aid</li>
          <li>Repair Kit</li>
          <li>Other</li>
        </ul>
      </div>
    );
  }
}

export default Essentials;
