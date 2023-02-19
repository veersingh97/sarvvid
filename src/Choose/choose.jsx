import React from "react";
import "./choose.css";
import {FaNode} from "react-icons/fa"
import {MdEventAvailable} from "react-icons/md"
import {SiFastapi} from "react-icons/si"
import {RiChatPrivateFill} from "react-icons/ri"
import {RiSecurePaymentFill} from "react-icons/ri"
import {MdNoEncryptionGmailerrorred} from "react-icons/md"

const choose = () => {
  return (
    <section className="choose-section">
      <h2>WHY CHOOSE US?</h2>
      <div className="choose-grid">
        <div className="grid-content">
            <FaNode/>
          <h3>Decentralized Domain</h3>
          <p>
            Welcome To The Decentralized World Where You Can Store, Compute And
            Compress Your Data Decentrally.
          </p>
        </div>
        <div className="grid-content">
            <MdEventAvailable/>
          <h3>Available</h3>
          <p>
            Your Data Is Available 24/7.You Can Access Your Data Anytime
            Anywhere Without Having Any Breach.
          </p>
        </div>
        <div className="grid-content">
            <SiFastapi/>
          <h3>Fast Access</h3>
          <p>
            With Us Your Data Is Encrtpted And Split Into Multiple Bits And
            Traversed In Various Places. No Downtime, No Bitrot, And No Lost
            Files.
          </p>
        </div>
        <div className="grid-content">
            <RiChatPrivateFill/>
          <h3>Private</h3>
          <p>
            Your Data Is Privately Stored On Our Decentralized Network And You
            Only Can Access Your Data
          </p>
        </div>
        <div className="grid-content">
            <MdNoEncryptionGmailerrorred/>
          <h3>Encrypted Data</h3>
          <p>
            With The Power Of Decentralized Domain Your Data Is Always Encrypted
            With It's Key Placed Only In Your Device
          </p>
        </div>
        <div className="grid-content">
            <RiSecurePaymentFill/>
          <h3>Secure</h3>
          <p>
            A New And Secure Way To Store Your Data Withour Any Fear Of Man In
            The Middle Attack Or Being Hacked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default choose;
