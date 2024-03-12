import React, { useContext } from "react";

// import { ThemeContext } from "../../context/ThemeContext";
import { aboutData } from "../../data/aboutData";

function AboutMe() {

  return (
    <div className="about" id="about">
      <div className="line-styling">
        <div className="style-circle"></div>
        <div className="style-circle"></div>
        <div className="style-line"></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2>{aboutData.title}</h2>
          <p>{aboutData.description1}<br></br>{aboutData.description2}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;