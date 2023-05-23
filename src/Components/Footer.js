import React from "react";
import "../Pages/Style.css";
import IOS from "../assets/ios-ion.png";
import PlayStore from "../assets/playstore-icon.png";
import Location from "../assets/Location-white.png";
import Call from "../assets/Call.png";
import Envelope from "../assets/Envelope.png";
import Twitter from "../assets/Twitter.png";
import LinkedIn from "../assets/LinkedIn.png";
import Facebook from "../assets/Facebook.png";

const Footer = () => {
  const GeneralList = [
    { name: "HOME" },
    { name: "SHOP" },
    { name: "ABOUT" },
    { name: "COLLECTIONS" },
  ];

  const LegalList = [
    { name: "FAQs" },
    { name: "ABOUT US" },
    { name: "PRIVACY & POLICY" },
    { name: "TERMS & CONDITIONS" },
  ];
  return (
    <div className="footer-container">
      <div className="footer-left-container">
        <h2>Company Name</h2>
        <div className="signup-container">
          <h3>Join With Us </h3>
          <div className="singnup">
            <input placeholder="Enter your email address" />
            <div className="singup-btn">
              <h3>Sign Up</h3>
            </div>
          </div>
          <h4>Make You check us on </h4>
          <h5>Android & ios we are available on both the platform</h5>
          <div className="app-download">
            <img src={IOS} alt="Ios" />
            <img src={PlayStore} alt="Andriod" />
          </div>
        </div>
      </div>

      <div className="footer-right-container">
        <div className="footer-right-info">
          <div className="general-info">
            <h2>GENERAL</h2>
            <ul>
              {GeneralList.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className="general-info">
            <h2>LEGAL</h2>
            <ul>
              {LegalList.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className="general-info conatct-us">
            <h2>CONTACT US</h2>
            <ul>
              <li>
                <img src={Location} alt="location" />
                <p>COMPANY MARKET HOUSE, 10/2 PARK BASE LANE CA 94158</p>
              </li>
              <li>
                <img src={Call} alt="location" />
                <p>012-345-678</p>
              </li>
              <li>
                <img src={Envelope} alt="location" />
                <p>
                  companyname123@gmail
                  <br />
                  .com
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="Follow-link-container">
          <h2>FOLLOW US</h2>
          <div>
            <img src={Facebook} alt="Link" />
            <img src={LinkedIn} alt="Link" />
            <img src={Twitter} alt="Link" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
