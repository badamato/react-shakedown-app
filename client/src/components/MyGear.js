import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import MySingleGear from "./MyGearSingle";
import NewGearForm from "./NewGearForm";

class MyGear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myGear: []
    };
  }

  render() {
    let onePieceOfMyGear = this.state.myGear.map(singleGear => {
      return (
        <MySingleGear
          key={singleGear.inv_id}
          my_gear_name={singleGear.name}
          my_gear_img={singleGear.image}
          my_gear_weight={singleGear.weight}
        />
      );
    });

    return (
      <div className="container my-gear-pg">
        <h3 className="my-gear-head">My Gear Inventory</h3>
        <p> 
          Keep track of your gear. Add items when you get new gear. Delete items
          when it's time to retire it...or if it melts in the fire because you
          got a little too close.
        </p>
        <div className="new-form">
          <h4>Add to your Inventory</h4>
          <NewGearForm />
        </div>
        <div className="gear-container">
          <p>{onePieceOfMyGear}</p>
        </div>
        <hr />
      </div>
    );
  }

  componentDidMount() {
    //make an AJAX request to API and retrieve all categories and render array to page
    // axios.get("/api/:user_id/mygear")

    axios.get("/api/1/mygear").then(res => {
      console.log(res);
      this.setState({
        myGear: res.data
      });
    });

    // onSubmit = fields => {
    //   console.log('App comp got:', fields );
    // }
  }
}
export default MyGear;
