import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navigation = props => (
  <nav>
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">
            <NavLink
              to="/"
              className="nav-item "
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </NavLink>
          </h5>
          <h5 class="text-white h4">
            <NavLink
              to="/hikes"
              className="nav-item"
              style={{ textDecoration: "none", color: "white" }}
            >
              Gear Checklists
            </NavLink>
          </h5>
          <h5 class="text-white h4"> 
          <NavLink
          to="/mygear"
          className="nav-item"
          style={{ textDecoration: "none", color: "white" }}
        >
          My Gear
        </NavLink>
          </h5>
          <h5 class="text-white h4"> 
           <NavLink
          to="/buildapack"
          className="nav-item"
          style={{ textDecoration: "none", color: "white" }}
        >
          Build A Pack
        </NavLink>
          
        </h5>
        <h5 class="text-white h4"> 
         <NavLink
          to="/about"
          className="nav-item"
          style={{ textDecoration: "none", color: "white" }}
        >
          About
        </NavLink>
        </h5>
        </div>
        <div class="bg-dark p-4" />
      </div>

      <nav class="navbar navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </nav>
    </div>

    <div className="nav-list">
     

      <a>
        {" "}
       
      </a>

      <a>
        {" "}
      
      </a>

      <a>
      
      </a>
    </div>
  </nav>
);

export default Navigation;
