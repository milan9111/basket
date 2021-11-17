import React, { useState, useEffect } from "react";

const FruitsList = ({
  id,
  title,
  price,
  image,
  description,
  addInBasket,
  idFruitsInBasket,
  fruitCalcSum,
}) => {
  const [arrThisFruit, setArrThisFruit] = useState([]);

  useEffect(() => {
    localStorage.setItem(
      "fruitsInBasket",
      JSON.stringify(idFruitsInBasket.fruitsInBasket)
    );
    setArrThisFruit(
      idFruitsInBasket.fruitsInBasket.filter((item) => item === id)
    );
  }, [idFruitsInBasket.fruitsInBasket, id]);

  const addToCard = (event) => {
    addInBasket(event.target.id);
    fruitCalcSum(arrThisFruit.length + 1, event.target.id);
  };

  return (
    <div className="products__item">
      <img src={image} alt="fruit" />
      <div className="item__title">{title}</div>
      <div className="item__description">{description}</div>
      <div className="item__weigth">kg</div>
      <div className="item__price">
        {price} ${" "}
        {id === 3 ? <span style={{ color: "#ff0000" }}>*discount!</span> : null}
      </div>
      <div className="item__choice">
        <button id={id} onClick={addToCard}>
          Add to cart
        </button>
        <span>x {arrThisFruit.length} kg</span>
      </div>
    </div>
  );
};

export default FruitsList;
