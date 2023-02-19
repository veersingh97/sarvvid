import React from "react";
import "./services.css";
import {Link} from 'react-router-dom'
import ServiceHero from "../Images/Happy.png";
import Node from "../Images/4b5a24a0dfbc454aa95fcda07e721f4d__1_-removebg-preview.png";
import Box from "../Images/69e1f532428b4448bfb1fad180d63e2c-removebg-preview.png";
import Web from "../Images/748b3cfabe6649e69b37c03e7d58a7ce-removebg-preview.png";
import Hub from "../Images/ed27d67eaeda4b0ab7592b492abc5760__1_-removebg-preview.png";

const services = () => {
  return (
    <section className="service-section">
      <div className="service-hero">
        <div>
          <img src={ServiceHero} className="img" alt="node"></img>
        </div>
        <div className="digital-service">
          <h1>Make your world digital with our services</h1>
          <Link to='/pricing'> <button className="hero-btn">Choose Your Plan Now</button></Link>
        </div>
      </div>
        <h3>Services</h3>
      <div className="service-grid">
        <div className="service-temp">
          <img src={Node} alt="node"></img>
          <h2>SARVVID NODE</h2>
          <h1>STORE YOUR DATA</h1>
        </div>
        <div className="service-temp">
        <img src={Box} alt="node"></img>
        <h2>SARVVID BOX</h2>
        <h1>MONETIZE YOUR STORAGE</h1>
        </div>
        <div className="service-temp">
        <img src={Web} alt="node" ></img>
        <h2>SARVVID WEB</h2>
        <h1>SARVVID ON YOUR WEB</h1>
        </div>
        <div className="service-temp">
        <img src={Hub} alt="node"></img>
        <h2>SARVVID HUB</h2>
        <h1>CREATE YOUR HUB</h1>
        </div>
      </div>
    </section>
  );
};

export default services;
