import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <section  className="footer">
        <div className="box-container">
          <div className="box">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={require("../images/Logo.png")} alt="logo" className='FootLogo' height="150px" width="200px" />
            
          </div>
          <div className="box">
            <h3>
              Office{" "}
            </h3>
            <br></br>
            <br></br>
            <p>Chitkara University</p>
            <p>Chandigarh-Patiala National Highway</p>
            <p>Rajpura, Punjab, 140401</p>
            <p className="email-id">aleaze@gmail.com</p>
            <h4>+91-0123456789</h4>
          </div>
          <div className="box">
            <h3>
              Features{" "}
            </h3>
            <ul>
              <br></br>
              <br></br>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Recommendations</Link>
              </li>
              <li>
                <Link to="/consultants">Consultants</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="box">           
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
        <hr></hr>
        <p className="copyright">ErrorLess Girls ⓒ 2023 - All Rights Reserved </p>
        <div className="made">
          <p>
            Made with ♡ by <b>ErrorLess Girls</b>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Footer
