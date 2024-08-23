import React, { useEffect, useState, ChangeEvent } from "react";
import Card from "../components/Card";
import Input from "../ui/Input";
import { ISneaker } from "../types/types";
import Basket from "../pages/Basket";
import SkeletonItems from "../components/SkeletonItems";
import Header from "../components/Header";
import { current } from "@reduxjs/toolkit";

interface Sneaker {
  name: string;
  image: string;
  id: number;
  price: string;
  element: string;
}

const Favorites: React.FC = () => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [isloading, setIsloading] = useState<boolean>(true);
  const [searchItem, setSearchItem] = useState<string>("");
  const [basket, setBasket] = useState<boolean>(true);
  const [page, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [sortSneakers, setSortSneakers] = useState<Sneaker[]>(sneakers);


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
    if (
      target.documentElement.scrollHeight -
        (target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    if (!basket) {
      document.body.style.overflow = "hidden";
    } else if (basket) {
      document.body.style.overflow = "";
    }
  }, [basket]);

  return (
    <div className="wrapper">
      {!basket ? <Basket toggleBasket={toggleBasket} /> : ""}
      <Header toggleBasket={toggleBasket} />
      <div className="line"></div>
      <div className="wrapper__content">
        <div className="slider">
          <img src="/images/header/content/slider.png" alt="" />
        </div>
      </div>
      <div className="wrapper__content__inner">
        <h1>Мои закладки</h1>
      </div>
      <div className="card__sneakers">
      </div>
    </div>
  );
};

export default Favorites;
