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
      <div className="container">
        <h3>My Gear Inventory</h3>
        <p></p>
        
        <p>{onePieceOfMyGear}</p>

        <hr />
        <div>
          <h4>Add to your Inventory</h4>
          <NewGearForm />
        </div>
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
