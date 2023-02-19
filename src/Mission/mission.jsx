import React from "react";
import "./mission.css";
import { BsGlobe } from "react-icons/bs";
import missionImg from "../Images/mision.png";

const mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-content">
        <h2 className="mission-text">
          <BsGlobe />
          MISSION
        </h2>
        <h3>WHAT WE DO?</h3>
      </div>
      <div className="mission-grid">
        <div>
          <img src={missionImg} className="img" alt="mission"></img>
        </div>
        <div className="mission-lines">
          <p className="mission-summary">
            Sarvvid™ has two major services namely, SARVVIDBOX and SARVVIDNODE.
            SarvvidBox will provide you with extra storage on your device as
            there is limited storage in our HAND. When you are out of storage
            you can use our services where you'll get 20GB free data storage and
            after that, you can pay and buy storage.There is a scarcity of good
            storage service in our market as most of them play with our privacy.
            SarvvidNode is a completely new concept where you can get paid by
            renting your extra storage. You can MONETIZE your storage with us
            and earn money just by sitting home. Just sign in with the app and
            become a node and start earning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default mission;
