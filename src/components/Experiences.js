import React from 'react'
import {useState} from 'react'
import Experience from './Experience'

const Experiences = (props) => {
    const [selectedExperience, setSelectedExperience] = useState(1);

    return (
        <div className="information-container">
            <div className="scrollbar-wrapper">
                <nav>
                    {props.experiences.map((experience) => (
                        <li key={experience.id} onClick={() => setSelectedExperience(experience.id)}>{experience.title}</li>
                    ))}
                </nav>
            </div>
            <div className="information-wrapper">
                {props.experiences.map((experience) => ( experience.id === selectedExperience ?
                    <Experience experience={experience} key={experience.id}></Experience> : ''
                ))}
            </div>
        </div>
    )
}

export default Experiences
