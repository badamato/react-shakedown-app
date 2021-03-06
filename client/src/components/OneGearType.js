import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

//PRACTICE
import MySingleGear from "./MyGearSingle";
import MyGear from "./MyGear";

class OneGearType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneGearTypeList: [],
      selectedProduct: {
        name: "",
        weight: ""
      }
    };
    console.log(this.state);
  }

  render() {
    let singleGear = this.state.oneGearTypeList.map(singleGearItem => {
      return (
        <div
          className="container my-gear-card"
          onClick={() => {
            this.props.handleAddWeight(singleGearItem);
          }}
        >
          <img
            src={singleGearItem.image}
            className="img-thumbnail gear-img"
          />
          <h4>
            <strong>Name</strong>: {singleGearItem.name}
          </h4>
          <h5>
            <strong>Weight</strong>: {singleGearItem.weight} oz.
          </h5>
        </div>
      );
    });
    return (
      <div className="container">
        {/* <h1>Your Gear</h1>
        <MyGear /> */}
        <div className="Intro-BAP-2">
          <h2>Click on a piece of gear to add it to your pack</h2>
        </div>
        <h1 className="pick-it-category">Suggested Gear</h1>
        <p id="buildapack-data">{singleGear}</p>
      </div>
    );
  }

  componentDidMount() {
    //make an AJAx request to API and retrieve category list

    let type_id = this.props.match.params.typeid;
    axios.get(`/api/BAP/geartype/${type_id}`).then(res => {
      console.log(res);
      this.setState({
        oneGearTypeList: res.data
      });
    });
  }
}

export default OneGearType;
