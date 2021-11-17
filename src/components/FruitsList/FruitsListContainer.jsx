import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  addInBasket,
  clearAllCard,
  setFruitsCalcSum,
} from "../../redux/basketReducer";
import FruitsList from "./FruitsList";

const FruitsListContainer = ({
  dataFruits,
  addInBasket,
  idFruitsInBasket,
  clearAllCard,
  setFruitsCalcSum,
}) => {
  const onClearAll = () => {
    clearAllCard();
  };

  const fruitCalcSum = (count, id) => {
    dataFruits.fruits.forEach((item) => {
      if (item.id === Number(id) && Number(id) === 3) {
        let integer = Math.floor(count / 3);
        let fullPrice = count - integer;
        let priceForPapaya =
          fullPrice * item.price + integer * (item.price / 2);
        setFruitsCalcSum(id, priceForPapaya);
      }
      if (item.id === Number(id) && Number(id) !== 3) {
        setFruitsCalcSum(id, count * item.price);
      }
    });
  };

  let showFruit = dataFruits.fruits.map((item) => (
    <FruitsList
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
      description={item.description}
      addInBasket={addInBasket}
      dataFruits={dataFruits}
      idFruitsInBasket={idFruitsInBasket}
      fruitCalcSum={fruitCalcSum}
    />
  ));
  return (
    <main className="products">
      <h3 className="products__title">Fresh fruits</h3>
      <div className="products__list">{showFruit}</div>
      <div className="products__clear">
        <button onClick={onClearAll}>Clear all</button>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    dataFruits: state.fruitsPage,
    idFruitsInBasket: state.basketPage,
  };
};

export default compose(
  connect(mapStateToProps, { addInBasket, clearAllCard, setFruitsCalcSum })
)(FruitsListContainer);
