import React, { useEffect } from 'react'
import { ISneaker } from "../types/types";
import { useRef } from "react";
import { deleteItemFromCart } from "../redux/cart/reducer"
import { useDispatch } from 'react-redux';
interface CardBasketProps {
  element: ISneaker
}

const CardBasket: React.FC<CardBasketProps> = ({element}) => {
  const dispatch = useDispatch()
  const closeButtonInCart = () =>{
    dispatch(deleteItemFromCart(element.id))
  }
  console.log(element)
  return (
    <div className="drawer__content" >
      <div className='drawer__content__close__btn' onClick={closeButtonInCart}>X</div>
      <img width={133} height={112} src={element.image} alt="" />
      <span>{element.name}</span>
      <span>{element.price}</span>
    </div>
  )
}

export default CardBasket;