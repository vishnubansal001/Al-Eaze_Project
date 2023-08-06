import React from "react";
import "../styles/card.css";
import { Link, useNavigate } from "react-router-dom";
const Card = ({ imgSrc, imgAlt, title, description, buttonText, link }) => {
  const navigate = useNavigate();
  return (
    <div className="card-container">
      <img src={imgSrc} alt="" className={imgAlt} height={"300px"}/>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="card-btn" onClick={() => navigate(`${link}`)}>
        {buttonText}
      </div>
    </div>
  );
};

export default Card;
