import React from "react";
import Marquee from "react-fast-marquee";

import { skillsData } from "../../data/skillsData";

function Skills() {
  return (
    <div className="skills">
      <div className="skillsHeader">
        <h2>Skills</h2>
      </div>
      <div className="skill--scroll">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill-box" key={id}>
                <h3>{skill}</h3>
              </div>
            ))}
          </Marquee>
      </div>
    </div>
  );
}

export default Skills;