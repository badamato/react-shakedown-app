import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MyGear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      image: "",
      weight: 0,
      gearType: "",
      category: ""
    };
  }
  render() {
    return (
      <div>
        <h3>Here is my gear sucka</h3>
        <img src="http://ndmsg.webs.com/photos/Bug-out-bags-BOBs/huge-backpack1.jpg" />
        <hr></hr>
        <div>
          <h4>Add to your Inventory</h4>
          
          </div>
      </div>
    );
  }
}

export default MyGear;
