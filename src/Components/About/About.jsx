import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import AppFooter from "../AppFooter/AppFooter";
import "../Home/Home.css";
import Header from "../Header/Header";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="home-container d-flex justify-content-center align-items-center vh-100">
          <main className="home py-5 w-100 h-100 d-flex flex-column align-items-center justify-content-center">
            <div class="text-center pt-4 ">
              <Header title={"ABOUT COMPONENT"} />
              <div className="d-flex text-start w-50 mx-auto">
                <p className="me-2">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}
