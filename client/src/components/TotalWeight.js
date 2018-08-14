import React from "react";


class TotalWeight extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      weight: 0

    }
  }
  
  render() {
    return (
      <div className="container weight-div ">
        < h3 className="total-weight">
        Total Weight:<span className="weight-number"> {this._calculateTotalWeight()}</span> ounces
        
        </h3>
        {/* <br/>
        <a href="#" onClick={() => this._clearWeight}>Clear weight</a>
        <br/>
        <a href="#">See My Pack</a> */}
       
        </div>
    );
  }

_calculateTotalWeight = () => {
  let weight = 0;
  for (let item of this.props.chosenGear) {
    weight = weight + parseFloat(item.weight)
  }
  return weight
}

_clearWeight = () => {
  this.setState({
    weight: 0
  })
}





}

export default TotalWeight;
