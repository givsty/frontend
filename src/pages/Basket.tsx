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
  const drawerItemsStyle: React.CSSProperties = basketItems.length === 0 ? { overflow: 'hidden' } : {};
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
        <div className="drawer__items" style={drawerItemsStyle}>
          {basketItems.length !== 0 ? basketItems.map((element, index) => {
            let price = Number(element.price);
            summBasket += price;
            return (
              <CardBasket element={element} key={index} />
            );
          }) : <EmptyBasket toggleBasket={toggleBasket}/>}
        </div>
        {basketItems.length !== 0 && (
          <div className="drawer__footer">
            <div className="drawer__footer-row">
              <span>Итого:</span>
              <div className="dashed-line"></div>
              <span>{summBasket} руб.</span>
            </div>
            <div className="drawer__footer-row">
              <span>Налог 5%:</span>
              <div className="dashed-line"></div>
              <span>{Math.round(summBasket * 0.05)} руб.</span>
            </div>
            <button className="checkout-button">Оформить заказ</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
