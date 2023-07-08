import React from 'react'
import "../Navbar/Navbar.css"

export  function Navbar() {
  return (
    <nav>
      <div className="logo">
      <p>soudemy</p>
      </div>
      <div className="nav_link">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About us  </a>
        <a href="#">Blog  </a>
      </div>
      <div className="nav_btn">
        <button className="btn1"></button>
        <button className="btn1"></button>
        <button className="btn1"></button>
      </div>
    </nav>
  );
}
