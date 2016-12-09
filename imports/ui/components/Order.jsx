import React, { Component } from "react";
import { formatPrice } from "../../utils/helpers";

class Order extends Component {
  constructor() {
    super();
    this.renderOrderItem = this.renderOrderItem.bind(this);
  }

  renderOrderItem(key) {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];

    return (
      <li key={key}>{count} lbs. {fish.name}</li>
    );
  }

  render() {
    const orderIds = Object.keys(this.props.order);

    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      if (fish && fish.status === "available") {
        const count = this.props.order[key];
        // this protects against fish being made unavailable during calculation
        return prevTotal + (count * fish.price || 0);
      }

      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          { orderIds.map(this.renderOrderItem) }
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </ul>
      </div>
    );
  }
}

export default Order;
