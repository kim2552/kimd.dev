import logo from '../assets/logo_2.png'
import Navbar from './Navbar'

const Header = () => {
    return(
        <div className="header-container">
            <a href="/">
                <img src={logo} alt="kimd.dev logo"></img>
            </a>
            <Navbar></Navbar>
        </div>
    )
}

export default Header