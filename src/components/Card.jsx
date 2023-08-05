import React from 'react'
import '../styles/card.css'
import { Link } from 'react-router-dom'
const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,
}) => {
  return (
    <div className='card-container'>
      <img src={imgSrc} alt='' className={imgAlt}/>
      <h1 className='card-title'>{title}</h1>
      <p className='card-description'>{description}</p>
      <div className='card-btn'>{buttonText}</div>
    </div>
  )
}

export default Card