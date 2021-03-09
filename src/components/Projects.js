import Project from './Project'
import { useState } from 'react'
import Footer from './Footer'

const Projects = (props) => {
    return (
        <div className="container">
            <div className="projects-container">
                {props.projects.map((project) => 
                    <div className="projects-wrapper">
                        <Project project={project} key={project.id}></Project>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects
