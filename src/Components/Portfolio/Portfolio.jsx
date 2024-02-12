import React, { Component } from "react";
import "./Portfolio.css";
import Header from "../Header/Header";
import OneImg from "../OneImg/OneImg";

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <section id="gallery">
          <div class="container">
            <div className="main-title shadow  mx-5">
              <Header title={"PORTFOLIO COMPONENT"} />
            </div>
            <div id="image-gallery ">
              <div class="row p-5">
                <OneImg
                  imgSource={
                    "https://routeegy.github.io/startFramework/assets/images/poert1.png"
                  }
                />
                <OneImg
                  imgSource={
                    "https://routeegy.github.io/startFramework/assets/images/port2.png"
                  }
                />
                <OneImg
                  imgSource={
                    "https://routeegy.github.io/startFramework/assets/images/port3.png"
                  }
                />
                <OneImg
                  imgSource={
                    "https://routeegy.github.io/startFramework/assets/images/poert1.png"
                  }
                />
                <OneImg
                  imgSource={
                    "https://routeegy.github.io/startFramework/assets/images/port2.png"
                  }
                />
                <OneImg
                  imgSource={
                    "https://routeegy.github.io/startFramework/assets/images/port3.png"
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
