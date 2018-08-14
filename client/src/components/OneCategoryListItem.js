import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OneGearType from "./OneGearType";

//LEADS TO ONE GEAR TYPE

class OneCategoryListItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <p className="big-4">
          <Link to={`/buildapack/geartype/${this.props.typeid}`}>
            {this.props.listItemName}
          </Link>
        </p>
      </div>
    );
  }
}

export default OneCategoryListItem;
