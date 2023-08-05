import React from 'react'
import '../styles/recipe.css'
import Card from '../components/Card'
// import {Image }

const recipe = () => {
  return (
    <div>
      <div className='heroDiv'><img  className='heroImage' src={require("../images/backgroundRecipe.jpg")} alt="" /></div>
      <div className='cardContainer mt-5'>
        <Card />
        <Card />
        <Card />
      </div>
      <div className='cardContainer'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default recipe
