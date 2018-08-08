import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class TenEssentials extends React.Component {
  render() {
    return (
      <div>
        <h1>The Ten Essentials</h1>
        <p>
          If you're heading into the wilderness, you're going to want to take
          the 10 essentials with you. Even on a day hike, it's good practice.
          You'll find the true value of carrying these items in a survival
          situtation. They'll ensure you're prepared in an emergency and keep
          you safe if you're forced to spend extra time out in the wild!
        </p>
        <p>
          Depending on the type of trip you're taking, you can take a
          combination of the items in each category.
        </p>
        <div>
          <h4>Navigation</h4>
          <ul>
            <li>Maps</li>
            <li>Compass</li>
            <li>Handheld GPS</li>
            <li>Personal Locator Beacon</li>
          </ul>
        </div>
        <div>
          <h4>Illumination</h4>
          <ul>
            <li>Headlamp</li>
            <li>Lantern</li>
            <li>Flashlight</li>
          </ul>
        </div>
        <div>
          <h4>Sun Protection</h4>
          <ul>
            <li>Sunglasses</li>
            <li>Sunscreen</li>
            <li>Sun hat</li>
          </ul>
        </div>
        <div>
          <h4>First Aid</h4>
        </div>
        <div>
          <h4>Repair Kit and Tools</h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            </ul>
        </div>
        <div>
          <h4>Fire</h4>
        </div>
        <div>
          <h4>Insulation</h4>
        </div>
        <div>
          <h4>Nutrition</h4>
        </div>
        <div>
          <h4>Hydration</h4>
        </div>
        <div>
          <h4>Emergency Shelter</h4>
        </div>
      </div>
    );
  }
}

export default TenEssentials;
