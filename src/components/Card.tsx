import React from 'react'

const Card: React.FC = () => {
  return (
  <>
    <div className="card">
      <ul>
        <li><img src="/images/header/content/favorites.svg" alt="" /></li>
        <li><img src="/images/header/card/sneaker.png" alt="" width={133} height={112}/></li>
      </ul>
      <span className=''>
      Мужские Кроссовки Nike Blazer Mid Suede
      </span>
      <div className="card__footer">
        <ul>
          <li>ЦЕНА:</li>
          <li>12 999</li>
        </ul>
        <img src="" alt="" />
      </div>
    </div>
  </>
  )
}

export default Card;