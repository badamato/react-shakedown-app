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
        < h1 className="total-weight">Total Weight: {this.state.packWeight} ounces</h1>
        </div>
    );
  }

//selectGear.image
//selectedGear.name
//selectedGear.weight
  //take out the items in props.selecetedGear-map through each one
  //add each item weight to one another

// _getWeightForEachItemInProps = (allGearSelected) => {
//   allGear
// }



}

export default TotalWeight;
