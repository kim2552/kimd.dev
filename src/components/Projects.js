import Project from './Project'

const Projects = (props) => {
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
