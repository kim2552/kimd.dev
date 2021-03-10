import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { FaGithubSquare } from 'react-icons/fa'

const Project = (props) => {
    const p = props.project;
    return (
        <>
            <h1>{p.title}</h1>
            <p>{p.text}</p>
            {(() =>{
                if(p.website_link){
                    return <a href={p.website_link} rel="noreferrer" target="_blank"><CgWebsite></CgWebsite></a>
                }
            })()}
            {(() =>{
                if(p.github_link){
                    return <a href={p.github_link} rel="noreferrer" target="_blank"><FaGithubSquare></FaGithubSquare></a>
                }
            })()}
        </>
    )
}

export default Project
