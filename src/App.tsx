import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Input from "./ui/Input";
import { ISneaker } from "./types/types";
import Basket from "./pages/Basket";

interface Sneaker {
  name: string;
  image: string;
  id: number;
  element: string;
}

const App: React.FC = () => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [isloading, setIsloading] = useState<boolean>(false);
  const [searchItem, setSearchItem] = useState<string>("");
  const [basket, setBasket] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://652ad3c14791d884f1fd67ca.mockapi.io/Sneakers")
      .then((response) => response.json())
      .then((res) => {
        setIsloading(false);
        setSneakers(res);
      });
  }, []);

  const toggleBasket = () => {
    setBasket(!basket);
  };

  useEffect(() => {
    if (!basket) {
      document.body.style.overflow = "hidden";
    } else if (basket) {
      document.body.style.overflow = "";
    }
  }, [basket]);

  //Filter search
  const filteredSneakers = sneakers.filter((item) => {
    return item.name.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <div className="wrapper">
      {!basket ? (
        <Basket toggleBasket={toggleBasket} />
      ) : (
        ""
      )}
      <header>
        <div className="header__left">
          <div className="header__left__logo">
            <img width={40} height={40} src="/images/header/brand.png" alt="" />
          </div>
          <div className="header__left__text">
            <h2>REACT SNEAKERS</h2>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="header__right">
          <ul>
            <li>
              <img
                width={18}
                height={18}
                src="/images/header/basket.png"
                alt=""
                onClick={toggleBasket}
              />{" "}
              <span>1205 руб.</span>{" "}
            </li>
            <li>
              <img
                width={18}
                height={18}
                src="/images/header/favorites.png"
                alt=""
              />{" "}
              <span>Закладки</span>{" "}
            </li>
            <li>
              <img
                width={18}
                height={18}
                src="/images/header/profile.png"
                alt=""
              />{" "}
              <span>Профиль</span>{" "}
            </li>
          </ul>
        </div>
      </header>
      <div className="line"></div>
      <div className="wrapper__content">
        <div className="slider">
          <img src="/images/header/content/slider.png" alt="" />
        </div>
      </div>
      <div className="wrapper__content__inner">
        <h1>Все кроссовки</h1>
        <div className="wrapper__content__inner__input">
          <Input setSearchItem={setSearchItem} />
        </div>
      </div>
      <div className="card__sneakers">
        {filteredSneakers.map((element: Sneaker) => {
          return <Card element={element} />;
        })}
      </div>
    </div>
  );
};

export default App;
