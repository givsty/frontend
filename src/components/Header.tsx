import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  toggleBasket: () => void
}

const Header: React.FC<HeaderProps> = ({toggleBasket}) => {
  return (
    <header>
      <div className="header__left">
        <div className="header__left__logo">
          <Link to="*"><img width={40} height={40} src="/images/header/brand.png" alt="" /></Link>
        </div>
        <div className="header__left__text">
          <h2>REACT SNEAKERS</h2>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className="header__right">
        <ul>
          <li>
            <img
              width={18}
              height={18}
              src="/images/header/basket.png"
              alt=""
              onClick={toggleBasket}
            />{" "}
            <span>1205 руб.</span>{" "}
          </li>
          <li>
          <Link to="/Favorites"><img
              width={18}
              height={18}
              src="/images/header/favorites.png"
              alt=""
            /></Link>
            <span>Закладки</span>{" "}
          </li>
          <li>
            <img
              width={18}
              height={18}
              src="/images/header/profile.png"
              alt=""
            />{" "}
            <span>Профиль</span>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
