import React from 'react'
import './Card.scss'

const Card = ({Name = "Скоро будет..", photo="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif"}) => {
  return (
    <>
        <div className="card">
            <img src={photo} alt=""/>
            <h1>{Name}</h1>
            <p>66 отзывов</p>
            <button>Купить</button>
        </div>
    </>
  )
}

export default Card
