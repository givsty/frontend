import React, { useState } from "react";
const Card: React.FC = () => {
  const [changeFavorite, setChangeFavorite] = useState<boolean>()
  const [changeAdd, setChangeAdd] = useState<boolean>()

  const toggleAdd = () =>{
    setChangeAdd(!changeAdd)
  }
  const toggleFavoritesActive = () =>{
    setChangeFavorite(!changeFavorite)
  }
  
  return (
    <>
      <div className="card">
        <img
          src={changeFavorite ?  "/images/header/content/favoriteActive.png" : "/images/header/content/favoriteDefault.png"}
          alt=""
          onClick={toggleFavoritesActive}
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
              src={changeAdd ? "images/header/content/addActive.png" :"images/header/content/add.png"}
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
