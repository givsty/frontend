import React, { useEffect } from "react";
import { ISneaker } from "../types/types";
import { useRef } from "react";
import { deleteItemFromCart } from "../redux/cart/reducer";
import { useDispatch } from "react-redux";
import closeButtonSvg from "../images/closeButton.svg";
interface CardBasketProps {
  element: ISneaker;
}

const CardBasket: React.FC<CardBasketProps> = ({ element }) => {
  const dispatch = useDispatch();
  const closeButtonInCart = () => {
    dispatch(deleteItemFromCart(element.id));
  };
  console.log(element);
  return (
    <div className="drawer__content">
      <img
        className="basket__card-img"
        src={element.image}
        alt=""
      />
      <div className="drawer__description">
        <p>{element.name}</p>
        <span className="price">{element.price} руб.</span>
      </div>
      <img
        className="close-btn"
        src={closeButtonSvg}
        alt=""
        onClick={closeButtonInCart}
      />
    </div>
  );
};

export default CardBasket;
