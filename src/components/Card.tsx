import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { setItemInCart } from "../redux/cart/reducer";
interface CardProps {
  element: {
    id:number;
    name: string;
    image: string;
    price: string
  };
}

const Card: React.FC<CardProps> = ({ element }) => {
  const [changeFavorite, setChangeFavorite] = useState<boolean>();
  const [changeAdd, setChangeAdd] = useState<boolean>();
  const dispatch = useDispatch();
  const toggleAdd = () => {
    setChangeAdd(!changeAdd);
    dispatch(setItemInCart(element))
  };

  const toggleFavoritesActive = () => {
    setChangeFavorite(!changeFavorite);
    dispatch(setItemInCart(element))
  };

  return (
    <>
      <div className="card">
        <img
          src={
            changeFavorite
              ? "/images/header/content/favoriteActive.png"
              : "/images/header/content/favoriteDefault.png"
          }
          alt=""
          onClick={toggleFavoritesActive}
        />
        <ul>
          <li>
            <img src={element.image} alt="" width={133} height={112} />
          </li>
        </ul>
        <span className="">{element.name}</span>
        <div className="card__footer">
          <ul>
            <li>{element.price}</li>
          </ul>
          <div className="add">
            <img
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
    </>
  );
};

export default Card;
