import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MyGearSingle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.my_gear_name} </p>
        <p>{this.props.my_gear_weight} oz.</p>
      </div>
    );
  }
}

export default MyGearSingle;

