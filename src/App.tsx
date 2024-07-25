import React from 'react'

const App: React.FC = () => {
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
            <li><img width={18} height={18}  src="/images/header/basket.png" alt="" /> <span>1205 руб.</span> </li>
            <li><img width={18} height={18}  src="/images/header/favorites.png" alt="" /> <span>Закладки</span> </li>
            <li><img width={18} height={18}  src="/images/header/brand.png" alt="" /> <span>Профиль</span> </li>
          </ul>
        </div>
      </header>
      <div className="line"></div>
      <div className="wrapper__content">
        <div className="slider">
          <img src="" alt="" />
        </div>
        <h1>Все кроссовки</h1>
      </div>
    </div>
  )
}

export default App;