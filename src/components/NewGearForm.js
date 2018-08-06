import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NewGearForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      image: "",
      weight: 0,
      gearType: "",
      category: ""
    };
  }
  render() {
    return (
      <form>
        <input placeholder="Gear Name" value={this.state.name} />
      </form>
    );
  }
}

export default NewGearForm;