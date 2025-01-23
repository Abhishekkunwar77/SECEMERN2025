import { Link } from "react-router-dom";
import { useState } from "react";
import "../../css/Navbar.css";

const Navbar = () => {
  var [dropdown, showDropdown] = useState(false);
  const toggleDropdown = () => {
    showDropdown((dropdown) => !dropdown);
  };
  return (
    <header>
      <nav>
        <ol>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="link">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <div>
            <span onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              Hooks
            </span>
            {dropdown && (
              <ul>
                <li>
                  <Link to="/use-state" target="_blank">
                    useState
                  </Link>
                </li>
                <li>useEffect</li>
              </ul>
            )}
          </div>
          <li>
            <Link to="/use-state" className="link">
              UseState
            </Link>
          </li>
          <li>
            <Link to='/use-effect' className="link">UseEffect</Link>
          </li>
          <li>
            <Link to='/use-api' className="link">UseEffectAPI</Link>
          </li>
          <li>
            <Link to="/sign-up" className="link">Signup </Link>
          </li>

        </ol>
      </nav>
    </header>
  );
};
export default Navbar;