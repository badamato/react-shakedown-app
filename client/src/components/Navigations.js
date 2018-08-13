import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    if (this.state.authenticated === null) return null;
    const authNav = this.state.authenticated ?
      <ul className="auth-nav">
        <li><a href="javascript:void(0)" onClick={this.props.auth.logout}>Logout</a></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul> :
      <ul className="auth-nav">
        <li><a href="javascript:void(0)" onClick={this.props.auth.login}>Login</a></li>
        <li><Link to="/register">Register</Link></li>
      </ul>;
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {authNav}
        </ul>
      </nav>
    )
  }
});















import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { withAuth } from '@okta/okta-react';

export default withAuth(class Navigation extends React.Component {
    constructor(props) {
      super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }

    componentDidUpdate() {
    this.checkAuthentication();
    }

    render() {
      if (this.state.authenticated === null) return null;
      const Navigation = this.state.authenticated ? 
    ///////////OLD CODE
    //   <nav>
    //     <div class="pos-f-t">
    //       <div class="collapse" id="navbarToggleExternalContent">
    //         <div class="bg-dark p-4">
    //           <h5 class="text-white h4">
    //             <NavLink
    //               to="/"
    //               className="nav-item "
    //               style={{ textDecoration: "none", color: "white" }}
    //             >
    //               Home
    //             </NavLink>
    //           </h5>
    //           <h5 class="text-white h4">
    //             <NavLink
    //               to="/hikes"
    //               className="nav-item"
    //               style={{ textDecoration: "none", color: "white" }}
    //             >
    //               Gear Checklists
    //             </NavLink>
    //           </h5>
    //           <h5 class="text-white h4">
    //           <NavLink
    //           to="/mygear"
    //           className="nav-item"
    //           style={{ textDecoration: "none", color: "white" }}
    //         >
    //           My Gear
    //         </NavLink>
    //           </h5>
    //           <h5 class="text-white h4">
    //            <NavLink
    //           to="/buildapack"
    //           className="nav-item"
    //           style={{ textDecoration: "none", color: "white" }}
    //         >
    //           Build A Pack
    //         </NavLink>

    //         </h5>
    //         <h5 class="text-white h4">
    //          <NavLink
    //           to="/about"
    //           className="nav-item"
    //           style={{ textDecoration: "none", color: "white" }}
    //         >
    //           About
    //         </NavLink>
    //         </h5>
    //         </div>
    //         <div class="bg-dark p-4" />
    //       </div>

    //       <nav class="navbar navbar-dark bg-dark">
    //         <button
    //           class="navbar-toggler"
    //           type="button"
    //           data-toggle="collapse"
    //           data-target="#navbarToggleExternalContent"
    //           aria-controls="navbarToggleExternalContent"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <span class="navbar-toggler-icon" />
    //         </button>
    //       </nav>
    //     </div>


    /////////UP TO DATE CODE
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <span>
            <img
              classNameName="home-icon"
              src="https://cdn1.iconfinder.com/data/icons/camping-adventure-and-outdoors-1/32/cottage-cabin-wood-house-camping-outdoor-stay-512.png" />
          </span>
          {" "}
          Shakedown
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/hikes">
                Gear Checklists
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/mygear">
                My Gear
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/buildapack">
                Build A Pack
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/preauth">
                <button className="">LOGIN/LOGOUT</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>


export default Navigations;
