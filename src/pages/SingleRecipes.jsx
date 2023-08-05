import React from 'react'
import '../styles/singleRecipe.css'

const SingleRecipes = () => {
    return (
        <div className="body">
          <div className="hero">
            <div className="main">Poha Recipe
            </div>
            <div className="para">Poha are flattened rice flakes, also known as beaten rice. It is made by de-husking rice grains and parboiling them. They are then dried, roasted, and flattened with iron rollers.
            </div>
            <div className="Image">
          <img src={require("../images/pexel-shabax-recipe.jpg")} alt=''  height={'200px'}width={"300px"}/></div>
            <div className="ing">
                <div className="heading">Ingredients</div>
                <div className="list">
                    <ul>
                        <li>Poha: Medium or Thick poha is preferred to make this recipe. When rinsed, it gets fluffy and absorbent. It is easily available in Indian grocery stores. The thin poha doesn't work for this recipe, as it turns mushy when rinsed. You may also use red or brown rice poha.</li>
                        <li>Onion: I used finely chopped red onion. You can also yellow or white onions.</li>
                        <li>Potatoes: I used one medium Yukon gold potato. However, you can make this poha without potatoes as well.</li>
                        <li>Spices: a tempering (tadka) made using mustard seeds, cumin seeds (jeera), curry leaves, and green chilies. Turmeric powder is also used for color and flavor.</li>
                        <li>Peanuts: You can add peanuts for the crunch.</li>
                        <li>Oil: You can use any cooking oil.</li>
                        <li>Lime juice: freshly squeezed lime/lemon juice gives the best flavor.</li>
                        <li>Garnish: garnish with coriander leaves and freshly grated coconut (optional).</li>
                    </ul>
                </div>
            </div>
            <div className="ing">
                <div className="heading">Directions</div>
                <div className="list">
                    <ul className='lis'>
                        <h4>Step 1</h4>
                        <li>Gently rinse poha in a colander under running water 2-3 times until they soften, and then drain out all the water. When you press with your fingers, it should break easily. Keep it aside.</li>
                        <h4>Step 2</h4>
                        <li>Heat oil in a Kadai. Add raw peanuts and fry until they turn golden brown. Remove the peanuts to a plate and set them aside.</li>
                        <h4>Step 3</h4>
                        <li>In the same kadai, add mustard and cumin seeds and let them splutter.Then add green chilies, curry leaves, and chopped onion. Saute until onions turn soft and translucent.</li>
                    <h4>Step 4</h4>
                    <li>Next, add cubed potatoes (or mixed vegetables) and cook for 2-3 minutes. To make simple plain poha, you can skip adding potatoes or veggies.</li>
                    <h4>Step 5</h4>
                    <li>Cover and cook on medium-low heat till the potatoes are soft and perfectly cooked. Sprinkle some water if required. (You can also use pre-boiled cubed potatoes to it and saute for 2 minutes).</li>
                    <h4>Step 6</h4>
                    <li>Add rinsed and drained poha, turmeric, salt, and sugar. Mix everything well.

                        If you feel the pohe is too dry, sprinkle some water. Cover it with a lid and cook for 2 minutes on low heat.</li>
                    <h4>Step 7</h4>
                    <li>Turn off the heat. Add the lemon juice and roasted peanuts, and give a quick mix. Garnish with coriander leaves.</li>
                    <h4>Step 8</h4>
                    <li>Serve hot with Masala chai or Coffee.</li>    
                </ul>
            </div>
        </div>
        <div className="vid">
            <iframe width="1000" height="515" src="https://www.youtube.com/embed/XuttnylxuXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    </div>
  );
}

export default SingleRecipes
