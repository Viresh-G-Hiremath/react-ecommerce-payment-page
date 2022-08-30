import React from "react";

export default function Courier({
  src,
  amt,
  clickedOn,
  clicked,
  setDeliverMethod,
}) {
  return (
    <div
      className={`border rounded-4 p-2 p-lg-1 ${
        clicked ? "border-warning" : ""
      }`}
      onClick={() => setDeliverMethod(clickedOn)}
    >
      <div className="d-flex justify-content-center">
        <img className="smallimg my-auto px-2 py-1" src={src} alt={clickedOn} />
        <p className="my-auto ms-3 ms-lg-1 small">${amt}</p>
      </div>
    </div>
  );
}
