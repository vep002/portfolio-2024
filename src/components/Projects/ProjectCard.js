import React from 'react';
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-awesome-reveal';

function ProjectCard({ id, name, desc, tags, code, demo, image }) {
    return (
        <Fade bottom>
            <div
                key={id}
                className="singleProject"
                >
                    <div className="projectContent">
                        <h2
                            id={name.replace(' ', '-').toLowerCase()}
                            >
                            {name}
                            </h2>
                            <div className="project-showBtn">
                                <a
                                    href={demo}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaPlay 
                                        id={`${name
                                            .replace(' ', '-')
                                            .toLowerCase()}-demo`}
                                    />
                                </a>
                                <a
                                    href={code}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaCode
                                        id={`${name
                                            .replace(' ', '-')
                                            .toLowerCase()}-code`}
                                    />
                                </a>
                            </div>
                        </div>
                        <p className="projectDesc">
                            {desc}
                        </p>
                        <div className='project--lang'>
                            {tags.map((tag,id) => (
                                <span key={id}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </Fade>
            );
}

export default ProjectCard;