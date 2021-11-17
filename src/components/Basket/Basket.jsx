import React, { useState, useEffect } from "react";

const Basket = ({ id, image, title, removeInBasket, calcPrice }) => {
  const [sumForFruit, setSumForFruit] = useState(0);

  useEffect(() => {
    calcPrice.forEach((element) => {
      if (Number(element.id) === id) {
        setSumForFruit(element.sum);
      }
    });
  }, [calcPrice, id]);

  const removeFruit = (event) => {
    removeInBasket(event.target.id);
  };

  return (
    <div className="basket__item">
      <img src={image} alt="fruit" />
      <div className="basket__name">{title}</div>
      <div className="basket__price">{sumForFruit} $</div>
      <div className="basket__remove">
        <button id={id} onClick={removeFruit}>
          x
        </button>
      </div>
    </div>
  );
};

export default Basket;
