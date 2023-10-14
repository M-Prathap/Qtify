import React from "react";
import Headphone from "../../assets/headphone.png";
import "./Hero-Section.css";
const HeroSection = () => {
  return (
    <>
      <div className="Hero">
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <img src={Headphone} alt="Headphone" width={212} />
      </div>
    </>
  );
};

export default HeroSection;
