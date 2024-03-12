import React, { useContext } from 'react';

// import { ThemeContext } from '../../context/ThemeContext';

import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData';

function Education() {
    return (
        <div className="education-body">
            <div className="education-description">
                <h1>Education</h1>
                {educationData.map(edu => (
                    <EducationCard
                        key={edu.id}
                        id={edu.id}
                        institution={edu.institution}
                        course={edu.course}
                        startYear={edu.startYear}
                        endYear={edu.endYear}
                    />
                ))}
            </div>
        </div>
    );
}

export default Education;