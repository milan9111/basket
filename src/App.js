import React from "react";
import "./styles/styles.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import FruitsListContainer from "./components/FruitsList/FruitsListContainer";
import BasketContainer from "./components/Basket/BasketContainer";
import Error from "./components/Error/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app__container">
      <Router>
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<FruitsListContainer />} />
          <Route path="/basket" element={<BasketContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
