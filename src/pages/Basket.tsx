import React, { useState } from "react";
import CardBasket from "../components/CardBasket";
import { ISneaker } from "../types/types";

interface BasketProps {
  toggleBasket: () => void;
  baksetItems: string[]
}

const Basket: React.FC<BasketProps> = ({ toggleBasket, baksetItems }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__close__btn" onClick={toggleBasket}>
          <span>Назад</span>
        </div>
        <h3>Корзина</h3>
        {baksetItems.map(() => {
          return <CardBasket />;
        })}
      </div>
    </div>
  );
};

export default Basket;
 