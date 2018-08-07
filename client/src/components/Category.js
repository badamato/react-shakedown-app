import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gearType: [
        {
          name: "backpacks",
          content: 20
        },
        {
          name: "shelter",
          content: 6
        },
        {
          name: "Sleeping Bags",
          content: 2
        },
        {
          name: "Bugs",
          content: 7
        }
      ]
    };
  }

  //AJAX my ass some of that category goodness, render everything in that catergory to the page
  render() {
    return (
      <div>
        <h2>Category</h2>

        <p>Here goes your list of gear in the category</p>
        <Link to="/buildapack/:category/:geartype">
          <p>{this.state.gearType[0].name}</p>
        </Link>
      </div>
    );
  }
}

export default Category;
