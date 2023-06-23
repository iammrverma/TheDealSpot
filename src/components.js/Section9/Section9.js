import React from "react";
import "./Section9.css";

function Section9() {
  return (
    <div className="Section9">
      <img
        src={process.env.PUBLIC_URL + "assets/shoes/shoeBanner.png"}
        alt=""
      />
      <div className="shoes">
        <div className="shoe" style={{boxShadow:"rgba(11, 65, 62, 1) 20px 20px 20px 0px"}}>
          <img src={process.env.PUBLIC_URL + "assets/shoes/shoe1.png"} alt="" />
        </div>
        <div className="shoe" style={{boxShadow:"20px 20px 20px 0px rgba(83, 83, 81, 1)"}}>
          <img src={process.env.PUBLIC_URL + "assets/shoes/shoe2.png"} alt="" />
        </div>
        <div className="shoe" style={{boxShadow:"20px 20px 20px 0px rgba(223, 0, 38, 1)"}}>
          <img src={process.env.PUBLIC_URL + "assets/shoes/shoe3.png"} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section9;
