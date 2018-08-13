import React from "react";


class TotalWeight extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      packWeight: ''
    }
  }
  
  render() {
    return (
      <div>
        < h1 className="total-weight">Total Weight: {this.state.packWeight} ounces</h1>
        </div>
    );
  }
}

export default TotalWeight;
