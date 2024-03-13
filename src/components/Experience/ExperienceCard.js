import React, { useContext } from "react";
import Fade from "react-awesome-reveal";

function ExperienceCard({ id, title, company, startYear, endYear }) {
  return (
    <Fade bottom>
      <div key={id}>
        <div className="experience-details">
            <h6>{startYear}-{endYear}</h6>
            <h4>{title}</h4>
            <h5>{company}</h5>
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;