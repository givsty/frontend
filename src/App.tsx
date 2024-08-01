import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Input from "./ui/Input";
import { ISneaker } from "./types/types";
import Basket from "./pages/Basket";
import ContentLoader from "react-content-loader";
import SkeletonItems from "./components/SkeletonItems";

interface Sneaker {
  name: string;
  image: string;
  id: number;
  price: string;
  element: string;
}

const App: React.FC = () => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [isloading, setIsloading] = useState<boolean>(true);
  const [searchItem, setSearchItem] = useState<string>("");
  const [basket, setBasket] = useState<boolean>(true);
  const [page, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState<boolean>(true)

  useEffect(() => {
    fetch("https://652ad3c14791d884f1fd67ca.mockapi.io/Sneakers?page=3")
      .then((response) => response.json())
      .then((res) => {
        setIsloading(!isloading);
        setSneakers(res);
      });
  }, [fetching]);

  const toggleBasket = () => {
    setBasket(!basket);
  };


  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e: Event) => {
    const target = e.target as Document;
    if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 100 )  {
      setFetching(true)
    }
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
      {!basket ? <Basket toggleBasket={toggleBasket} /> : ""}
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
        {isloading
          ? [...new Array(10)].map((index) => <SkeletonItems key={index}/>)
          : filteredSneakers.map((element: Sneaker, index) => {
              return <Card element={element} key={index} />;
            })}
      </div>
    </div>
  );
};

export default App;
