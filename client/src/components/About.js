import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div className="container about-it">
        <h1 className="about-header">About Shakedown</h1>
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
            <Link to="/hikes">
              <span className="about-it-link">here</span>
            </Link>
          </span>
          .
        </p>
        <p>
          Keep an inventory of the gear you already own{" "}
          <span>
            <Link to="/mygear">
              <span className="about-it-link">here</span>
            </Link>
          </span>
          .
        </p>
        <p>
          Put it all together by building your own pack{" "}
          <span>
            <Link to="/buildapack">
              <span className="about-it-link">here</span>
            </Link>
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

        <h5>The Builders of Shakedown</h5>
        <p>
          Just two ladies who really love to hike and really love to write code.
        </p>
        <p>
          <strong>Built with:</strong> React, Css, Bootstrap, Express, Node.js,
          PostgreSQL, Postico, little sleep, lots of coffee, and a lot of laughs{" "}
        </p>
        <div className="container img-container">
          <div className="one-profile ">
            <h1>
              Beth D'Amato{" "}
              <a
                className="about-name-link"
                href="https://www.linkedin.com/in/badamato/"
                target="_blank"
              >
                <i class="icon-linkedin-sign" />
              </a>{" "}
              <a
                className="about-name-link"
                href="https://github.com/badamato"
                target="_blank"
              >
                <i class="icon-github-sign" />
              </a>
            </h1>

            <img className=" img-thumbnail about-img" src="/Images/beth.jpg" />
          </div>
          <div className="one-profile">
            <h1>
              Aylin DeBruyne{" "}
              <a
                className="about-name-link"
                href="https://www.linkedin.com/in/aylindebruyne/"
                target="_blank"
              >
                <i class="icon-linkedin-sign" />
              </a>{" "}
              <a
                className="about-name-link"
                href="https://github.com/adebruyne"
                target="_blank"
              >
                <i class="icon-github-sign" />
              </a>
            </h1>
            <img className="img-thumbnail about-img" src="/Images/aylin.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
