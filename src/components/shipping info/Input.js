import React from "react";

export default function Input({ type, placeholder, setValue, value }) {
  return (
    <input
      className="form-control rounded-pill mb-3 ps-4 p-2"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
