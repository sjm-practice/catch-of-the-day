import React, { Component } from "react";
import { formatPrice } from "../../utils/helpers";
import CSSTransitionGroup from "react-addons-css-transition-group";

class Order extends Component {
  constructor() {
    super();
    this.renderOrderItem = this.renderOrderItem.bind(this);
    this.orderTotal = this.orderTotal.bind(this);
  }

  orderTotal(orderIds) {
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      if (fish && fish.status === "available") {
        const count = this.props.order[key];
        // this protects against fish being made unavailable during calculation
        return prevTotal + (count * fish.price || 0);
      }

      return prevTotal;
    }, 0);

    return total;
  }

  renderOrderItem(key) {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const removeButton = (
      <button onClick={() => this.props.removeFromOrder(key)}> &times;</button>
    );

    if (!fish || fish.status === "unavailable") {
      return (
        <li key={key}>Sorry,
          {fish ? fish.name : "fish"} is no longer available.
          {removeButton}
        </li>
      );
    }

    return (
      <li key={key}>
        <span>{count} {count > 1 ? "lbs" : "lb"} {fish.name}</span>
        {removeButton}
        <span className="price">{formatPrice(count * fish.price)}</span>
      </li>
    );
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = this.orderTotal(orderIds);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <CSSTransitionGroup
          className="order"
          component="ul"
          transitionName="order"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          { orderIds.map(this.renderOrderItem) }
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Order;
