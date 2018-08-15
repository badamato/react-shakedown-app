import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navigation = props => (
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

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
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
        </ul>
      </div>
    </div>
  </div>
</nav>
  /////////UP TO DATE CODE
  /* /* <nav className=
  "navbar navbar-expand-lg navbar-light bg-light">
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
  </nav> */ 
);

export default Navigation;
