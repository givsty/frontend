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

const Home: React.FC = () => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [isloading, setIsloading] = useState<boolean>(true);
  const [searchItem, setSearchItem] = useState<string>("");
  const [basket, setBasket] = useState<boolean>(true);
  const [page, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [sortSneakers, setSortSneakers] = useState<Sneaker[]>(sneakers);

  //Sort low to high
  const sortingItemLowest = (arr: Sneaker[]): Sneaker[] => {
    return [...arr].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  };
  //Sort high to low
  const sortingItemHighest = (arr: Sneaker[]): Sneaker[] => {
    return [...arr].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  };

  // Response to mock api
  useEffect(() => {
    if (fetching) {
      fetch(
        `https://652ad3c14791d884f1fd67ca.mockapi.io/Sneakers?page=${page}&limit=12`
      )
        .then((response) => response.json())
        .then((res) => {
          setIsloading(false);
          setSneakers((prevSneakers) => [...prevSneakers, ...res]);
          setCurrentPage((page) => (page += 1));
          setFetching(false);
        })
        .catch((err) => {
          console.log(err);
          setFetching(false);
        });
    }
  }, [fetching, page]);

  const toggleBasket = () => {
    setBasket(!basket);
  };

  const sort = (event: ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === "highest") {
      setSortSneakers(sortingItemHighest([...filteredSneakers]));
    } else if (value === "lowest") {
      setSortSneakers(sortingItemLowest([...filteredSneakers]));
    }
  };

  //Block scroll on modal
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

  //Filter search
  const filteredSneakers = sneakers.filter((item) => {
    return item.name.toLowerCase().includes(searchItem.toLowerCase());
  });

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
        <h1>Все кроссовки</h1>
        <div className="wrapper__content__inner-list">
          <span>Сортировка по:</span>
          <select className="dropdown" onChange={(event) => sort(event)}>
            <option disabled selected>
              Выберите тип сортировки
            </option>
            <option value="highest">Возрастанию</option>
            <option value="lowest">Убыванию</option>
          </select>
        </div>
        <div className="wrapper__content__inner__input">
          <Input setSearchItem={setSearchItem} />
        </div>
      </div>
      <div className="card__sneakers">
        {isloading
          ? [...new Array(10)].map((_, index) => <SkeletonItems key={index} />)
          : (sortSneakers.length > 0 ? sortSneakers : filteredSneakers).map(
              (element: Sneaker, index) => (
                <Card element={element} key={index} />
              )
            )}
      </div>
    </div>
  );
};

export default Home;
