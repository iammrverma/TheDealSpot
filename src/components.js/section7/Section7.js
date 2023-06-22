import React from "react";
import "./Section7.css";

function Section7() {
  const bgImage = process.env.PUBLIC_URL + "assets/Casuals/Untitled design.png";
  const items = [
    {
      brand: "brand",
      title: "title",
      price: "price/-",
      description: "this is long a short description click to watch more",
      src: process.env.PUBLIC_URL + "assets/Casuals/Untitled design (1).png",
    },
    {
      brand: "brand",
      title: "title",
      price: "price/-",
      description: "this is long a short description click to watch more",
      src: process.env.PUBLIC_URL + "assets/Casuals/Untitled design (2).png",
    },
    {
      brand: "brand",
      title: "title",
      price: "price/-",
      description: "this is long a short description click to watch more",
      src: process.env.PUBLIC_URL + "assets/Casuals/Untitled design (3).png",
    },
  ];
  return (
    <div className="Section7">
      <div className="Section7inner">
        <div className="background">
          <img
            src={
              process.env.PUBLIC_URL + "assets/Casuals/Untitled design (6).png"
            }
            alt=""
          />
        </div>
        <div className="items">
          {items.map((item) => (
            <div className="box" key={item.id}>
              <img src={bgImage} alt="" className="bgimage" />
              <div className="product">
                <img src={item.src} alt="" className="itemimage" />
                <h4>{item.brand}</h4>/<p>{item.title}</p>
                <h4>{item.price}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section7;
