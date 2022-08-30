import inpost from "../../assets/inpost.png";
import dpd from "../../assets/dpd.png";
import dhl from "../../assets/dhl.png";
import fedex from "../../assets/fedex.png";
import Courier from "./Courier";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/Context";

export default function DeliveryMethod() {
  const [deliveryMethod, setDeliverMethod] = useState("");
  const { dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({ type: "UPDATE_DELIVERY_METHOD", payload: deliveryMethod });
  }, [dispatch, deliveryMethod]);

  return (
    <div className="mb-4 mb-lg-0 mx-lg-5">
      <h2 className="mb-4 fs-6">Delivery method</h2>
      <div className="text-center">
        <div className="row justify-content-between">
          <div className="col mb-2 pe-0">
            <Courier
              src={inpost}
              amt={"20.00"}
              clickedOn={"inpost"}
              clicked={deliveryMethod === "inpost"}
              setDeliverMethod={setDeliverMethod}
            />
          </div>
          <div className="col mb-2 pe-0">
            <Courier
              src={dpd}
              amt={"12.00"}
              clickedOn={"dpd"}
              clicked={deliveryMethod === "dpd"}
              setDeliverMethod={setDeliverMethod}
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col mb-2 pe-0">
            <Courier
              src={dhl}
              amt={"15.00"}
              clickedOn={"dhl"}
              clicked={deliveryMethod === "dhl"}
              setDeliverMethod={setDeliverMethod}
            />
          </div>
          <div className="col mb-2 pe-0">
            <Courier
              src={fedex}
              amt={"10.00"}
              clickedOn={"fedex"}
              clicked={deliveryMethod === "fedex"}
              setDeliverMethod={setDeliverMethod}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
