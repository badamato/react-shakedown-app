import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MyGearSingle extends React.Component {
  constructor(props) {
    super(props);

    this.defaultImg = "https://static.thenounproject.com/png/254126-200.png";
  }
  render() {
    return (
      <div className="container my-gear-card">
        <img
          src={this.props.my_gear_img || this.defaultImg}
          className="img-thumbnail gear-img"
        />
        <h4>
          <strong>Name</strong>: {this.props.my_gear_name}
        </h4>
        <h5>
          <strong>Weight</strong>: {this.props.my_gear_weight} oz.
        </h5>

        <h1
          className="trash-it"
          onClick={this.onDelete.bind(this, this.props.invID)}
        >
          <i class="icon-trash" />
          delete this item
        </h1>
      </div>
    );
  }

  onDelete(inv_id) {
    // console.log(inv_id);
    this.props.deleteGear(inv_id);
  }
}

export default MyGearSingle;
