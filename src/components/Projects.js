import Project from './Project'
import { useState } from 'react'

const Projects = (props) => {
    const [selectedProject, setSelectedProject] = useState(1)
    
    return (
        <div className="projects-container">
            <div className="scrollbar-wrapper">
                <nav>
                    {props.projects.map((project) => (
                        <li key={project.id} onClick={() => setSelectedProject(project.id)}>{project.title}</li>
                    ))}
                </nav>
            </div>
            <div className="project-wrapper">
                {props.projects.map((project) => ( project.id === selectedProject ?
                    <Project project={project} key={project.id}></Project> : ''
                ))}
            </div>
        </div>
    )
}

export default Projects
