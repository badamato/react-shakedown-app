import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MyGearSingle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container my-gear-card">
        <img src="https://static.thenounproject.com/png/254126-200.png" className="img-thumbnail gear-img"/>
        <h4><strong>Name</strong>: {this.props.my_gear_name}</h4>
        <h5><strong>Weight</strong>:  {this.props.my_gear_weight} oz.</h5>
      </div>
    );
  }
}

export default MyGearSingle;
