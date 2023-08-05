import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import Logoimg from "../images/Logo.png";
import { Services } from "./Services";
import { name } from "../database/database";

export default function Footer() {
  return (
    <>
      <div>
        <div className="Footer footer-container">
          <div className="footer-wrapper">
            <img src={Logoimg} alt="" className="footer-logo-img" />
            <div className="footer-links">
              {name.map((f) => {
                return <Services Coaching={f.Coaching} />;
              })}
            </div>
            <div className="footer-socials">
              <BsFacebook size={32} color="black" />
              <BsInstagram size={32} color="black" />
              <AiFillTwitterCircle size={32} color="black" />
              <AiFillYoutube size={32} color="black" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
