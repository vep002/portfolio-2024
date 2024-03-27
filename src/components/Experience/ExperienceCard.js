import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Fade from "react-awesome-reveal";

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({ id, title, company, startYear, endYear }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = styled((theme) => ({
    experienceCard : {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50
      },
    },
    }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`experience-card ${classes.experienceCard}`}>
        <div className="expcard-img" style={{backgroundColor: theme.primary}}>
          <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
        </div>
        <div className="experience-details">
            <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
            <h4 style={{color: theme.tertiary}}>{title}</h4>
            <h5 style={{color: theme.tertiary80}}>{company}</h5>
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;