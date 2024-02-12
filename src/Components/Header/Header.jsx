import React from "react";

export default function Header({ title }) {
  return (
    <>
      <div class="text-center pt-4 ">
        <h2 class="text-uppercase mb-3 fs-1 fw-bolder">{title}</h2>
        <div class="d-flex align-items-center justify-content-center mb-3">
          <div class="line me-3 bg-white"></div>
          <i class="fa-solid fa-star"></i>
          <div class="line ms-3 bg-white"></div>
        </div>
      </div>
    </>
  );
}
