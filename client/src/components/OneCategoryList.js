import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import OneCategoryListItem from "./OneCategoryListItem";
import TotalWeight from "./TotalWeight";

//LEADS TO ONE CATEGORY LIST ITEM

// Route "/buildapack/:categoryid"

//type_name
class OneCategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryListItem: []
    };

    console.log(props);
  }

  render() {
    let oneListItem = this.state.categoryListItem.map(singleListItem => {
      // return <p>{singleListItem.type_name}</p>;
      return (
        <OneCategoryListItem
          listItemName={singleListItem.type_name}
          typeid={singleListItem.type_id}
          catid={this.props.match.params.categoryid}
        />
      );
    });

    return (
      <div className="container sub-category">
        <TotalWeight />
        <h2>Pick A Sub-Category</h2>
        <h3>{oneListItem}</h3>
        
      </div>
    );
  }

  componentDidMount() {
    //make an AJAx request to API and retrieve category list
    let category_id = this.props.match.params.categoryid;
    axios.get(`/api/BAP/categories/${category_id}/geartypes`).then(res => {
      console.log(res);
      this.setState({
        categoryListItem: res.data
      });
    });
  }
}

export default OneCategoryList;
