import React from "react";
import logo from "../../assets/images/header/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container navbar">
        <div className="navbar-brand">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
