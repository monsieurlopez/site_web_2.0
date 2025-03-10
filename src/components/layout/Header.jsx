import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "./assets/logo_large.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ navLinks }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="container grid nav-bar">
        <HashLink className="nav-bar-logo" to="/#home">
          <img src={logoImage} alt="SerLopez Logo" />
        </HashLink>
        <button
          className="nav-bar-hamburger"
          type="button"
          aria-label="On Click"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <ul
          className={isNavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
        >
          {navLinks.map((navLink) => (
            <li
              key={navLink.name}
              onClick={() => setIsNavExpanded(false)}
              aria-label="On Click"
              className="hover-underline-animation"
            >
              {navLink.hashLink ? (
                <HashLink to={navLink.path}>{navLink.name}</HashLink>
              ) : (
                <Link to={navLink.path}>{navLink.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
