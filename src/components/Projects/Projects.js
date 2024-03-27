import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectData } from '../../data/projectData';
import { HiArrowRight } from 'react-icons/hi';

import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {

    const { theme } = useContext(ThemeContext);

    const useStyles = styled(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {projectData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectData.slice(0,3).map(project => (
                                <ProjectCard
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.name}
                                    desc={project.desc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div>
                        
                        {projectData.length > 3 && (
                            <div className="projects-viewAll">
                                <Link to="/projects">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Projects;