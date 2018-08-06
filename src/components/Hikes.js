import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Hikes extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Hike 1</li>
          <li>Hike 2</li>
          <li>Hike 3</li>
          <li>Hike 4</li>
          <li>Hike 5</li>
        </ul>
      </div>
    );
  }
}

export default Hikes;
