import React from 'react';
import './Header.css';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"} className="header__clearlink">
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders" className="header__clearlink">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout" className="header__clearlink">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="nav__sprite">
        <Link>
          {" "}
          <div className="secondHeader">
            {" "}
            <p className="flex items-center">
              {" "}
              <MenuIcon className="h-6 mr-1 menuu" />{" "}
            </p>{" "}
            <Link to="https://www.amazon.com/amazonprime?ref_=nav_cs_primelink_nonmember">
              {" "}
              <p className="link">Prime Video</p>{" "}
            </Link>{" "}
            <p className="link">Amazon Business</p>{" "}
            <p className="link">Today's Deals</p>{" "}
            <p className="link hidden lg:inline-flex">Electronics</p>{" "}
            <p className="link hidden lg:inline-flex">Food &Grocery</p>{" "}
            <p className="link hidden lg:inline-flex">Prime</p>{" "}
            <p className="link hidden lg:inline-flex">Buy Again</p>{" "}
            <p className="link hidden lg:inline-flex">Shoper toolkit</p>{" "}
            <p className="link hidden lg:inline-flex">Health & parsonal Care</p>{" "}
          </div>{" "}
        </Link>
      </div> */}
    </>
  );
}

export default Header;

