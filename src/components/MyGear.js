import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewGearForm from "./NewGearForm";

class MyGear extends React.Component {
 
  render() {
    return (
      <div>
        <h3>Here is my gear sucka</h3>
        <img src="http://ndmsg.webs.com/photos/Bug-out-bags-BOBs/huge-backpack1.jpg" />
        <hr />
        <div>
          <h4>Add to your Inventory</h4>
          <NewGearForm />
        </div>
      </div>
    );
  }
}

export default MyGear;
