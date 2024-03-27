import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Fade from 'react-awesome-reveal';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg';
import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg';

function EducationCard({ id, institution, course, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = styled((theme) => ({
        educationCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50
            },
        },
        }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`}>
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt=""/>
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{course}</h4>
                    <h5 style={{color: theme.tertiary}}>{institution}</h5>
                </div>
            </div>
        </Fade>
    )
}

export default EducationCard;