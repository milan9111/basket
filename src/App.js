import React from "react";
import "./styles/styles.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { setFruitsCalcSum } from "./redux/basketReducer";
import HeaderContainer from "./components/Header/HeaderContainer";
import FruitsListContainer from "./components/FruitsList/FruitsListContainer";
import BasketContainer from "./components/Basket/BasketContainer";
import Error from "./components/Error/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = ({ dataFruits, setFruitsCalcSum }) => {
  const fruitCalcSum = (count, id) => {
    dataFruits.fruits.forEach((item) => {
      if (item.id === Number(id) && Number(id) === 3) {
        let integerWithDiscount = Math.floor(count / 3);
        let fullPrice = count - integerWithDiscount;
        let priceForPapaya =
          fullPrice * item.price + integerWithDiscount * (item.price / 2);
        setFruitsCalcSum(id, priceForPapaya);
      }
      if (item.id === Number(id) && Number(id) !== 3) {
        setFruitsCalcSum(id, count * item.price);
      }
    });
  };

  return (
    <div className="app__container">
      <Router>
        <HeaderContainer />
        <Routes>
          <Route
            path="/"
            element={<FruitsListContainer fruitCalcSum={fruitCalcSum} />}
          />
          <Route
            path="/basket"
            element={<BasketContainer fruitCalcSum={fruitCalcSum} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataFruits: state.fruitsPage,
  };
};

export default compose(connect(mapStateToProps, { setFruitsCalcSum }))(App);
