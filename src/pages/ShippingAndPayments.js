import React, { useContext, useEffect, useState } from "react";
import Buttons from "../components/Buttons";
import { Context } from "../contexts/Context";
import DeliveryMethod from "../components/delivery method/DeliveryMethod";
import Header from "../components/Header";
import PaymentMethod from "../components/payment method/PaymentMethod";
import ShippingInfo from "../components/shipping info/ShippingInfo";
import YourCart from "../components/yourcart/YourCart";
import { useNavigate } from "react-router-dom";

export default function ShippingAndPayments() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const { deliveryMethod, paymentMethod, shippingInfo, items, dispatch } =
    useContext(Context);
  let navigate = useNavigate();

  const handlePayment = () => {
    setInfo({ deliveryMethod, paymentMethod, shippingInfo, items });
    if (deliveryMethod && paymentMethod && shippingInfo.email) {
      navigate("/result");
    } else {
      setError("Please Sellect Delivery / Payment Method");
    }
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_INFO", payload: info });
  }, [dispatch, info]);

  return (
    <div className="container-lx m-5">
      <Header />
      <div className="row">
        <div className="col-12 col-lg-5">
          <Buttons />
          <ShippingInfo />
        </div>
        <div className="col-12 col-lg-4">
          <PaymentMethod />
          <DeliveryMethod />
        </div>
        <div className="col-12 col-lg-3">
          <YourCart />
        </div>
      </div>
      {error && <p className="text-danger text-end me-5">{error}</p>}
      <div className="d-flex">
        <div className="d-md-flex d-none">
          <i className="bi bi-arrow-left-short fs-4"></i>
          <p className="m-0 ms-3 my-auto">Back</p>
        </div>
        <div className="mx-auto mx-md-0 ms-md-auto d-flex">
          <button className="btn border border-dark rounded-pill px-4 py-2">
            <p className="small m-0">CONTINUE SHOPPING</p>
          </button>
          <button
            className="btn btn-success rounded-pill px-4 py-2 ms-3"
            onClick={handlePayment}
          >
            <p className="small m-0">PROCEED TO PAYMENT</p>
          </button>
        </div>
      </div>
    </div>
  );
}
