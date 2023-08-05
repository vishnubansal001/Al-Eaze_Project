import React from 'react'
import '../styles/recipe.css'
import Card from '../components/Card'
// import {Image }

const recipe = () => {
  return (
    <div className='Body'>
      <div className='heroDiv'><img  className='heroImage' src={require("../images/backgroundRecipe.jpg")} alt="" /></div>
      <div className='cardContainer mt-5'>
      <Card 
            imgSrc={require("../images/DoctorsLand.jpg")}
            imgAlt="Card Image"
            title="Consultants"
            description="Get expert advice from allergists and healthcare professionals through our Ask-an-Expert section!"
            buttonText="See more"
            link="/recipe-poha"
            />
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
