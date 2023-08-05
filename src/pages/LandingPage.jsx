import Card from "../components/Card";
import { motion } from "framer-motion";
import "../styles/landing.css";
// import NavBar from '../components/NavBar';
import React, { useState } from "react";

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
        <Marquee className="marquee">
          <p onClick={() => {navigate('/products')}} className="pointing">al-eaze</p>
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
          <p className="main">Allergies won't limit you here! </p>
          <p className="sec-main">
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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <div className="Card-container">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Card
              imgSrc="https://picsum.photos/seed/picsum/300/200"
              imgAlt="Card Image"
              title="Card Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id ornare arcu odio ut sem."
              buttonText="See more"
              link="/restorant"
              initial={{ x: -40 }}
              whileInView={{ x: 0 }}
            />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Card />
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
            {" "}
            The food allergy awareness community is a collective of individuals
            and groups committed to increasing understanding and support for
            those living with food allergies. They share knowledge, advocate for
            safer environments, and foster empathy to help those with food
            allergies lead safer and inclusive lives in schools, workplaces, and
            public spaces.
          </p>
        </div>
        <div className="btn">Learn more</div>
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="fifth-container"
      >
        {/* <ImageCarousel /> */}
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="firstBlog">
            <p>Is it celiac disease or a wheat allergy?</p>
            <p>
              If you get stomach cramps and feel bloated after eating a sandwich
              on wheat bread or a bowl of pasta, do you have celiac disease? A
              wheat allergy? Or neither?...
            </p>
          </SwiperSlide>
          <SwiperSlide className="secondBlog">
            Foods High in Lactose
          </SwiperSlide>
          <SwiperSlide className="thirdBlog">
            The 8 Most Common Food Allergies
          </SwiperSlide>
          <SwiperSlide className="forthblog"></SwiperSlide>
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
