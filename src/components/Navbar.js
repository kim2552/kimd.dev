import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/about">
                <div className="menu-item">
                    about
                </div>
            </a> 
            <a href="/projects">
                <div className="menu-item">
                    projects
                </div>
            </a> 
            <a href="/work">
                <div className="menu-item">
                    work
                </div>
            </a> 
        </div>
    )
}

export default Navbar
