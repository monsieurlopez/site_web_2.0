import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import logoWhiteImage from "./assets/logo_large.webp";

const socials = [
  { icon: faGithub, url: "https://github.com/monsieurlopez" },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/lopez-ruiz-sergio/?locale=fr_FR",
  },
];

const Footer = ({ navLinks }) => {
  return (
    <footer className="site-footer">
      <div className="site-footer-logo">
        <img className="logo" src={logoWhiteImage} alt="SerLopez" />
      </div>

      <div className="site-footer-social">
        {socials.map((social, index) => (
          <a
            key={index}
            href={`${social.url}`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={social.icon} size="xl" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
