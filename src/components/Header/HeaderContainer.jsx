import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Header from "./Header";

const HeaderContainer = ({ idFruitsInBasket }) => {
  const [choseFruit, setChoseFruit] = useState(null);

  useEffect(() => {
    setChoseFruit(new Set(idFruitsInBasket.fruitsInBasket).size);
  }, [idFruitsInBasket.fruitsInBasket]);

  return <Header choseFruit={choseFruit} />;
};

const mapStateToProps = (state) => {
  return {
    idFruitsInBasket: state.basketPage,
  };
};

export default compose(connect(mapStateToProps, {}))(HeaderContainer);
