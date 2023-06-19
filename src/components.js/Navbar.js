import React, { useState } from 'react'
import { FaAngleDown, FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";
import './Navbar.css';
export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(e);
  };
  const handleClearSearch = () =>{
    setSearchQuery("");
  }

  const handleBrandDivClick = () => {
    console.log("brand clicked");
  };

  const hanldleLoginDivClicked = () => {
    console.log("login Clicked");
  };

  const handleCartDivclicked = () => {
    console.log("Cart Clicked");
  };

  const handleMoreDiv = () => {
    console.log("More Clicked");
  };

  return (
    <div className='navbar'>
      <div className="left navitem" onClick={handleBrandDivClick}>
        <img src="" alt="" className='navitem'/>
        Logo
      </div>
      <div className="center navitem">
      <FaSearch/>
        <input type="text" className='searchBox' placeholder={searchQuery? searchQuery: "Find what you want"} value={searchQuery} onChange={handleSearchInputChange} />
        {searchQuery && <FaTimes onClick={handleClearSearch} />}
      </div>
      <div className="right">
        <div className="loginDiv navitem" onClick={hanldleLoginDivClicked}>
          <span>Login</span>
        </div>
        <div className="cartDiv navitem" onClick={handleCartDivclicked}>
          <FaShoppingCart className="cartImg" style={{ color: 'yellow' }}/>
          <span className='cartText'>Cart</span>
        </div>
        <div className="moreDiv navitem" onClick={handleMoreDiv}>
          <span className="moreText">More</span>
          <FaAngleDown className="" />
        </div>
      </div>


    </div>
  )
}
