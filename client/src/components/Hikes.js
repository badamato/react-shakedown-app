import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Hikes extends React.Component {
  render() {
    return (
      <div className="container hikes-holder">
        <div className="container ">
          <h1 className="headline">Gear Checklists For Your Next Adventure</h1>
        </div>
        {/*////////// OLD CODE//////// */}
        {/* <div className="container">
          <Link
            to="/hikes/tenessentials"
            style={{ textDecoration: "none", color: "white" }}
          >
            The Ten Essentials for Every Trip
          </Link>

          <Link to="/hikes/threeseasongearlist">
            Three-Season Backpacking Gear
          </Link>

          <Link to="/hikes/wintergearlist">Winter Backpacking Gear</Link>

          <Link to="/hikes/desertgearlist"> Desert Backpacking Gear</Link>
        </div> */}

        <div class="card text-center big-ten">
          <div class="card-body">
            <h5 class="card-title">The Ten Essentials</h5>
            <p class="card-text">The Gear You'll Need For Every Trip</p>
            <Link to="/hikes/tenessentials" className="btn btn-info">
              Go
            </Link>
          </div>
        </div>

        <div class="card text-center three-season">
          <div class="card-body">
            <h5 class="card-title">Three-Season Backpacking</h5>
            <p class="card-text">Get ready for Spring, Summer and Fall</p>
            <Link to="/hikes/threeseasongearlist" className="btn btn-info">
              Go
            </Link>
          </div>
        </div>

        <div class="card text-center winter">
          <div class="card-body">
            <h5 class="card-title">Winter Backpacking</h5>
            <p class="card-text">Lots of layers and big campfires</p>
            <Link to="/hikes/wintergearlist" className="btn btn-info">
              Go
            </Link>
          </div>
        </div>
        <div class="card text-center desert">
          <div class="card-body">
            <h5 class="card-title">Desert Backpacking</h5>
            <p class="card-text">Hydrate and meditate</p>
            <Link to="/hikes/desertgearlist" className="btn btn-info">
              Go
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Hikes;
