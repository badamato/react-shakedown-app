import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class WinterGearList extends React.Component {
  render() {
    return (
      <div>
        <h1>Winter Backpacking Gear</h1>
        <p>
          Brrrrrr! Don't underestimate the mountain environments in the Winter.
          Temperatures ranging to below freezing can lead to an unpleasant
          experience if you're not ready for it. The chill of the wind can go
          right into the bones. Lack of insulation and energy can lead to
          hypothermia.
        </p>
        <p>
          {" "}
          But hopefully with this checklist of winter gear, you'll be prepared
          to enjoy the brisk air and snow white conditions! The humbling
          experience of peaceful, quiet mornings waking up to snow covered
          ground, is one you'll never forget. You'll gain a new apprecitaion for
          warmth of a hot drink and lots of layers.
        </p>
        <p>
          Your pack list should adjust to your personal needs, the time of year,
          the length of your trip, and the location of your trip. We recommend
          you talk with a local outfitter or gear expert for any advice or
          questions you may have. Remember to always have the{" "}
          <span>
            <Link to="/hikes/tenessentials">ten essentials</Link>
          </span>{" "}
          with you on every trip.
        </p>
        <div>
          <h4>The Essenitals</h4>
          <ul>
            <li>Backpack</li>
            <li>Four-Season Shelter</li>
            <li>Sleeping Bag (0-20 degrees)</li>
            <li>UnderQuilts for Hammock Campers</li>
            <li>Inflatable, Insulated Sleeping Pad</li>
            <li> Stove</li>
            <li>Fuel(alcohol or liquid - gas does not perform well)</li>
            <li>Cookware</li>
            <li>Water Filter/ Purifier(sleep with it so it doesnt freeze)</li>
            <li>Water Bottle/ Reservoir</li>
            <li>Headlamp</li>
            <li>Navigation: Compass, Maps, Handheld GPS</li>
            <li>First Aid Kit</li>
            <li>Sun Protection: Sunglasses</li>
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
            <li>Midweight to Heavyweight Baselayers</li>
            <li>Top Baselayer</li>
            <li>Bottom Baselayer</li>
            <li>Hiking Top</li>
            <li>Hiking Bottom</li>
            <li>Down/ Sythetic Jacket</li>
            <li>Rain Jacket</li>
            <li>Hat</li>
            <li>Bandana/ Buff</li>
            <li>Fleece jacket or vest</li>
            <li>Rain Pants</li>
            <li>Gloves or mittens</li>
          </ul>
        </div>
        {/* Footwear */}
        <div>
          <h4>Footwear</h4>
          <ul>
            <li>Waterproof Hiking Boots or Hiking Shoes</li>
            <li>Socks(2-3pairs)</li>
            <li>Liner Socks</li>
            <li>Crampons/ Microspikes</li>
            <li>Camp Shoes</li>
          </ul>
        </div>
        {/* Optional Items */}
        <div>
          <h4>Optional Items</h4>
          <ul>
            <li>Sleeping Bag Liner(adds warmth)</li>
            <li>Closed-Cell Foam Sleeping Pad</li>
            <li>Extra Lighter/ Matches</li>
            <li>Extra Batteries</li>
            <li>Duct Tape (3 ft.)</li>
            <li>Cell Phone</li>
            <li>Camera</li>
            <li>Trekking Poles</li>
            <li>Snow Shovel</li>
            <li>Chemical Heat Packs</li>
            <li>Ice Axe</li>
            <li>Stuff Sacks</li>
            <li>Compression Sacks</li>
            <li>Extra Ziploc Bags</li>
            <li>Snow Gaiters</li>
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

export default WinterGearList;
