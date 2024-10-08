import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../redux/cart/reducer";

interface CardProps {
  element: {
    id: number;
    name: string;
    image: string;
    price: string;
  };
}

const Card: React.FC<CardProps> = ({ element }) => {
  const [changeFavorite, setChangeFavorite] = useState<boolean>();
  const [changeAdd, setChangeAdd] = useState<boolean>();
  const dispatch = useDispatch();
  const toggleAdd = () => {
    setChangeAdd(!changeAdd);
    dispatch(setItemInCart(element));
  };

  const toggleFavoritesActive = () => {
    setChangeFavorite(!changeFavorite);
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <img
            width={30}
            height={30}
            src={
              changeFavorite
                ? "/images/header/content/favoriteActive.png"
                : "/images/header/content/favoriteDefault.png"
            }
            alt=""
            onClick={toggleFavoritesActive}
          />
        </div>
        <img width={133} height={112} src={element.image} alt="" />
        <div className="card-content">
          <span>Кроссовки</span>
          <p>{element.name}</p>
          <br />
          <div className="card-content___wrapper">
            <div className="card-content___wrapper-price">
              <span>Цена:</span>
              <h5>{element.price} руб.</h5>
            </div>
            <div className="card-content__favorite">
              <img
                width={30}
                height={30}
                src={
                  changeAdd
                    ? "images/header/content/addActive.png"
                    : "images/header/content/add.png"
                }
                alt=""
                onClick={toggleAdd}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
