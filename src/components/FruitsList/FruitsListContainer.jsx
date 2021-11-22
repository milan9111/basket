import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addInBasket, clearAllCard } from "../../redux/basketReducer";
import FruitsList from "./FruitsList";

const FruitsListContainer = ({
  dataFruits,
  addInBasket,
  idFruitsInBasket,
  clearAllCard,
  fruitCalcSum,
}) => {
  const onClearAll = () => {
    clearAllCard();
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

export default compose(connect(mapStateToProps, { addInBasket, clearAllCard }))(
  FruitsListContainer
);
