import React from 'react'
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
    function changeMenu(){
        var x = document.getElementById("navbarWrapper");
        if(x.className === "navbar-wrapper"){
            console.log("responsive");
            x.className += " responsive";
        }else{
            console.log("original");
            x.className = "navbar-wrapper";
        }
    }

    return (
        <div className="navbar-wrapper" id="navbarWrapper">
            <i className="icon-bars" onClick={()=>changeMenu()}>
                <FaBars></FaBars>                
            </i>
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
