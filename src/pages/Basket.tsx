import React, { useState } from "react";
import CardBasket from "../components/CardBasket";
import { ISneaker } from "../types/types";
import { useSelector } from "react-redux";

interface BasketProps {
  toggleBasket: () => void;
}

const Basket: React.FC<BasketProps> = ({ toggleBasket }) => {
  const baksetItems = useSelector(
    (state: { cart: { itemsInCart: ISneaker[] } }) => state.cart.itemsInCart
  );
  let summBasket = 0
  console.log(summBasket)
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__close__btn" onClick={toggleBasket}>
          <span>Назад</span>
        </div>
        <h3>Корзина</h3>
        {baksetItems.map((element, index) => {
          let price = Number(element.price)
          summBasket += price
          return (
          <CardBasket element={element} key={index} />
        );
        })}
        <ul>
          <li><span>Итого<div className="basket-line"></div>{summBasket}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Basket;
