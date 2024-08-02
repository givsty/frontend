import React, { useState } from "react";
import CardBasket from "../components/CardBasket";
import { ISneaker } from "../types/types";
import { useSelector } from "react-redux";
import {Pages} from "../types/types"

const Profile: React.FC<Pages> = ({ toggleBasket }) => {
  const baksetItems = useSelector(
    (state: { cart: { itemsInCart: ISneaker[] } }) => state.cart.itemsInCart
  );
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__close__btn" onClick={toggleBasket}>
          <span>Назад</span>
        </div>
        <h3>Избранное</h3>
        {baksetItems.map((element, index) => {
          return (
          <CardBasket element={element} key={index} />
        );
        })}
      </div>
    </div>
  );
};

export default Profile;
