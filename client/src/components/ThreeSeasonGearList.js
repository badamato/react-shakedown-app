import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ThreeSeasonGearList extends React.Component {
  render() {
    return (
      <div>
        <h1>Three-Season Backpacking Gear</h1>
        <p>
          This checklist will help you get ready for Spring, Summer and Fall.
          Nothing can ruin a trip more than leaving behind an important piece of
          gear. This is only a suggested checklist and should be modified to fit
          your preferences. Your pack list should adjust to your personal needs,
          the time of year, the length of your trip, and the location of your
          trip. We recommend you talk with a local outfitter or gear expert for
          any advice or questions you may have.
        </p>
          
      </div>
    );
  }
}

export default ThreeSeasonGearList;
