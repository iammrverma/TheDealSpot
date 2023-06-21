import React from 'react';
import './CategoryImage.css'

function CategoryImage() {
  return (
    <div className="CategoryImage">
        <img src={process.env.PUBLIC_URL+"assets/catogories/Untitled design.png"} alt="" />
        <img src={process.env.PUBLIC_URL+"assets/catogories/Untitled design (1).png"} alt="" />
        <img src={process.env.PUBLIC_URL+"assets/catogories/Untitled design (2).png"} alt="" />
        <img src={process.env.PUBLIC_URL+"assets/catogories/Untitled design (3).png"} alt="" />
        <img src={process.env.PUBLIC_URL+"assets/catogories/Untitled design (4).png"} alt="" />
        <img src={process.env.PUBLIC_URL+"assets/catogories/Untitled design (5).png"} alt="" />
    </div>
  )
}

export default CategoryImage

