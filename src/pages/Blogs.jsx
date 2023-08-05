import React from "react";
import { ReviewBox } from "../components/ReviewBox";
import { dataBlogs } from "../database/database";
import HeaderImg from "../images/header.png";

export default function Blogs() {
  return (
    <>
      <div className="Header blogs-wrapper">
        <div className="blogs-container">
          <h1 className="t1">
            AL-Eaze
          </h1>
          <div className="blog-title">
            <p>Read about the facts and truths about food allergies</p>
            <div className="coloring">
              Blog
            </div>
          </div>
        </div>
        <div className="img-box">
          <img
            src={HeaderImg}
            className=""
            alt="hi"
          ></img>
        </div>
      </div>

      <div className="blog-box">
        <div className="Between blog">
          {dataBlogs.map((e,index) => {
            // console.log(index);
            return (
              <ReviewBox
                img={e.img}
                ind={index}
                header={e.header}
                Date={e.date}
                review={e.review}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
