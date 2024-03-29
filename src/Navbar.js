import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="topnav">
            <div className="left-nav">
                <li className='active'><Link to='/openalex/build_old'>Home</Link></li>
                <li><Link to='/openalex/build_old/scholars'>Scholars</Link></li>
                <li><Link to='/openalex/build_old/publications'>Publications</Link></li>
            </div>
            <div className="mid-nav">
                <img src={require("./imgs/logo.png")} width="100" height="100" />
            </div>
            <div className="right-nav">
                <li className='signButton'><Link to='/signin'><span>Sign In</span></Link></li>
            </div>
        </div>
    )
}

export default Navbar;