import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class OneGearType extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        onerGearTypeList: []
      }
    }
  
    render() {
      let singleGear = this.state.onerGearTypeList.map(singleGearItem => {
        return <p>{singleGearItem.name}</p>
      })
        return(
        <div>
          <p>{singleGear}</p>
        </div>
      );
    }

    // componentDidMount() {
    //   //make an AJAx request to API and retrieve category list
    //   let category_id = this.props.match.params.categoryid;
    //  let type_id = this.props.match.params.typeid
    //   axios.get(`/api/BAP/${category_id}/${type_id}`).then(res => {
    //     console.log(res);
    //     // this.setState({
    //     //   oneGearTypeList: res.data
    //     // });
    //   });
    // }

}
  
  export default OneGearType;