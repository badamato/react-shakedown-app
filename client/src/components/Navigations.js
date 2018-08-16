import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    setInterval(this._checkLoggedIn, 1000);
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top main-nav-gear">
        <div class="navbar navbar-default">
          <div class="container-fluid">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar" />
                <span class="icon-bar" />
                <span class="icon-bar" />
              </button>
              <a class="navbar-brand" href="/home">
                <span>
                  <img
                    className="home-icon"
                    src="https://cdn1.iconfinder.com/data/icons/camping-adventure-and-outdoors-1/32/cottage-cabin-wood-house-camping-outdoor-stay-512.png"
                  />
                </span>{" "}
                Shakedown
              </a>
            </div>

            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="nav navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/hikes">
                    Gear Checklists
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/mygear">
                    My Gear
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/buildapack">
                    Build A Pack
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/about">
                    About
                  </a>
                </li>
                {this.state.isLoggedIn ? (
                  <li class="nav-item active">
                    <a class="nav-link" href="#" onClick={this._logOut}>
                      Logout
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  _checkLoggedIn = () => {
    axios.get("/api/verify").then(res => {
      console.log(res);
      this.setState(
        {
          isLoggedIn:
            res.data !== "" ||
            (this.props.location.pathname !== "/signup" ||
              this.props.location.pathname !== "/about")
        },
        () => {
          if (!this.state.isLoggedIn) {
            this.props.history.push("/");
          }
        }
      );
    });
  };

  _logOut = () => {
    axios.post("/api/logout").then(res => {
      this.setState({ isLoggedIn: false });
    });
  };
}
export default Navigation;
