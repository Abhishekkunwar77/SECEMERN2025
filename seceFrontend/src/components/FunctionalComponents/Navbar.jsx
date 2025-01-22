import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../../css/Navbar.css'
const Navbar = ({ onLogout }) => {

    var [dropdown, showDropdown] = useState(false)
    const toggleDropdown=()=>{
        showDropdown(dropdown=>!dropdown);
    }

    return (
        <header>
            <nav>
                <ol>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/About' className="link">About</Link></li>
                    <li><Link to='/Gallery' className="link" >Gallery</Link></li>

                    <li><Link to='/Contact' className="link">Contact</Link></li>
                    <div>
                        <span onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>Hooks</span>
                        {dropdown && (<ul>
                            <li>useState</li>
                            <li>useEffect</li>
                        </ul>)}
                    </div>
                    <li><Link to='/UseState' className="link">UseState</Link></li>
                    <li><Link to='/signUp' className="link">SignUp</Link></li>
                    <li><Link to='/Login' className="link">Login</Link></li>

                    <li><Link to='/' className="link" onClick={onLogout}>Logout</Link></li>
                </ol>
            </nav>
        </header>)
}

export default Navbar;