import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OneCategoryList from "./OneCategoryList";

import DummyListOfGearTypes from "../ListOfGearTypes";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gearType: DummyListOfGearTypes
    };
  }

  //AJAX my ass some of that category goodness, render everything in that catergory to the page
  render() {
    let listGear = this.state.gearType.map(listitem => {
      return listitem.type_name
    })
    return (
      <div>
        <h2>
          <Link to={`/buildapack/${this.props.name}`}>{this.props.name}</Link>
        </h2>
        {listGear}
      </div>
    );
  }
}

export default Category;
