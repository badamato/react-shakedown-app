import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OneCategoryList from "./OneCategoryList";

//PULLS IN FROM IN BUILD A PACK
//LEADS TO ONE CATEGORY LIST

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  //AJAX  some of that category goodness, render everything in that catergory to the page
  render() {
    return (
      <div>
        <h2>
          <Link to={`/buildapack/${this.props.catId}`}>{this.props.name}</Link>
        </h2>
      </div>
    );
  }
}

export default Category;
