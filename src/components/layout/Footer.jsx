import {
  faGithub,
  faLinkedin,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import "./footer.css";
import logoWhiteImage from "./assets/logo_large.png";

const socials = [
  { icon: faGithub, url: "https://github.com/monsieurlopez" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/lopez-ruiz-sergio/?locale=fr_FR" },
  { icon: faWordpress, url: "https://elblogdesergiolo.wordpress.com/" },
];

const Footer = ({ navLinks }) => {
  return (
    <footer className="site-footer">
      <img
        className="site-footer-logo"
        src={logoWhiteImage}
        alt="SerLopez"
      />
      <nav className="site-footer-nav">
        <h4>Sitemap</h4>
        <ul>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <HashLink to={navLink.path}>{navLink.name}</HashLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="site-footer-social">
        <h4>Connect with me</h4>
        {socials.map((social, index) => (
          <a
            key={index}
            href={`${social.url}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
