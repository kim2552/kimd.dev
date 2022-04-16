import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { FaGithubSquare } from 'react-icons/fa'

const Project = (props) => {
    const p = props.project;
    var default_link = p.website_link
    console.log(default_link)
    if (default_link === undefined) {
        default_link = p.github_link
    }
    return (
        <>
            <div className="project-layout">
                <div>
                    <h1>{p.title}</h1>
                    <p>{p.text}</p>
                    {(() =>{
                    if(p.website_link){
                        return <a href={p.website_link} rel="noreferrer"><CgWebsite></CgWebsite></a>
                    }
                    })()}
                    {(() =>{
                        if(p.github_link){
                            return <a href={p.github_link} rel="noreferrer"><FaGithubSquare></FaGithubSquare></a>
                        }
                    })()}
                </div>
                <a href={default_link} rel="noreferrer">
                    <div className="image-wrapper">
                        <img src={p.image_link} alt="screenshot"></img>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Project
