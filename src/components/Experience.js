import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { FiChevronRight } from 'react-icons/fi'

const Experience = (props) => {
    const e = props.experience;

    return (
        <>
            <h1>{e.title}</h1>
            <h2>{e.position}</h2>
            <h3>{e.date}</h3>
            {e.text_list.map(text => <p><FiChevronRight></FiChevronRight>{text}</p>)}
            {(() =>{
                if(e.website_link){
                    return <a href={e.website_link}><CgWebsite></CgWebsite></a>
                }
            })()}
        </>
    )
}

export default Experience
