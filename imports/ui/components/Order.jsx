import React from "react";

const Order = (props) => {
  const orderIds = Object.keys(props.order);

  return (
    <div className="order-wrap">
      <h2>Your Order</h2>
      <p>{orderIds}</p>
    </div>
  );
};

export default Order;
