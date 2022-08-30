import React from "react";
import { useNavigate } from "react-router-dom";

export default function Buttons() {
  let navigate = useNavigate();

  return (
    <div className="mb-4">
      <button
        className="btn btn-success rounded-pill px-4 py-2"
        onClick={() => navigate("/login")}
      >
        <p className="small m-0 px-2">LOG IN</p>
      </button>
      <button
        className="btn border rounded-pill px-4 py-2 ms-3"
        onClick={() => navigate("/signup")}
      >
        <p className="small m-0 px-2">SIGN Up</p>
      </button>
    </div>
  );
}
