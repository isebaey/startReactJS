import React, { useState, useEffect } from "react";
import "./NotFound.css";

export default function NotFound() {
  const [digits, setDigits] = useState({
    firstDigit: "",
    secondDigit: "",
    thirdDigit: "",
  });

  useEffect(() => {
    const randomNum = () => Math.floor(Math.random() * 9) + 1;

    let time = 30;
    let i = 0;
    let loop1, loop2, loop3;

    loop3 = setInterval(() => {
      if (i > 40) {
        clearInterval(loop3);
        setDigits((prevState) => ({ ...prevState, thirdDigit: 4 }));
      } else {
        setDigits((prevState) => ({ ...prevState, thirdDigit: randomNum() }));
        i++;
      }
    }, time);

    loop2 = setInterval(() => {
      if (i > 80) {
        clearInterval(loop2);
        setDigits((prevState) => ({ ...prevState, secondDigit: 0 }));
      } else {
        setDigits((prevState) => ({ ...prevState, secondDigit: randomNum() }));
        i++;
      }
    }, time);

    loop1 = setInterval(() => {
      if (i > 100) {
        clearInterval(loop1);
        setDigits((prevState) => ({ ...prevState, firstDigit: 4 }));
      } else {
        setDigits((prevState) => ({ ...prevState, firstDigit: randomNum() }));
        i++;
      }
    }, time);

    // Cleanup function to clear intervals when component unmounts
    return () => {
      clearInterval(loop1);
      clearInterval(loop2);
      clearInterval(loop3);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <>
      <div className="error">
        <div className="container-floud">
          <div className="col-xs-12 ground-color text-center">
            <div className="container-error-404">
              <div className="clip">
                <div className="shadow">
                  <span className="digit thirdDigit">{digits.thirdDigit}</span>
                </div>
              </div>
              <div className="clip">
                <div className="shadow">
                  <span className="digit secondDigit">
                    {digits.secondDigit}
                  </span>
                </div>
              </div>
              <div className="clip">
                <div className="shadow">
                  <span className="digit firstDigit">{digits.firstDigit}</span>
                </div>
              </div>
              <div className="msg">
                OH!<span className="triangle"></span>
              </div>
            </div>
            <h2 className="h1">Sorry! Page not found</h2>
          </div>
        </div>
      </div>
    </>
  );
}
