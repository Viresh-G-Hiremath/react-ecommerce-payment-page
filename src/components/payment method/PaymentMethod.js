import Card from "./Card";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import maestro from "../../assets/maestro.png";
import discover from "../../assets/discover.png";
import ideal from "../../assets/ideal.png";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/Context";

export default function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const { dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({ type: "UPDATE_PAYMENT_METHOD", payload: paymentMethod });
  }, [dispatch, paymentMethod]);

  return (
    <div className="mb-4 mx-lg-5">
      <h2 className="mb-4 fs-6">Payment method</h2>
      <div className="text-center">
        <div className="row justify-content-between">
          <div className="col mb-2 pe-0">
            <Card
              src={paypal}
              clickedOn={"paypal"}
              clicked={paymentMethod === "paypal"}
              setPaymentMethod={setPaymentMethod}
            />
          </div>
          <div className="col mb-2 pe-0">
            <Card
              src={visa}
              clickedOn={"visa"}
              clicked={paymentMethod === "visa"}
              setPaymentMethod={setPaymentMethod}
            />
          </div>
          <div className="col mb-2 pe-0">
            <Card
              src={mastercard}
              clickedOn={"mastercard"}
              clicked={paymentMethod === "mastercard"}
              setPaymentMethod={setPaymentMethod}
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col mb-2 pe-0">
            <Card
              src={maestro}
              clickedOn={"maestro"}
              clicked={paymentMethod === "maestro"}
              setPaymentMethod={setPaymentMethod}
            />
          </div>
          <div className="col mb-2 pe-0">
            <Card
              src={discover}
              clickedOn={"discover"}
              clicked={paymentMethod === "discover"}
              setPaymentMethod={setPaymentMethod}
            />
          </div>
          <div className="col pe-0">
            <Card
              src={ideal}
              clickedOn={"ideal"}
              clicked={paymentMethod === "ideal"}
              setPaymentMethod={setPaymentMethod}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
