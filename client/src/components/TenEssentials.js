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
          you safe if you're forced to spend some extra time out in the wild!
        </p>
        <p>
          Depending on the type of trip you're taking, you can take a
          combination of the items in each category.
        </p>
        {/* NAVIGATION */}
        <div>
          <h4>Navigation</h4>
          <p>
            The navigation system is going to help you plan your route before
            your trip, as well help you orient yourself on the trail. Be sure
            you familiarize yourself with these tools before you find yourself
            wandering.
          </p>
          <ul>
            <li>Maps</li>
            <li>Compass</li>
            <li>Handheld GPS</li>
            <li>Personal Locator Beacon</li>
          </ul>
        </div>
        {/* ILLUMINATION */}
        <div>
          <h4>Illumination</h4>
            <p>You'll be thanking yourself for bringing a light when the sun starts to go down earlier than you expected. When the sun dips behind the hills, the woods get dark. Really dark. Having a light source is essential to finding your way in the night. A headlamp is a great option because it will allow you to be hands free and it's not too much weight to carry. Make sure to check the batteries before heading out! </p>
          <ul>
            <li>Headlamp</li>
            <li>Lantern</li>
            <li>Flashlight</li>
          </ul>
        </div>
        {/* SUN PROTECTION */}
        <div>
          <h4>Sun Protection</h4>
          <p>Nobody likes leathery skin. So make sure you protect yourself from the harmful UV rays that are responsible for those sunburns and skin cancer. Consider wearing sunscreen, a big sun hat or even a long sleeve shirt to minimize your exposure to the sun. Snow blindness can also occur without the right protection to your eyes, so remember to throw on your sunglasses! </p>
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
            <li />
            <li />
            <li />
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
