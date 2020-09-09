import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />

        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav" />

      {/*  TODO REMOVE */}
      <Link to="/Checkout">
      <img
          className="header__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm2JP4-jfKIDOOBoO7H9FKlkrvJFFRJe2_GA&usqp=CAU"
          alt=""
        />
      </Link>

      <div className="header__options">
        <span className="header__optionLineOne">Hello Guest</span>
        <span className="header__optionLineTwo">Sign in</span>
      </div>

      <div className="header__options">
        <span className="header__optionLineOne">Return</span>
        <span className="header__optionLineTwo">& Order</span>
      </div>

      <div className="header__options">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>

      <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header__basketCount">
          {basket?.length}
        </span>
      </div>
    </div>
  );
}

export default Header;
