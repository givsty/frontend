import React, { useState } from "react";

interface CardProps {
  element: {
    name: string;
    image: string;
  }
}
const Card: React.FC<CardProps> = ({element}) => {
  const [changeFavorite, setChangeFavorite] = useState<boolean>();
  const [changeAdd, setChangeAdd] = useState<boolean>();
  const toggleAdd = () => {
    setChangeAdd(!changeAdd);
  };
  const toggleFavoritesActive = () => {
    setChangeFavorite(!changeFavorite);
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
            <img
              src={element.image}
              alt=""
              width={133}
              height={112}
            />
          </li>
        </ul>
        <span className="">{element.name}</span>
        <div className="card__footer">
          <ul>
            <li>ЦЕНА:</li>
            <li>12 999</li>
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
