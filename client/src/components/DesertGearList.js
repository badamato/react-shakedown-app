import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DesertGearList extends React.Component {
  render() {
    return (
      <div>
        <h1>Desert Backpacking Gear</h1>
        <p>
          From the southwest U.S. desert to the Sahara, this list is designed to
          help you get the gear you'll need on a backcountry adventure through
          the desert. You may find shade and water hard to find, and the
          temperatures can range anywhere from 25 degrees(F) to 105 degrees (F)
          on your trip. You'll want to plan ahead and bring plenty of extra
          layers, sun protection and water. Check water reports before you go,
          and be sure you're drinking plenty of water and packing out enough in
          case you have to dry camp (camping without a water source nearby).
          You'll need enough to drink, for hygiene purposes and for cooking.{" "}
        </p>
        <p>
          Although the desert can be a brutal environment, with lack of water,
          little shade, sweltering afternoons and chilly nights, you'll be
          rewarded with gorgeous sunsets, strange critters and an alien-like
          landscape. Look over this checklist before you head out to make sure
          you have everything you'll need to have a great time and maybe, a
          great tan too.{" "}
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
        {/* The Essentials */}
        <div>
          <h4>The Essenitals</h4>
          <ul>
            <li>Backpack</li>
            <li>Shelter</li>
            <li>Sleeping Bag (15-20 degrees)</li>
            <li>
              Sleeping Pad (an inflatable pad will offer more cushion against
              the tough ground)
            </li>
            <li> Stove</li>
            <li>Fuel</li>
            <li>Cookware</li>
            <li>Water Filter/ Purifier</li>
            <li>
              Water Bottle/ Reservoir (enough to haul water in case of dry
              camping)
            </li>
            <li>Headlamp</li>
            <li>Navigation: Compass, Maps, Handheld GPS</li>
            <li>First Aid Kit</li>
            <li>Sun Protection: Sunglasses, Sunscreen</li>
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
            <li>Hiking Top(Long-sleeve sun protection shirt)</li>
            <li>Hiking Bottom(Lightweight sun protection pants)</li>
            <li>Down/ Sythetic Jacket</li>
            <li>Wind Shirt</li>
            <li>Rain Jacket</li>
            <li>Wide Brimmed Sun-Hat</li>
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
            <li>Sun Umbrella</li>
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
            <li>Bear Canister(if required)</li>
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

export default DesertGearList;
