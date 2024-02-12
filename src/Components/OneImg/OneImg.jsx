import React from "react";

export default function OneImg(props) {
  const { imgSource } = props;
  console.log(imgSource);
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 image">
        <div className="img-wrapper">
          <img alt="object 1" src={imgSource} className="img-responsive" />
        </div>
      </div>
    </>
  );
}
