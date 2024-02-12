import React, { Component } from "react";
import "./AppFooter.css";
export default class AppFooter extends Component {
  render() {
    return (
      <>
        <footer class="footer-section ">
          <div class="container">
            <div class="footer-cta pt-5 pb-5">
              <div class="row">
                <div class="card-group m-4">
                  <div class="card ">
                    <div class="card-body text-center ">
                      <h3>LOCATION</h3>
                      <p>2215 John Daniel Drive</p>
                      <p>Clark, MO 65243</p>
                    </div>
                  </div>
                  <div class="card text-white">
                    <div class="card-body text-center">
                      <h3 class="">AROUND THE WEB</h3>
                      <div class="icons d-flex gap-2 justify-content-center">
                        <div className="one-brand">
                          <i class="fa-brands fa-facebook mx-1 icon"></i>
                        </div>
                        <div className="one-brand">
                          <i class="fa-brands fa-twitter mx-1 icon"></i>
                        </div>
                        <div className="one-brand">
                          <i class="fa-brands fa-linkedin-in mx-1 icon"></i>
                        </div>
                        <div className="one-brand">
                          <i class="fa-solid fa-globe mx-1 icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body text-center">
                      <h3 class="">ABOUT FREELANCER</h3>
                      <p class="">
                        Freelance is a free to use, licensed Bootstrap theme
                        created by Route
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright-area">
            <div class="container text-center">
              <p>Copyright &copy; 2024, Ahmad SEBAEY</p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
