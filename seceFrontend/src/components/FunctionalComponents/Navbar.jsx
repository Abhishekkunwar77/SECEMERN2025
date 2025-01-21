import { Link } from "react-router-dom"
import "../../css/navbar.css"
const NavBar = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/about' className="link">About</Link></li>
                    <li><Link to='/gallery' className="link">Gallery</Link></li>
                    <li><Link to='/contact' className="link">Contact</Link></li>
                    <li><Link to='/sign-up' className="link">Signup</Link></li>
               
                </ul>
            </nav>
        </header>

    )
}
export default NavBar