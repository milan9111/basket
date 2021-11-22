import React from "react";

const Basket = ({
  id,
  image,
  title,
  removeInBasket,
  addInBasket,
  removeOneItemInBasket,
  calcPrice,
  fruitsInBasket,
  fruitCalcSum,
}) => {
  let sumForFruit = 0;
  calcPrice.forEach((element) => {
    if (Number(element.id) === id) {
      sumForFruit = element.sum;
    }
  });

  let selectedItem = fruitsInBasket.filter((item) => item === id).length;

  const addOneItem = (event) => {
    addInBasket(event.target.id);
    fruitCalcSum(selectedItem + 1, event.target.id);
  };

  const removeOneItem = (event) => {
    removeOneItemInBasket(event.target.id);
    fruitCalcSum(selectedItem - 1, event.target.id);
  };

  const removeFruit = (event) => {
    removeInBasket(event.target.id);
  };

  return (
    <div className="basket__item">
      <img src={image} alt="fruit" />
      <div className="basket__name">{title}</div>
      <div className="basket__weight">
        <span className="basket__remove-one-item">
          <button id={id} onClick={removeOneItem}>
            {" "}
            -{" "}
          </button>
        </span>
        <span className="basket__selected-item">{selectedItem} kg</span>
        <span className="basket__add-one-item">
          <button id={id} onClick={addOneItem}>
            {" "}
            +{" "}
          </button>
        </span>
      </div>
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
