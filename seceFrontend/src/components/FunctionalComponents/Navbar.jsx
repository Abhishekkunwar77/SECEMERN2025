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
          <div
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            className="dropdown"
          >
            <span className="link">Hooks</span>
            {dropdown && (
              <ul className="dropdown-list">
                <li>
                  <Link to="/react-lifecycle-methods" className="dropdown-link">
                    Lifecycle
                  </Link>
                </li>
                <li>
                  <Link to="/use-state" className="dropdown-link">
                    UseState
                  </Link>
                </li>
                <li>
                  <Link to="/use-effect" className="dropdown-link">
                    UseEffect
                  </Link>
                </li>
                <li>
                  <Link to="/use-api" className="dropdown-link">
                    UseEffectAPI
                  </Link>
                </li>
                <li>
                  <Link to="/use-ref" className="dropdown-link">
                    UseRef
                  </Link>
                </li>
                <li>
                  <Link to="/use-memo" className="dropdown-link">
                    UseMemo
                  </Link>
                </li>
                <li>
                  <Link to="/use-call" className="dropdown-link">
                    UseCallback
                  </Link>
                </li>
                <li>
                  <Link to="/use-context" className="dropdown-link">
                    UseContext
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <li>
            <Link to="/memo" className="link">
              React.memo
            </Link>
          </li>
          <li>
            <Link to="/sign-up" className="link">
              Signup
            </Link>
          </li>
        </ol>
      </nav>
    </header>
  );
};
export default Navbar;