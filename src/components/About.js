import profile_img from '../assets/profile_img.jpg'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const About = () => {
    return (
        <div className="container">
            <div className="about-container">
                <div className="description-wrapper">
                    <div className="description-block">
                    <p>Hi, I'm David!</p>
                    <p>
                    I'm a full-stack software developer and Mechatronics Engineer. Currently based in Toronto, ON. I love to code and work on interesting software development projects in my free time. I have a diverse set of experiences and technical skillsets that range from robotics, low-level software to full-stack web and app development.
                    </p>
                    </div>
                    <div className="links-block">
                        <a href={'https://github.com/kim2552'} target="_blank"><FaGithubSquare></FaGithubSquare></a>
                        <a href={'https://www.linkedin.com/in/kim5/'} target="_blank"><FaLinkedin></FaLinkedin></a>
                        <a href={"mailto:davidkim2552@gmail.com"}><HiOutlineMail>Get In Touch</HiOutlineMail></a>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={profile_img} alt="profile"></img>
                </div>
            </div>
        </div>
    )
}

export default About
