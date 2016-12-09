import React from "react";
import { formatPrice } from "../../utils/helpers";

const Fish = (props) => {
  return (
    <li className="menu-fish">
      <img src={props.details.image} alt={props.details.name} />
      <h3 className="fish-name">
        {props.details.name}
        <span className="price">{formatPrice(props.details.price)}</span>
      </h3>
      <p>{props.details.desc}</p>
      <button>Add To Order</button>
    </li>
  );
};

export default Fish;
