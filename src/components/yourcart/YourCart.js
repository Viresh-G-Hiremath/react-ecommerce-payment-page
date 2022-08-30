import React, { useContext } from "react";
import { Context } from "../../contexts/Context";
import Item from "./Item";

export default function YourCart() {
  const { items } = useContext(Context);

  return (
    <div className="mb-5">
      <h2 className="mb-4 fs-6">Your cart</h2>
      <div className="d-flex flex-column">
        {items && items.map((item) => <Item item={item} key={item.id} />)}
        <div className="d-flex bg-secondary bg-opacity-25 rounded-pill justify-content-center w-75 mx-auto py-2 mt-3">
          <p className="my-auto">Total cost</p>
          <p className="ms-5 ms-lg-2 my-auto fw-semibold">$159.98</p>
        </div>
        <div className="d-flex justify-content-center mx-auto mt-5 w-75">
          <i className="bi bi-truck my-auto"></i>
          <p className="ms-4 my-auto">
            Your are $30.02 away from free shipping!
          </p>
        </div>
      </div>
    </div>
  );
}
