import {Link} from 'react-router-dom'
import {GrFormNextLink} from 'react-icons/gr'

const Home = () => {
    return (
        <div className="container">
            <div className="home-container">
                <div className="description-wrapper">
                    <h1>Hi, my name is David</h1>
                    <h3>Full-stack Software Developer</h3>
                    <h3>Mechatronics B. Eng</h3>
                </div>
                <div className="links-wrapper">
                    <Link to="/about">
                        <div className="menu-item">
                            Learn about me!
                        </div>
                    </Link>
                    <Link to="/projects">
                        <div className="menu-item">
                            Check out my projects!
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="menu-item">
                            Get in touch!
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
