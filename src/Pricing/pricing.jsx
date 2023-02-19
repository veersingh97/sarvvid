import React from "react";
import "./pricing.css";
import { BiCheck, BiX } from "react-icons/bi";

const pricing = () => {
  return (
    <section className="price-section">
      <div className="price-grid">
        <div className="pricing  pricing-plan">
          <h3 className="price-category">SILVER PLAN</h3>
          <p className="price-rupee">
            <span>&#8377;</span>2500
          </p>
          <p className="price-month">
            per month. That's all &#8377;1.25 per GB!
          </p>
          <ul>
            <li>
              <span>
                <BiCheck className="green" />
              </span>
              Single User
            </li>
            <li>
              <span>
                <BiCheck className="green" />
              </span>
              Minimum 2 TB file storage
            </li>
            <li>
              <span>
                <BiCheck className="green" />
              </span>
              Mail P2P Integrated
            </li>
            <li>
              <span>
                <BiX className="red" />
              </span>
              Access to Nodes Dashboard
            </li>
            <li>
              <span>
                <BiX className="red" />
              </span>
              Data Insurance
            </li>
          </ul>
          <button className="price-btn">Click Here</button>
        </div>

        <div className="pricing pricing-gold">
          <h3 className="price-category">GOLD PLAN</h3>
          <p className="price-rupee">
            <span>&#8377;</span>5000
          </p>
          <p className="price-month">per month. That's all &#8377;1 per GB!</p>
          <ul>
            <li>
              <span>
                <BiCheck className="green" />
              </span>
              5 User
            </li>
            <li>
              <span>
                <BiCheck className="green" />
              </span>
              Minimum 5 TB file storage
            </li>
            <li>
              <span>
                <BiCheck className="green" />
              </span>
              Mail P2P Integrated
            </li>
            <li>
              <span>
                <BiCheck className="green" />
              </span>
              Access to Nodes Dashboard
            </li>
            <li>
              <span>
                <BiX className="red" />
              </span>
              Data Insurance
            </li>
          </ul>
          <button className="price-btn">Click Here</button>
        </div>
        <div className="pricing pricing-bg">
          <h3 className="price-category">PLATINUM PLAN</h3>
          <p className="price-rupee">
            <span>&#8377;</span>7500
          </p>
          <p className="price-month">
            per month. That's all &#8377;0.75 per GB!
          </p>
          <ul>
            <li>
              <span>
                <BiCheck className="green" />
              </span>
              Customizable Access
            </li>
            <li>
              <span>
                <BiCheck className="green" />
              </span>
              Minimum 10 Tb File Storage
            </li>
            <li>
              <span>
                <BiCheck className="green" />
              </span>
              Mail P2P Integrated
            </li>
            <li>
              <span>
                <BiCheck className="green" />
              </span>
              Access to Nodes Dashboard
            </li>
            <li>
              <span>
                <BiCheck className="green" />
              </span>
              Data Insurance
            </li>
          </ul>
          <button className="price-btn">Click Here</button>
        </div>
      </div>
    </section>
  );
};

export default pricing;
