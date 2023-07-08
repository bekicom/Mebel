import React from 'react'
import "../Navbar/Navbar.css"
import serch from '../../assets/Img/serch img.png'
import beg from '../../assets/Img/bag img.png'
import menu from '../../assets/Img/menu.png'

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
        <button className="btn1"><img src={serch} alt="" /></button>
        <button className="btn1"><img src={beg} alt="" /></button>
        <button className="btn1"><img src={menu} alt="" /></button>
      </div>
    </nav>
  );
}
