import React, { useState } from "react";
import  DreamLogo  from '../../assets/Logo3.png'
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
         {/*  <h2> */}
{/*             <span>T</span>hapa
            <span>T</span>echnical */}
           <NavLink to='/'> <img src={DreamLogo}></img></NavLink>
        {/*   </h2> */}
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">services</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/about">about us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact us</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
           {/*  <li>
              <a
                href=""
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li> */}
{/*             <li>
              <a
                href=""
                target="_D&D">
                <FaInstagramSquare className="instagram" />
              </a>
            </li> */}
         {/*    <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li> */}
          </ul>
 
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
    {/*  */}
    </>
  );
};

export default Navbar;
