import React from 'react'
import { ISneaker } from "../types/types";
interface CardBasketProps {
  element: ISneaker
}
const CardBasket: React.FC<CardBasketProps> = ({element}) => {
  return (
    <div className="drawer__content" >
      <img src={element.image} alt="" />
      <span>{element.name}</span>
      <span>{element.price}</span>
    </div>
  )
}

export default CardBasket