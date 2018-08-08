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
          any advice or questions you may have. Remember to always have the{" "}
          <span>
            <Link to="/hikes/tenessentials">ten essentials</Link>
          </span>{" "}
          with you on every trip.
        </p>
        <div>
          {/* The Essentials */}
        <h4>The Essenitals</h4>
        <ul>
          <li />
          <li>Backpack</li>
          <li>Shelter</li>
          <li>Sleeping Bag (15-20 degrees)</li>
          <li>Sleeping Pad</li>
          <li> Stove</li>
          <li>Fuel</li>
          <li>Cookware</li>
          <li>Water Filter/ Purifier</li>
          <li>Water Bottle/ Reservoir</li>
          <li>Headlamp</li>
          <li>Navigation: Compass, Maps, Handheld GPS</li>
          <li>First Aid Kit</li>
          <li>Sun Protection: Sunglasses, Sunscreen, Sun Hat</li>
          <li>Repair Kit</li>
          <li>Pack cover</li>
          <li>Permits( if required)</li>
          <li>Trowel</li>
          </ul>
        </div>
        </ul>
      </div>
    );
  }
}

export default ThreeSeasonGearList;
