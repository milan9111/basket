import React from "react";
import "./../../styles/styles.css";
import logo from "./../../source/images/logo.jpg";
import { Link } from "react-router-dom";

const Header = ({ choseFruit }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          {" "}
          <img src={logo} alt={"logo"} />
        </Link>
      </div>
      <div className="header__link">
        <Link to="/basket">
          <button>
            <span>{choseFruit ? choseFruit : null}</span> Your basket
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
