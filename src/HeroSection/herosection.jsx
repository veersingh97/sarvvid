import React from "react";
import HeroImage from "../Images/hero (2).png";
import "./herosection.css";
import { Link } from "react-router-dom";

const herosection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero">ONE STOP FOR ALL YOUR STORAGE SOLUTION</h1>
        <p className="hero-desc">
          We have designed products and services for all your data storage
          problems with our cutting-edge innovation and advanced technology.
        </p>
        <Link to="/services" className="hero-btn">
          Come Explore
        </Link>
      </div>
      <div className="hero-img">
        <img
          src={HeroImage}
          className="hero-image"
          alt="heroSectionImage"
        ></img>
      </div>
    </section>
  );
};

export default herosection;
