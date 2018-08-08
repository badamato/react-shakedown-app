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
        {/* The Essentials */}
        <div>
          <h4>The Essenitals</h4>
          <ul>
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
        {/* Clothing */}
        <div>
          <h4>Clothing</h4>
          <ul>
            <li>Underwear</li>
            <li>Sports Bra</li>
            <li>Top Baselayer</li>
            <li>Bottom Baselayer</li>
            <li>Hiking Top</li>
            <li>Hiking Bottom</li>
            <li>Down/ Sythetic Jacket</li>
            <li>Rain Jacket</li>
            <li>Hat</li>
            <li>Bandana/ Buff</li>
          </ul>
          <h5>Cold Weather/Extras</h5>
          <ul>
            <li>Fleece jacket or vest</li>
            <li>Rain Pants</li>
            <li>Gloves or mittens</li>
            <li>Midweight to Heavyweight Baselayers</li>
          </ul>
        </div>
        {/* Footwear */}
        <div>
          <h4>Footwear</h4>
          <ul>
            <li>Hiking Boots or Hiking Shoes</li>
            <li>Socks(2-3pairs)</li>
            <li>Liner Socks</li>
            <li>Camp Shoes</li>
          </ul>
        </div>
        {/* Optional Items */}
        <div>
          <h4>Optional Items</h4>
          <ul>
            <li>Sleeping Bag Liner</li>
            <li>Extra Lighter/ Matches</li>
            <li>Extra Batteries</li>
            <li>Duct Tape (3 ft.)</li>
            <li>Cell Phone</li>
            <li>Camera</li>
            <li>Trekking Poles</li>
            <li>Stuff Sacks</li>
            <li>Compression Sacks</li>
            <li>Extra Ziploc Bags</li>
            <li>Gaiters</li>
            <li>Personal Locator Beacon</li>
            <li>External Battery</li>
            <li>Solar Charger</li>
            <li>Backpacking Chair</li>
            <li>Lip Balm</li>
            <li>Biodegradable Soap</li>
            <li>Quick-dry Towel</li>
            <li>Hand Sanitizer</li>
            <li>Toilet Paper</li>
            <li>Body Wipes</li>
            <li>Toothbrush/Toothpaste</li>
            <li>Insect Repellent</li>
            <li>Book/ Journal and Pen</li>
            <li>Bear Canister</li>
            <li>Scent-proof Bags</li>
            <li>Whistle</li>
            <li>Cord</li>
            <li>Carabiners</li>
            <li>Body Glide</li>
            <li>Camp Pillow</li>
            <li>Ear Plugs</li>
            <li>GoGirl</li>
            <li>Diva Cup</li>
            <li>Tampons</li>
            <li>Pads</li>
            <li>Pee Rag</li>
            <li>Whiskey</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ThreeSeasonGearList;
