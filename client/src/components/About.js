import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Shakedown</h1>
        <h5>Our Mission</h5>
        <p>
          At Shakedown, we are all about helping you get outside, faster.
          Whether you're brand new to hiking or you're seasoned hiker trash (an
          embraced term given to thru-hikers), we want to help you pack up,
          shakedown your pack, and get hiking.
        </p>
        <p>
          Check out some our our suggested checklists{" "}
          <span>
            <Link to="/hikes">here</Link>
          </span>
          .
        </p>
        <p>
          Keep an inventory of the gear you already own{" "}
          <span>
            <Link to="/mygear">here</Link>
          </span>
          .
        </p>
        <p>
          Put it all together by building your own pack{" "}
          <span>
            <Link to="/buildapack">here</Link>
          </span>
          . Pack it up. Shake it down. Get outside.{" "}
        </p>

        <h5>What's a "shakedown"?</h5>
        <p>
          A shakedown is a term that is used in the backpacking community. It's
          all about going through your pack piece by piece and reassuring
          yourself that every piece of gear you take with you is what you'll
          need.
        </p>
        <p>
          The most effetctive way to have a gear shakedown is to do it yourself.
          It helps to have someone to talk to for advice, but every hiker has
          different needs. You can pack up your backpack with what you think
          you'll need and then go on an short back-packing trip to find out what
          you actually use and what ends up sitting in your pack, taking up
          space and acting as dead weight.
        </p>
        <p>
          Once you're back home, you can "shakedown" your pack, getting out
          those unused pieces of gear. You'll suprise yourself with how much
          stuff you can ditch. Think of things that can have multi-use purpose
          and get creative! This will lighten your load, and ultimatley, lead to
          a more pleasant backpacking experience when there's a little less
          weight on your pack.{" "}
        </p>
        <p>
          Then, rinse and repeat. Dial in your gear by just going outside and
          testing out what works best for you!
        </p>

        <h5>The Ladies of Shakedown</h5>
        <h6>Beth D'amato</h6>
        <h6>Aylin DeBruyne</h6>
      </div>
    );
  }
}

export default About;
