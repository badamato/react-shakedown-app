import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class GearType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneGearType: "backpacks"
    };
  }

  //AJAX my ass some specific gear in a specific category
  render() {
    return (
      <div>
        <h2>One Gear Type</h2>

        <p>{this.state.oneGearType}</p>
      </div>
    );
  }
}

export default GearType;
