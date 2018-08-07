import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Category from "./Category";
import TenEssentials from "./TenEssentials";

class BuildAPack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        {
          name: "essentials",
          content: 20
        },
        {
          name: "clothing",
          content: 6
        },
        {
          name: "footwear",
          content: 2
        },
        {
          name: "optional",
          content: 7
        }
      ]
    };
  }

  //make an AJAX request to API and retrieve all categories and render array to page
  render() {
    return (
      <div>
        <div>
          <Link to="/buildapack/:category">
            <p>{this.state.category[0].name}</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default BuildAPack;
