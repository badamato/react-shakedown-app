import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UltralightGearList extends React.Component {
  render() {
    return (
      <div>
          <h1>Ultralight Backpacking Gear</h1>
          <p>"Ultralight" is all about deciding how you can backpack with less gear so you can move faster to cover more ground. You'll have to use your own judgement on going lighter to balance safety and comfort.</p>
          <p>In the hiking, community, we say, "Hike your own hike," meaning there is no right or wrong way to hike the trail. </p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
      </div>
    );
  }
}

export default UltralightGearList;