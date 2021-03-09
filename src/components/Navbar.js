import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <Link to="/about">
                <div className="menu-item">
                    about
                </div>
            </Link>
            <Link to="/projects">
                <div className="menu-item">
                    projects
                </div>
            </Link>
            <Link to="/contact">
                <div className="menu-item">
                    contact me
                </div>
            </Link>
        </div>
    )
}

export default Navbar
