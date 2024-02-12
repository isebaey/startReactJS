import React from "react";
import Header from "../Header/Header";

export default function Contact() {
  return (
    <>
      <div className="main-title shadow">
        <Header title={"CONATCT SECTION"} />
      </div>
      <form className="w-50 h-100 p-3 mx-auto pt-5 mt-5">
        <label htmlFor="userName" className="position-relative top-0 __top">
          userName :
        </label>
        <input
          id="userName"
          type="text"
          placeholder="userName"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative"
        />

        <label htmlFor="userAge" className="position-relative top-0 __top">
          userAge :
        </label>
        <input
          id="userAge"
          type="text"
          placeholder="userAge"
          name="userAge"
          className="form-control border-0 border-bottom py-3 position-relative"
        />

        <label htmlFor="userEmail" className="position-relative top-0 __top">
          userEmail :
        </label>
        <input
          id="userEmail"
          type="text"
          placeholder="userEmail"
          name="userEmail"
          className="form-control border-0 border-bottom py-3 position-relative"
        />

        <label htmlFor="userPassword" className="position-relative top-0 __top">
          userPassword :
        </label>
        <input
          id="userPassword"
          type="text"
          placeholder="userPassword"
          name="userPassword"
          className="form-control border-0 border-bottom py-3 position-relative"
        />

        <button
          className="btn mt-4 text-white"
          style={{ backgroundColor: "#1abc9c" }}
        >
          Send Message
        </button>
      </form>
    </>
  );
}
