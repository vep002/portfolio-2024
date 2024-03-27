import React, { useContext } from "react";
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialData } from '../../data/socialData';

import { 
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);

  return (
    <div className='landing'>
      <div className='landing--container-left'>
        <div className='lcl--content'>
          {socialData.linkedIn && (
            <a
              href={socialData.linkedIn}
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin
                className='social-icon'
                size={32}
                aria-label='LinkedIn'
              />
            </a>
          )}
          {socialData.github && (
              <a
                  href={socialData.github}
                  target='_blank'
                  rel='noreferrer'
              >
                  <FaGithub
                      className='landing--social'
                      size={32}
                      aria-label='LinkedIn'
                  />
              </a>
          )}
        </div>
      </div>
      <img
        src={headerData.image}
        alt=''
        className='landing--img'
        style={{
            opacity: `${drawerOpen ? '0' : '1'}`,
            borderColor: theme.secondary,
        }}
      />
      <div 
        className='landing--container-right'
        >
          <h6>{headerData.title}</h6>
          <h1>{headerData.name}</h1>
          <p>{headerData.description}</p>

          <div className='lcr-buttonContainer'>
            {headerData.resumePdf && (
              <a
                href={headerData.resumePdf}
                download='resume'
                target='_blank'
                rel='noreferrer'
              >
                <Button>Download Resume</Button>
              </a>
            )}
            <NavLink 
            to='/#contact'
            smooth='true'
            spy='true'
            duration={2000}
            >
              <Button>Contact Me</Button>
            </NavLink>
        </div>
    </div>
  </div>
  );
}

export default Landing;