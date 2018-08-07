import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BuildAPack extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/buildapack/essentials">Essentials</Link>
          </li>
          <li>Clothing</li>
          <li>Footwear</li>
          <li>Optional</li>
        </ul>
      </div>
    );
  }
}

export default BuildAPack;