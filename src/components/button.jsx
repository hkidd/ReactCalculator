import React from "react";
import "./button.css";

const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = (props) => {
  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};
