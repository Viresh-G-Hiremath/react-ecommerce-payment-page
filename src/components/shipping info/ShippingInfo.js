import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/Context";
import Input from "./Input";

export default function ShippingInfo() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const { dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({
      type: "UPDATE_SHIPPING_INFO",
      payload: {
        email,
        firstName,
        lastName,
        phoneNumber,
        address,
        city,
        zip,
        country,
      },
    });
  }, [
    dispatch,
    email,
    firstName,
    lastName,
    phoneNumber,
    address,
    city,
    zip,
    country,
  ]);

  return (
    <div>
      <h2 className="mb-4 fs-6">Shipping information</h2>
      <form>
        <div>
          <div className="row justify-content-between">
            <div className="col">
              <Input
                type={"email"}
                placeholder={"Email"}
                setValue={setEmail}
                value={email}
              />
              <Input
                type={"text"}
                placeholder={"First Name"}
                setValue={setFirstName}
                value={firstName}
              />
              <Input
                type={"text"}
                placeholder={"Last name"}
                setValue={setLastName}
                value={lastName}
              />
              <Input
                type={"number"}
                placeholder={"Phone Number"}
                setValue={setPhoneNumber}
                value={phoneNumber}
              />
            </div>
            <div className="col p-0 ps-1">
              <Input
                type={"text"}
                placeholder={"Address"}
                setValue={setAddress}
                value={address}
              />
              <Input
                type={"text"}
                placeholder={"City"}
                setValue={setCity}
                value={city}
              />
              <Input
                type={"number"}
                placeholder={"Postal Code / ZIP"}
                setValue={setZip}
                value={zip}
              />
              <select
                className="form-select rounded-pill mb-3 ps-4 p-2 text-muted"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              >
                <option value="poland">Poland</option>
                <option value="india">India</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
