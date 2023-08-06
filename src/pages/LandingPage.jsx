import Card from "../components/Card";
import { motion } from "framer-motion";
import "../styles/landing.css";
// import NavBar from '../components/NavBar';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [swiperRef, setSwiperRef] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <Marquee style={{position:"relative", top:"110px", fontSize:"20px"}} className="marquee" >
          <p onClick={() => {navigate('/products')}} className="pointing">Empowering Allergy Awareness and Relief for a Healthier Life. AL-Eaze Recommends</p>
        </Marquee>
      </div>
      {/* <NavBar /> */}
      <div className="first-container">
        <div className="heading">
          <img
            className="heroImg"
            src={require("../images/1906.i203.016.allergy_symptoms-removebg-preview.png")}
            alt=""
          />
          <p className="mainH">Allergies won't limit you here! </p>
          <p className="sec-para" style={{fontWeight:"lighter"}}>
            Navigating life with food allergies may seem challenging, but it can
            be empowering with the right approach. From education and
            preparation to finding support and savoring new culinary
            experiences, this article explores how embracing food allergies can
            lead to a fulfilling and enriching journey.
          </p>
        </div>
      </div>
      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="second-container"
      >
        <ul className="allergy">
          <li>
            <a href="www.google.com">Wheat Allergy</a>
          </li>
          <li>Milk & Dairy Allergy</li>
          <li>Egg Allergy</li>
          <li>Soy Allergy</li>
          <li>Tree nuts Allergy</li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="third-container"
      >
        <p className="features">
          Our <span>Features</span>
        </p>
        <p className="text1">
        With a mobile-friendly design and accessibility features, this platform empowers you to navigate allergies confidently, making every aspect of your life more enjoyable and allergen-aware
        </p>
        <div className="Card-container">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Card
              imgSrc={require("../images/restaurantLand.jpg")}
              imgAlt="restaurant"
              title="Explore Restaurants"
              description="Discover even more convenience with our extensive list of allergy-friendly restaurants!"
              buttonText="See more"
              link="/restaurant"
              initial={{ x: -40 }}
              whileInView={{ x: 0 }}
            />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card 
            imgSrc={require("../images/RecipesLand.jpg")}
            imgAlt="recipe"
            title="Explore Recipes"
            description="Discover allergy-friendly recipes and meal plans designed to accommodate various dietary needs."
            buttonText="See more"
            link="/recipe"
            />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Card 
            imgSrc={require("../images/DoctorsLand.jpg")}
            imgAlt="consultant"
            title="Consultants"
            description="Get expert advice from allergists and healthcare professionals through our Ask-an-Expert section!"
            buttonText="See more"
            link="/consultants"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="Fourth-container"
      >
        <img
          className="comImg"
          src={require("../images/6282470-removebg-preview.png")}
          alt=""
        />
        <div className="community">
          <h1>We are Community</h1>
          <p style={{ padding: "30px", fontSize: "20px" }}>
            {/* {" "} */}
            The food allergy awareness community is a collective of individuals
            and groups committed to increasing understanding and support for
            those living with food allergies. They share knowledge, advocate for
            safer environments, and foster empathy to help those with food
            allergies lead safer and inclusive lives in schools, workplaces, and
            public spaces.
          </p>
        </div>
        <div  className="btn"><Link to="/community">Learn more</Link></div>
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="fifth-container"
      >
        <h1 className='blogs'>AL-Eaze's Insights</h1>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className='firstBlog'><div className='blogDes'><p onClick={() => {navigate('/blogs-single')}} className="Head">Is it celiac disease or a wheat allergy?</p>
        <p className='des'>If you get stomach cramps and feel bloated after eating a sandwich on wheat bread or a bowl of pasta, do you have celiac disease? A wheat allergy? Or neither?...</p></div></SwiperSlide>
        <SwiperSlide className='secondBlog'><div className='blogDes' style={{position:"relative",top:"185px"}}><p className='Head'>Foods High in Lactose</p>
        <p className='des'>Around 75% of the world’s population has some form of lactose intolerance. Some can digest low-lactose diets, while others experience digestive symptoms after eating any amount of dairy. </p></div></SwiperSlide>
        <SwiperSlide className='thirdBlog'><div className='blogDes'><p className='Head'>The 8 Most Common Food Allergies</p>
        <p className='des'>Common food allergies include dairy, peanuts, and tree nuts, among others. You may be more likely to outgrow certain allergies than others.</p></div></SwiperSlide>
        <SwiperSlide className='forthblog'><div className='blogDes' style={{position:"relative",top:"200px"}}><p className='Head'>Soy Allergy - Myths and Facts</p>
        <p className='des'>Soy allergy is an immune-mediated reaction to proteins found in soybeans. It is one of the most common food allergies, especially in infants and young children.</p></div></SwiperSlide>
        </Swiper>
      </motion.div>
      {/* <motion.div 
      initial={{y:100}}
      whileInView={{y:0}}
      transition={{duration:0.4}}
      className='sixth-container'>
        
      </motion.div> */}
      <footer></footer>
    </div>
  );
}

export default LandingPage;
