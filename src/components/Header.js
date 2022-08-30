import React from "react";

export default function Header() {
  return (
    <div className="mb-5 d-flex">
      <h1 className="fs-5">Shipping and Payment</h1>
      <div
        className="ms-auto border border-success rounded-circle d-flex justify-content-center"
        style={{ height: "30px", width: "30px" }}
      >
        <i className="bi bi-cart3 my-auto "></i>
      </div>

      <div
        className="bg-secondary bg-opacity-25 my-auto mx-2"
        style={{ height: "1px", width: "80px" }}
      ></div>
      <div
        className="bg-success text-white rounded-circle d-flex justify-content-center"
        style={{ height: "30px", width: "30px" }}
      >
        <i className="bi bi-truck my-auto"></i>
      </div>
    </div>
  );
}
