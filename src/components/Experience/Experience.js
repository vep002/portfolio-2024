import React, { useContext } from "react";

import { experienceData } from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="experience-body">
        <div className="experience-image"></div>
        <div className="experience-description">
          <h1>Experience</h1>
          {experienceData.map(exp => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              title={exp.title}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;