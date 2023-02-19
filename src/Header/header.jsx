import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { CgCloseO } from "react-icons/cg";
import Logo from "../Images/sarvvid.png";
import "./header.css";

const Header = () => {
  const [isToggle, setIsToggle] = useState("false");
  return (
    <section className="header-section">
      <div className="logo-section">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo"></img>
        </Link>
      </div>
      <div className="navbar-content">
        <ul className={isToggle ? "navbar-text" : "navbar-text active"}>
          <li>
            <Link
              to="/"
              className="navbar-label"
              onClick={() => setIsToggle(true)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="navbar-label"
              onClick={() => setIsToggle(true)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="navbar-label"
              onClick={() => setIsToggle(true)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <p className="navbar-label" onClick={() => setIsToggle(true)}>
              Projects
            </p>
          </li>
          <li>
            <Link
              to="/contact"
              className="navbar-label"
              onClick={() => setIsToggle(true)}
            >
              Contact
            </Link>
          </li>

          <li>
            <p
              to="/about"
              className="navbar-label"
              onClick={() => setIsToggle(true)}
            >
              About
            </p>
          </li>
        </ul>
      </div>
      <div className="bars" onClick={() => setIsToggle(!isToggle)}>
        {isToggle ? (
          <RiMenu3Line className="bars-mobile" />
        ) : (
          <CgCloseO className="bars-mobile" />
        )}
      </div>
    </section>
  );
};

export default Header;
