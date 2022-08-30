import { createContext, useReducer } from "react";
import whitet from "./../assets/whitet.jpg";
import blackt from "./../assets/blackt.jpg";

export const Context = createContext();

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DELIVERY_METHOD":
      return { ...state, deliveryMethod: action.payload };
    case "UPDATE_PAYMENT_METHOD":
      return { ...state, paymentMethod: action.payload };
    case "UPDATE_SHIPPING_INFO":
      return { ...state, shippingInfo: action.payload };
    case "UPDATE_ITEMS":
      return { ...state, items: action.payload };
    case "UPDATE_INFO":
      return { ...state, info: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    deliveryMethod: null,
    paymentMethod: null,
    shippingInfo: null,
    items: [
      {
        src: whitet,
        alt: "whitet",
        name: "T-Shirt",
        type: "Summer Vibes",
        id: "#261311",
        cost: 89.99,
      },
      {
        src: blackt,
        alt: "blackt",
        name: "Basic Slim",
        type: "Fit T-Shirt",
        id: "#212315",
        cost: 69.99,
      },
    ],
    info: null,
  });
  console.log(state);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
