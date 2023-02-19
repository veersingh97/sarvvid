import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-grid">
        <div className="footer-col-1">
          <h3 className="footer-logo">Sarvvid</h3>
          <h3>Address:</h3>
          <span>New Delhi, India</span>
          <h3>Email:</h3>
          <span>abc@gmail.com</span>
          <h3>Telephone:</h3>
          <span>+91 9876543210</span>
        </div>
        <div>
          <h2>About Us</h2>
          <p>Career</p>
          <p>About</p>
          <p>Services</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div>
          <h2>Products</h2>
          <p>Storage</p>
          <p>Login</p>
          <p>Register</p>
          <p>Computing</p>
          <p>Compression</p>
        </div>
        <div>
          <h2>Newsletter</h2>
          <p>Subscribe to our Newsletter</p>
          <input type="text" placeholder="Enter your email"></input>
          <button className="btn white">Subscribe</button>
          <h3>COPYRIGHT ©️ 2021 SARVVID™ </h3>
        </div>
      </div>
    </section>
  );
};

export default footer;
