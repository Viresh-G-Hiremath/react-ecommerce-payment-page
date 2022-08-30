import React, { useContext } from "react";
import { Context } from "../contexts/Context";

export default function Result() {
  const { deliveryMethod, paymentMethod, shippingInfo, items } =
    useContext(Context);

  return (
    <div>
      {deliveryMethod && (
        <table class="table table-bordered m-3 w-75 border">
          <tbody>
            <tr>
              <th scope="row">Email</th>
              <td>{shippingInfo.email}</td>
            </tr>
            <tr>
              <th scope="row">First Name</th>
              <td>{shippingInfo.firstName}</td>
            </tr>
            <tr>
              <th scope="row">Last Name</th>
              <td>{shippingInfo.lastName}</td>
            </tr>
            <tr>
              <th scope="row">Phone Number</th>
              <td>{shippingInfo.phoneNumber}</td>
            </tr>
            <tr>
              <th scope="row">Address</th>
              <td>{shippingInfo.address}</td>
            </tr>
            <tr>
              <th scope="row">City</th>
              <td>{shippingInfo.city}</td>
            </tr>
            <tr>
              <th scope="row">ZIP</th>
              <td>{shippingInfo.zip}</td>
            </tr>
            <tr>
              <th scope="row">Country</th>
              <td>{shippingInfo.country}</td>
            </tr>
            <tr>
              <th scope="row">Payment Method</th>
              <td>{paymentMethod}</td>
            </tr>
            <tr>
              <th scope="row">Delivery Method</th>
              <td>{deliveryMethod}</td>
            </tr>
            <tr>
              <th scope="row">Items</th>
              {items.map((item) => (
                <td>{item.name}</td>
              ))}
            </tr>
            <tr>
              <th scope="row">Cost</th>
              {items.map((item) => (
                <td>${item.cost}</td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
