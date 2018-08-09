import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import DummyEssentialsList from "../EssentialsList";
import DummyClothingList from "../ClothingList";
import DummyFootwearList from "../FootwearList";
import DummyOptionalList from "../OptionalList";

// this is going away when we ajax for real
let dummyData = [
  [],
  DummyEssentialsList,
  DummyClothingList,
  DummyFootwearList,
  DummyOptionalList
];

class OneCategoryList extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.state = {
      categoryList: []
    };
  }

  componentDidMount() {
    // axios thing

    // this is going away when we ajax for real
    let theCategoryId = this.props.match.params.categoryid;
    theCategoryId = parseInt(theCategoryId);
    console.log(theCategoryId);

    this.setState({
        categoryList: dummyData[theCategoryId]
    }, () => {
        console.log(this.state.categoryList);
    });
  }

  render() {
    let allessentials = this.state.categoryList.map(oneEssential => {
      return <p>{oneEssential.type_name}</p>;
    });
    return (
        <div>Here's the list, mutha fucka:

            {allessentials}
        </div>
    );
  }
}

export default OneCategoryList;
