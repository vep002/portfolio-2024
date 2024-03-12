import React, { useContext } from 'react';
import Fade from 'react-awesome-reveal';

function EducationCard({ id, institution, course, startYear, endYear }) {
    return (
        <Fade bottom>
            <div key={id}>
                <div className="educard-img"></div>
                <div className="education-details">
                    <h6>{startYear}-{endYear}</h6>
                    <h4>{course}</h4>
                    <h5>{institution}</h5>
                </div>
            </div>
        </Fade>
    )
}

export default EducationCard;