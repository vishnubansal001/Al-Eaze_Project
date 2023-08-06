import React from 'react'
import '../styles/recipe.css'
import Card from '../components/Card'
// import {Image }

const recipe = () => {
  return (
    <div className='Body'>
      <div className='heroDiv'><img  className='heroImage'   src={require("../images/backgroundRecipe.jpg")} alt="" /></div>
      <div className='cardContainer mt-5'>
      <Card 
            imgSrc={require("../images/pexel-shabax-recipe.jpg")}
            imgAlt="Poha"
            title="Poha"
            // description="Get expert advice from allergists and healthcare professionals through our Ask-an-Expert section!"
            buttonText="See recipe"
            link="/recipe-poha"
            />
        <Card imgSrc={require("../images/methi_pulao.jpg")}
            imgAlt="Poha"
            title="Methi Pulao"
            // description="Get expert advice from allergists and healthcare professionals through our Ask-an-Expert section!"
            buttonText="See recipe"
            link="/recipe-poha" />
        <Card imgSrc={require("../images/veg-pulao-1152x1536.webp")}
            imgAlt="Poha"
            title="Veg Pulao"
            // description="Get expert advice from allergists and healthcare professionals through our Ask-an-Expert section!"
            buttonText="See recipe"
            link="/recipe-poha"/>
      </div>
      <div className='cardContainer'>
        <Card imgSrc={require("../images/instant-pot-Paneer_butter_masala.jpg")}
            imgAlt="Poha"
            title="Paneer Butter Masala"
            // description="Get expert advice from allergists and healthcare professionals through our Ask-an-Expert section!"
            buttonText="See recipe"
            link="/recipe-poha"/>
        <Card imgSrc={require("../images/rice-kheer.jpg")}
            imgAlt="Poha"
            title="Rice Kheer"
            // description="Get expert advice from allergists and healthcare professionals through our Ask-an-Expert section!"
            buttonText="See recipe"
            link="/recipe-poha"/>
        <Card imgSrc={require("../images/avocado_banana_smoothie.jpg")}
            imgAlt="Poha"
            title="Avocado Banana Smoothie"
            // description="Get expert advice from allergists and healthcare professionals through our Ask-an-Expert section!"
            buttonText="See recipe"
            link="/recipe-poha" />
      </div>
    </div>
  )
}

export default recipe
