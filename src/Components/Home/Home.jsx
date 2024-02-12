import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import AppFooter from "../AppFooter/AppFooter";
import "./Home.css";
import Header from "../Header/Header";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="home-container d-flex justify-content-center align-items-center vh-100">
          <main className="home py-5 w-100 h-100 d-flex flex-column align-items-center justify-content-center">
            <img
              src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
              alt="avatar"
            />
            <Header title={"Start Framework"} />
            <div>Graphic Artist - Web Designer - Illustrator</div>
          </main>
        </div>
      </>
    );
  }
}
