import React, { useState } from "react";
import Logo from "../assets/company-logo.png";
import Image from "../assets/career-mid-img.png";
import SearchArea from "../Components/searchArea";
import "./Style.css";
import Footer from "../Components/Footer";

const Career = () => {
  return (
    <div className="Career-page">
      <nav className="Career-Nav">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar-headers">
          <h3>Home</h3>
          <h3>Career</h3>
          <h3>About</h3>
          <h3>Who we're</h3>
          <h3>What we do</h3>
          <div className="Contact-btn">
            <h3>Contact Us</h3>
          </div>
        </div>
      </nav>
      <div className="career-mid">
        <div className="Career-mid-text">
          <h4>
            Lorem ipsum dolor sit amet consectetur. Amet diam ipsum suspendisse
            gravida. Metus sit habitant amet quam risus eget consequat.
            Phasellus nec morbi sit magna.
          </h4>
        </div>
        <div>
          <img src={Image} alt="Career-mid-img" />
        </div>
      </div>
      <div className="Career-search-container">
        <div className="search-area-header">
          <h2>Search For Open Role</h2>
          <h5>
            Lorem ipsum dolor sit amet consectetur. Amet diam ipsum suspendisse
            gravida. Metus sit habitant amet quam risus eget consequat.
          </h5>
        </div>
        <SearchArea />
      </div>
      <Footer/>
    </div>
  );
};

export default Career;
