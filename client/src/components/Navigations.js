import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";



const Navigation = props => (
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
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">
      <span>
        <img
          className="home-icon"
          src="https://cdn1.iconfinder.com/data/icons/camping-adventure-and-outdoors-1/32/cottage-cabin-wood-house-camping-outdoor-stay-512.png"
        />
      </span>{" "}
      Shakedown
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="/hikes">
            Gear Checklists <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/mygear">
            My Gear
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/buildapack">
            Build A Pack
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/about">
            About
            <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
