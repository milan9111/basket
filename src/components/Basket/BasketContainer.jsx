import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { removeInBasket } from "../../redux/basketReducer";
import Basket from "./Basket";

const BasketContainer = ({ dataFruits, idFruitsInBasket, removeInBasket }) => {
  let totalSum = 0;
  idFruitsInBasket.price.forEach((item) => {
    totalSum += item.sum;
  });

  let selectedProducts = [];
  dataFruits.fruits.forEach((item) => {
    if (
      Array.from(new Set(idFruitsInBasket.fruitsInBasket)).indexOf(item.id) > -1
    ) {
      selectedProducts.push(item);
    }
  });
  let showSelectedProducts = selectedProducts.map((elem) => (
    <Basket
      key={elem.id}
      id={elem.id}
      title={elem.title}
      image={elem.image}
      removeInBasket={removeInBasket}
      calcPrice={idFruitsInBasket.price}
    />
  ));

  return idFruitsInBasket.fruitsInBasket.length > 0 ? (
    <section className="basket">
      <div className="basket__box">{showSelectedProducts}</div>
      <div className="basket__total">Total: {totalSum}$</div>
      <div className="basket__button">
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </section>
  ) : (
    <section className="basket-empty">
      <div className="basket-empty__title">
        There are no products in your cart. Go back and select product...
      </div>
      <div className="basket-empty__button">
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    dataFruits: state.fruitsPage,
    idFruitsInBasket: state.basketPage,
  };
};

export default compose(connect(mapStateToProps, { removeInBasket }))(
  BasketContainer
);
