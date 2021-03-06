import React from "react";

export default function OrderSummary(props) {
  const ingredientSummmary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummmary}</ul>
      <p>Continue to Checkout?</p>
    </>
  );
}
