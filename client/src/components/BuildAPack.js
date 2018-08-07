import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Category from "./Category";

class BuildAPack extends React.Component {
  //make an AJAX request to retrieve all categories and render array to page
  render() {
    return (
      <div>
        <div>
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    );
  }
}

export default BuildAPack;
