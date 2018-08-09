import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //AJAX my ass some of that category goodness, render everything in that catergory to the page
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Category;
