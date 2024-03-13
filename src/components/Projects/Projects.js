import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { projectData } from '../../data/projectData';
import { HiArrowRight } from 'react-icons/hi';

import SingleProject from './ProjectCard';

function Projects() {
    return (
        <>
            {projectData.length > 0 && (
                <div className="projects" id="projects">
                    <div className="projects--header">
                        <h1>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectData.slice(0,3).map(project => (
                                <SingleProject
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
                                    <button>
                                        View All
                                        <HiArrowRight />
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