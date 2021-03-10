import profile_img from '../assets/profile_img.jpg'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {SiCplusplus, SiPython, SiJavascript,SiPhp, SiLaravel, SiReact, SiHtml5, SiCss3, SiMysql} from 'react-icons/si'
import {useEffect} from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container">
            <div className="about-container">
                <div className="description-container">
                    <div className="description-wrapper">
                        <div className="description-block">
                        <p>Hi, I'm David!</p>
                        <p>
                        I'm a Full-Stack Software Developer and Mechatronics Engineer. Currently based in Toronto, ON. I love to code and work on interesting software development projects in my free time. I have a diverse set of experiences and technical skillsets that range from robotics, low-level software to full-stack web and app development.
                        </p>
                        </div>
                        <div className="links-block">
                            <a href={'https://github.com/kim2552'} rel="noreferrer" target="_blank"><FaGithubSquare></FaGithubSquare></a>
                            <a href={'https://www.linkedin.com/in/kim5/'} rel="noreferrer" target="_blank"><FaLinkedin></FaLinkedin></a>
                            <a href={"mailto:davidkim2552@gmail.com"}><HiOutlineMail>Get In Touch</HiOutlineMail></a>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src={profile_img} alt="profile"></img>
                    </div>
                </div>
                <div className="skills-container">
                    <div className="title-wrapper">
                        <h1>Skills</h1>
                    </div>
                    <div className="description-wrapper">
                        <h3>Web Development</h3>
                        <h3>Mobile App Development</h3>
                        <h3>Automation Scripting</h3>
                        <h3>Desktop Application Development</h3>
                        <h3>Robotics Software Development</h3>
                    </div>
                    <div className="title-wrapper">
                        <h1>Technologies</h1>
                    </div>
                    <div className="showcase-wrapper">
                        <div className="item">
                            <SiCplusplus></SiCplusplus>
                        </div>
                        <div className="item">
                            <SiPython></SiPython>                        
                        </div>
                        <div className="item">
                            <SiJavascript></SiJavascript>                    
                        </div>
                        <div className="item">
                            <SiPhp></SiPhp>                    
                        </div>
                        <div className="item">
                            <SiHtml5></SiHtml5>
                        </div>
                        <div className="item">
                            <SiCss3></SiCss3>
                        </div>
                        <div className="item">
                            <SiReact></SiReact>
                        </div>
                        <div className="item">
                            <SiLaravel></SiLaravel>                        
                        </div>
                        <div className="item">
                            <SiMysql></SiMysql>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default About
