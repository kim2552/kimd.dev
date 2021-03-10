import Project from './Project'
import {useEffect} from 'react';

const Projects = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div className="container">
            <div className="projects-container">
                {props.projects.map((project) => 
                    <div className="projects-wrapper" key={project.id}>
                        <Project project={project}></Project>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects
