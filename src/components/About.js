import profile_img from '../assets/profile_img.jpg'

const About = () => {
    return (
        <div className="about-container">
            <div className="description-wrapper">
                <p>Hi, I'm David!</p>
                <p>
                I'm a full-stack software developer and Mechatronics Engineer. Currently based in Toronto, ON. I love to code and work on interesting software development projects in my free time. I have a diverse set of experiences and technical skillsets that range from robotics, low-level software to full-stack web and app development.
                </p>
            </div>
            <div className="image-wrapper">
                <img src={profile_img} alt="profile"></img>
            </div>
        </div>
    )
}

export default About
