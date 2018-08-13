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
          invID={singleGear.inv_id}
          my_gear_name={singleGear.name}
          my_gear_img={singleGear.image}
          my_gear_weight={singleGear.weight}
          deleteGear={this.handleGearDelete}
        />
      );
    });

    return (
      <div className="container my-gear-pg">
        <h3 className="my-gear-head">My Gear Inventory</h3>
        <p id="my-gear-main-p">
          Keep track of your gear. Add items when you get new gear. Delete items
          when it's time to retire it...or if it melts in the fire because you
          got a little too close...Either way, let's keep you organized as you
          transform into a gearhead!
        </p>
        <div className="new-form">
          <h4>
            <Link to={`/newGearForm`}>Add to your Inventory</Link>
          </h4>
          {/* <NewGearForm /> */}
        </div>
        <div className="gear-container">
          <p>{onePieceOfMyGear}</p>
        </div>
        <hr />
      </div>
    );
  }
  handleGearDelete = gear => {
    console.log(gear);
    let inv_id = gear;

    axios.post("/api/1/deletemygear", inv_id).then(res => {
      console.log(res);
      this.componentDidMount();
    });
  };
  componentDidMount() {
    //make an AJAX request to API and retrieve all categories and render array to page
    // axios.get("/api/:user_id/mygear")
    console.log("WOOOO get that");
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
