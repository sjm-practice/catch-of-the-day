import React, { PropTypes } from "react";
import { formatPrice } from "../../utils/helpers";

const Fish = (props) => {
  const { details, index, addToOrder } = props;
  const isAvailable = details.status === "available";
  const buttonText = isAvailable ? "Add To Order" : "SOLD OUT";

  return (
    <li className="menu-fish">
      <img src={details.image} alt={details.name} />
      <h3 className="fish-name">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span>
      </h3>
      <p>{details.desc}</p>
      <button
        disabled={!isAvailable}
        onClick={() => addToOrder(index)}
      >{buttonText}</button>
    </li>
  );
};

Fish.propTypes = {
  details: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
  addToOrder: PropTypes.func.isRequired,
};

export default Fish;
