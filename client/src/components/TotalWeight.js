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
      <div>
        < h1 className="total-weight">Total Weight: {this._calculateTotalWeight()} ounces</h1>
       
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

//selectGear.image
//selectedGear.name
//selectedGear.weight
  //take out the items in props.selecetedGear-map through each one
  //add each item weight to one another





}

export default TotalWeight;
