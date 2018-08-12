import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
class OneGearType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneGearTypeList: []
    };
    console.log(this.state);
  }

  render() {
    let singleGear = this.state.oneGearTypeList.map(singleGearItem => {
      return (
        <div>
          <img src={`http://localhost:3500${singleGearItem.image}`} />
          <p>{singleGearItem.name}</p>
          <p>{singleGearItem.weight}</p>
        </div>
      );
    });
    return (
      <div>
        <p>{singleGear}</p>
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
