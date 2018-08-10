import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import DummyEssentialsList from "../EssentialsList";
import DummyClothingList from "../ClothingList";
import DummyFootwearList from "../FootwearList";
import DummyOptionalList from "../OptionalList";

// Route "/buildapack/:categoryid"
  

class OneCategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryListItem: []
    }

    console.log(props);
   
    };



  render() {
    return (
      <div>
        Here's the list, mutha fucka:  
      </div>
    );
  }

  componentDidMount(){
    //make an AJAx request to API and retrieve category list
    axios.get(`/`)
  }
}

export default OneCategoryList;
