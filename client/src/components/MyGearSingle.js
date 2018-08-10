import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MyGearSingle extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>{this.props.my_gear_name}</div>
        )
    }
}


export default MyGearSingle;