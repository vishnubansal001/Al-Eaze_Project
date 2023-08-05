import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import Logoimg from "../images/Logo.png";
import { Services } from "./Services";
import { name } from "../database/database";

export default function Footer() {
  return (
    <>
      <section id="footer" class="footer">
        <div class="box-container">
          <div class="box">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="logo_.png" alt="logo" height="150px" width="200px" />
            <p style="font-family:gigi;font-size:15px;">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A
              page for <b>travel freaks</b>
            </p>
          </div>
          <div class="box">
            <h3>
              Office{" "}
              <div class="underline">
                <span></span>
              </div>
            </h3>
            <br></br>
            <br></br>
            <p>Chitkara University</p>
            <p>Chandigarh-Patiala National Highway</p>
            <p>Rajpura, Punjab, 140401</p>
            <p class="email-id">onthatroad@gmail.com</p>
            <h4>+91-0123456789</h4>
          </div>
          <div class="box">
            <h3>
              Links{" "}
              <div class="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <br></br>
              <br></br>
              <li>
                <a href="home.html">Home</a>
              </li>
              <li>
                <a href="book.html">Book</a>
              </li>
              <li>
                <a href="abt.html">About Us</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="packages.html">Packages</a>
              </li>
              <li>
                <a href="blog.html">Gallery</a>
              </li>
              <li>
                <a href="review.html">Reviews</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div class="box">
            <h3>
              Newsletter
              <div class="underline">
                <span></span>
              </div>
            </h3>
            <br></br>
            <br></br>
            <form>
              <i class="far fa-envelope"></i> &nbsp;
              <input type="email" placeholder="Enter your email id" required />
              <button type="submit">
                <i class="fas fa-arrow-right"></i>
              </button>
            </form>
            <br></br>
            <div class="social-icons">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-youtube"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div>
        <hr></hr>
        <p class="copyright">Web Burners ⓒ 2021 - All Rights Reserved </p>
        <div class="made">
          <p>
            Made with ♡ by <b>Web Burners</b>
          </p>
        </div>
      </section>
    </>
  );
}
