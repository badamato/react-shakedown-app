import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Category from "./Category";
import TenEssentials from "./TenEssentials";
import TotalWeight from "./TotalWeight";

import DummyCategories from "../Categories"
import DummyListOfGearTypes from "../ListOfGearTypes"

class BuildAPack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        category: DummyCategories, 
        gearType: DummyListOfGearTypes     
    };
  }
  //make an AJAX request to API and retrieve all categories and render array to page
 //component will  mount -once API has been recieved 
 //handle add selected products
 //handle remove products
 //sum total weight
 
  render() {
    let allcategories = this.state.category.map(singlecategory =>{
      return <p>{singlecategory.cat_name} </p>
    })
    return (
      <div>
       <h1>Pick a category</h1>
       <h2>{allcategories}</h2>
     

      </div>
    );
  }
}

export default BuildAPack;
