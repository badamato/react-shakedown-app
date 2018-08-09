import React from "react";
import TotalWeightNumber from "./TotalWeightNumber";

class TotalWeight extends React.Component {
  render() {
    return (
      <div>
        <h6>Total Weight:</h6>
        <TotalWeightNumber />
      </div>
    );
  }
}

export default TotalWeight;
