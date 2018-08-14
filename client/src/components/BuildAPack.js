import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import Category from "./Category";
import TenEssentials from "./TenEssentials";

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
      <div className="container" id="pick-it">
        <div className="Intro-BAP">
          <h1>Ready to build your pack?</h1>
          <p>
            Head on down the trail of categories and pick your gear. As you
            click on an item, the weight will be added to the counter above. You
            can view the gear you've added by clicking on the "View My Pack"
            button above. Once you're happy with the weight, load on up and get
            outside!{" "}
          </p>
        </div>
        <h2>Pick a category</h2>

        <h3>{allcategories}</h3>
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
