import React from "react";
import { formatPrice } from "../../utils/helpers";

const Fish = (props) => {
  const currentFish = props.details;
  const isAvailable = currentFish.status === "available";
  const buttonText = isAvailable ? "Add To Order" : "SOLD OUT";

  return (
    <li className="menu-fish">
      <img src={currentFish.image} alt={currentFish.name} />
      <h3 className="fish-name">
        {currentFish.name}
        <span className="price">{formatPrice(currentFish.price)}</span>
      </h3>
      <p>{currentFish.desc}</p>
      <button disabled={!isAvailable}>{buttonText}</button>
    </li>
  );
};

export default Fish;
