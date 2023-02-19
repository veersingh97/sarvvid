import React from "react";
import './vision.css'
import { BsGlobe } from "react-icons/bs";
import visionImg from '../Images/vision.png';

const vision = () => {
  return (
    <section className="vision-section">
      <div className="vision-content">
        <h2 className="vision-text"><BsGlobe/>VISION</h2>
        <h3>WHO ARE WE?</h3>
      </div>
      <div className="vision-grid">
        <div className="vision-lines">
          <p className="vision-summary">
            We are the first company in India to come up with a solution to the
            data storage problem through decentralization. Decentralized based
            file storage solutions work by storing your files across multiple
            computers, or nodes, on a decentralized network. With no single
            point of failure or single authority who has oversight over your
            files, these solutions provide Benefits such as greater privacy,
            faster speeds, fairer market prices, and minimal file loss. In
            short, you'll be the master of your own data and break the monopoly
            rule of the big tech company that has made privacy a child's play.
          </p>
        </div>
        <div>
          <img src={visionImg} className="img" alt="vision"></img>
        </div>
      </div>
    </section>
  );
};

export default vision;
