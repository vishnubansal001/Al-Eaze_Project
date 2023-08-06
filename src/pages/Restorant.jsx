import React from "react";
import "../styles/resto.css";

const Restorant = () => {
  return (
    <div className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <h2 className="mr-4 text-center" style={{marginTop:"100px" , color:"white", textAlign:"center"}}>
        AL-Eaze Eats
      </h2>
      <br></br>
      <br></br>
      <div className="res">
        <div>
          <img src={require("../images/1.jpg")} className="img" />
        </div>
        <div className="content">
          <h4>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Altitude
            Cafe & Deli, Lodhi Colony, New Delhi {"\n"}
          </h4>
          <p>
            Altitude Cafe and Deli is situated in Meherchand market and is a
            charming cafe that promotes healthy eating through their wide range
            of fresh, organic, gluten-free and extremely healthy food.This place
            is a god send for anyone who is lactose intolerant, gluten
            intolerant and anyone who is looking to eat healthy.<br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.google.com/maps/place/The+Altitude+Store/@28.5829943,77.2268999,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce2ee3a3b27c3:0x2cb7784f4382db34!8m2!3d28.5829943!4d77.2268999!16s%2Fg%2F11mmc1qt54?entry=ttu">
              SEE ON MAP
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09266634944
          </p>
        </div>
      </div>
      <div className="res">
        <div>
          <img src={require("../images/r2.jpg")} className="img" />
        </div>
        <div className="content">
          <h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Free of gluten
            - Chocolate Temptation , New Delhi{"\n"}
          </h3>

          <p>
            You can share perfectly cooked gluten-free pizza, pies and
            sandwiches with your friends and have a nice time here. Enjoy good
            chocolate cakes, brownies and cupcakes that are proposed at Free of
            gluten - Chocolate Temptation. <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.google.com/maps/dir/26.8427879,75.8417746/free+of+gluten+-+chocolate+temptation/@27.7172041,75.1881086,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390d1d4e5e2b48b1:0x2dfeb7fe1a9ac576!2m2!1d77.1705568!2d28.5871492?entry=ttu">
              SEE ON MAP
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09871119902
          </p>
        </div>
      </div>
      <div className="res">
        <div>
          <img src={require("../images/three.jpg")} className="img" />
        </div>
        <div className="content">
          <h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fab Cafe,
            Vasant Kunj, New Delhi {"\n"}
          </h3>

          <p>
            With items like Jackfruit Egg Parantha and momos made with root
            starches, this cafe has some of the best, gluten-free options on its
            menu.So head on over for a wholesome, healthy meal and maybe even
            indulge yourself with some artisanal ice cream (masala chai flavour,
            anyone?).
            <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.google.com/maps/place/The+Altitude+Store/@28.5829943,77.2268999,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce2ee3a3b27c3:0x2cb7784f4382db34!8m2!3d28.5829943!4d77.2268999!16s%2Fg%2F11mmc1qt54?entry=ttu">
              SEE ON MAP
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01146041708
          </p>
        </div>
      </div>
      <div className="res">
        <div>
          <img src={require("../images/four.jpg")} className="img" />
        </div>
        <div className="content">
          <h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Earth Cafe,
            Waterfield Road, Mumbai{"\n"}
          </h3>

          <p>
            If you're looking for a guilt-free, gluten free and vegan café in
            Mumbai - look no further than Earth Café at Waterfield. Serving up
            healthy and delicious meals, this establishment is perfect for
            anyone on a diet or wanting to try something different.
            <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.google.com/maps/dir/26.8427879,75.8417746/Earth+Cafe+@+Waterfield%5C/@22.8772663,68.9572936,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be7c9be9b3857c9:0x69f91c41e32b5181!2m2!1d72.834038!2d19.0590714?entry=ttu">
              SEE ON MAP
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09819828989
          </p>
        </div>
      </div>
      <div className="res">
        <div>
          <img src={require("../images/five.jpg")} className="img" />
        </div>
        <div className="content">
          <h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sante Spa
            Cuisine Khar(W), Mumbai{"\n"}
          </h3>

          <p>
            {" "}
            It is a restaurant that focuses on organic, vegan and gluten-free
            meals. The menu features fresh salads, healthy smoothies and low
            calorie pizzas made with ragi flour. The atmosphere is peaceful and
            relaxing, perfect for enjoying a guilt free meal.
            <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.google.com/maps/place/Sante+Spa+Cuisine+Khar(W)/@19.0710952,72.839591,17.16z/data=!4m6!3m5!1s0x3be7c97a1a8a75d7:0xeaf1fe2b543c4a4a!8m2!3d19.0710788!4d72.8395932!16s%2Fg%2F11s0f1s_y8?entry=ttu">
              SEE ON MAP
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+918767861111
          </p>
        </div>
      </div>
      <div className="res">
        <div>
          <img src={require("../images/six.jpg")} className="img" />
        </div>
        <div className="content">
          <h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sequel,
            Bandra, Mumbai{"\n"}
          </h3>

          <p>
            {" "}
            A trendy, all-organic restaurant in a hip setting, Sequel offers a
            range of healthy and delicious dishes. Their smoothie bowls, juices,
            and desserts are popular with regulars. The restaurant is known for
            its strict adherence to organic standards, without any use of sugar
            or refined flours.
            <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.google.com/maps/place/Sequel,+Bandra/@19.0653938,72.8305678,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c913086b5387:0x92fecf0ae6c51992!8m2!3d19.0653938!4d72.8305678!16s%2Fg%2F11c44nkr1h?entry=ttu">
              SEE ON MAP
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;07506477710
          </p>
        </div>
      </div>
    </div>
  );
};

export default Restorant;
