import React from "react";
import { products1 } from "../database/database";
import shop from '../images/shop.png';

export default function Products() {
  return (
    <section style={{paddingTop:"130px"}} className="content-wrapper">
      <div className="content-head">
        <h1>ai-eaze recommendations</h1>
        {/* <div></div> */}
      </div>
      <div className="content-btns">
        <button>gluten-free</button>
        <button>lactose-free</button>
        <button>egg-free</button>
        <button>peanuts-free</button>
      </div>
      <div className="content-container">
        {products1.map((item, index) => (
          <div key={index} className="card">
            <div>
              <img src={item.img} alt={`img/${item.img}`} />
            </div>
            <div>
              <h2>{item.name}</h2>
              <p>Rs. {item.price}</p>
              <a>
                <img src={shop} alt="" />
                <p>shop now</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
