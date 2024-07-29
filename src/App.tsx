import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Input from "./ui/Input";
import {ISneaker} from './types/types'
interface Sneaker {
  name: string;
  image: string;
  element: string;
}
// interface SearchItem{
//   any:[]
// }

const App: React.FC = () => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [isloading, setIsloading] = useState<boolean>(true);
  const [searchItem, setSearchItem] = useState<string>("");
  useEffect(() => {
    fetch("https://652ad3c14791d884f1fd67ca.mockapi.io/Sneakers")
      .then((response) => response.json())
      .then((res) => {
        setIsloading(false);
        setSneakers(res);
      });
  }, []);


  //Filter search
  const filteredSneakers = sneakers.filter((item)=>{
    return item.name.toLowerCase().includes(searchItem.toLowerCase())
  })
  return (
    <div className="wrapper">
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
          <Input setSearchItem={setSearchItem}/>
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
