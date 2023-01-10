import React from "react";
import "./Input.css";

const Input = ({ ...props }) => {
  return <input className="myInput" {...props} />;
};

export default Input;
