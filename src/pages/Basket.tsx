import React, { useState, useEffect } from "react";
import CardBasket from "../components/CardBasket";
import EmptyBasket from "../components/EmptyBasket";
import { ISneaker } from "../types/types";
import { useSelector } from "react-redux";
import { useRef } from "react";
interface BasketProps {
  toggleBasket: () => void;
}

const Basket: React.FC<BasketProps> = ({ toggleBasket }) => {
  const isMounted = useRef(false);
  let summBasket = 0
  const basketItems = useSelector(
    (state: { cart: { itemsInCart: ISneaker[] } }) => state.cart.itemsInCart
  );
  
  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(basketItems);
      localStorage.setItem("cardItems", json);
    } else {
      isMounted.current = true;
    }
  }, [basketItems]);

  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__close__btn" onClick={toggleBasket}>
          <button>Назад</button>
        </div>
        <h3>Корзина</h3>
        {basketItems.length !== 0 ? basketItems.map((element, index) => {
          let price = Number(element.price)
          summBasket += price
          return (
          <CardBasket element={element} key={index} />
        ) ;
        }): <EmptyBasket toggleBasket={toggleBasket}/>}
        <ul className="overlay__footer">
          <li><span>Итого<div className="basket-line"></div>{summBasket}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Basket;
