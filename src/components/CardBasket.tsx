import React, { useEffect } from 'react'
import { ISneaker } from "../types/types";
import { useRef } from "react";
interface CardBasketProps {
  element: ISneaker
}

const CardBasket: React.FC<CardBasketProps> = ({element}) => {

  return (
    <div className="drawer__content" >
      <div className='drawer__content__close__btn'>X</div>
      <img width={133} height={112} src={element.image} alt="" />
      <span>{element.name}</span>
      <span>{element.price}</span>
    </div>
  )
}

export default CardBasket