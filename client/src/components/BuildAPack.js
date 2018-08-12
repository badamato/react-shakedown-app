import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import Category from "./Category";
import TenEssentials from "./TenEssentials";
import TotalWeight from "./TotalWeight";

//BUILD A PACK LANDING
//LEADS TO CATEGORY

class BuildAPack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }

  render() {
    let allcategories = this.state.category.map(singlecategory => {
      return (
        <Category
          name={singlecategory.cat_name}
          catId={singlecategory.cat_id}
        />
      );
    });

    return (
      <div>
        <h1>Pick a category</h1>
        <h2>{allcategories}</h2>
        <TotalWeight />
      </div>
    );
  }

  componentDidMount() {
    //make an AJAX request to API and retrieve all categories and render array to page
    axios.get("/api/BAP/categories").then(res => {
      console.log(res);
      this.setState({
        category: res.data
      });
    });

    //handle add selected products
    //handle remove products
    //sum total weight
  }
}

export default BuildAPack;
