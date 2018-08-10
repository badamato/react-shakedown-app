import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import MySingleGear from "./MyGearSingle";
import NewGearForm from "./NewGearForm";

class MyGear extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        myGear: []
      }
    }

 
  render() {
    let onePieceOfMyGear = this.state.myGear.map(singleGear => {
      return <p>
        <MySingleGear 
        my_gear_name={singleGear.name}
        />
      </p>
    })
    return (
      <div>
        <h3>Here is my gear sucka</h3>
        <img src="http://ndmsg.webs.com/photos/Bug-out-bags-BOBs/huge-backpack1.jpg" />
        <p>{onePieceOfMyGear}</p>

        <hr />
        <div>
          <h4>Add to your Inventory</h4>
          {/* <NewGearForm onSubmit={fields=>this.onSubmit(fields)}/> */}
        </div>
      </div>
    );
  }

  componentDidMount() {
    //make an AJAX request to API and retrieve all categories and render array to page
    // axios.get("/api/:user_id/mygear")
      axios.get('/api/1/mygear')
     .then(res => {
       console.log(res);
       this.setState({
         myGear: res.data
       })
     })

  // onSubmit = fields => {
  //   console.log('App comp got:', fields );
  // }
}
}
export default MyGear;
