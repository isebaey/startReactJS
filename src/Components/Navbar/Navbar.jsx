import React, { Component } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg py-4">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              START FRAMEWORK
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to={"/about"}
                >
                  ABOUT
                </NavLink>
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to={"/portfolio"}
                >
                  PORTFOLIO
                </NavLink>
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to={"/contact"}
                >
                  CONTACT
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
