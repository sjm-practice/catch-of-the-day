import React from "react";

const Order = (props) => {
  const orderIds = Object.keys(props.order);

  const total = orderIds.reduce((prevTotal, key) => {
    const fish = props.fishes[key];
    if (fish && fish.status === "available") {
      const count = props.order[key];
                        // this protects against fish being made unavailable during calculation
      return prevTotal + (count * fish.price || 0);
    }

    return prevTotal;
  }, 0);

  return (
    <div className="order-wrap">
      <h2>Your Order</h2>
      <p>{orderIds}</p>
      <p>Total: {total}</p>
    </div>
  );
};

export default Order;
