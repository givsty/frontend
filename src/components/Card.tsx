import React, { useState } from "react";
const Card: React.FC = () => {
  const [changeFavorite, setChangeFavorite] = useState(1)
  return (
    <>
      <div className="card">
        <img
          src="/images/header/content/favoriteDefault.png"
          alt=""
          onClick={() => {
            console.log("Добавить в избранное");
          }}
        />
        <ul>
          <li>
            <img
              src="/images/header/card/sneaker.png"
              alt=""
              width={133}
              height={112}
            />
          </li>
        </ul>
        <span className="">Мужские Кроссовки Nike Blazer Mid Suede</span>
        <div className="card__footer">
          <ul>
            <li>ЦЕНА:</li>
            <li>12 999</li>
          </ul>
          <div className="add">
            <img
              src="images/header/content/add.png"
              alt=""
              onClick={() => {
                console.log("добавить в корзину");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
