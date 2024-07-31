import React from 'react'
import { ISneaker } from "../types/types";
interface CardBasketProps {
  baksetItems: ISneaker[]
}

const CardBasket: React.FC<CardBasketProps> = ({baksetItems}) => {
  return (
    <div className="drawer__content" >
      <img src="" alt="" />
      <span>Мужские кроссовки</span>
    </div>
  )
}

export default CardBasket