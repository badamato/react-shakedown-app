import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OneGearType from "./OneGearType";

class OneCategoryListItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <p>
          <Link to={`/buildapack/${this.props.catid}/${this.props.typeid}`}>
            {this.props.listItemName}
          </Link>
        </p>
      </div>
    );
  }
}

export default OneCategoryListItem;
