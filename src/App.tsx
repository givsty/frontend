import React from 'react'
import basket from './images/header/basket.png'
import favorites from './images/header/favorites.png'
import brand from './images/header/brand.png'
const App: React.FC = () => {
  return (
    <div className="wrapper">
      <header>
        <div className="header__left">
          <div className="header__left__logo">
            <img width={40} height={40} src={brand} alt="" />
          </div>
          <div className="header__left__text">
            <h2>REACT SNEAKERS</h2>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="header__right">
          <ul>
            <li><img width={18} height={18}  src={basket} alt="" /> <span>1205 руб.</span> </li>
            <li><img width={18} height={18}  src={favorites} alt="" /> <span>Закладки</span> </li>
            <li><img width={18} height={18}  src="" alt="" /> <span>Профиль</span> </li>
          </ul>
        </div>
      </header>
      <div className="line"></div>
      <div className="wrapper__content">
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default App;