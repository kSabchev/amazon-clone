import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav" />
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

      <div className="header__optionsBasket">
        <ShoppingBasketIcon />
        <span className="heaader__basketCount header__optionBasket">0</span>
      </div>
    </div>
    
  );
}

export default Header;
