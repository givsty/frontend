import React from "react";
interface EmptyBaskettProps {
  toggleBasket: () => void;
}
const EmptyBasket: React.FC<EmptyBaskettProps> = ({ toggleBasket }) => {
  return (
    <div className="empty__basket">
      <div className="empty__basket__wrapper">
        <h3>Корзина пустая</h3>
        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
        <button onClick={toggleBasket}>Вернуться назад</button>
      </div>
    </div>
  );
};

export default EmptyBasket;

