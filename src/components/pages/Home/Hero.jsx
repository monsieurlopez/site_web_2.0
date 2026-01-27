import { HashLink } from "react-router-hash-link";
import "./Hero.css";

const Hero = () => {
  const handleDownloadCV = () => {
    window.open("/CV_Sergio_LOPEZ.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Sergio López</h1>
          <h2>Full Stack Developer</h2>
          <div className="hero-buttons">
            <HashLink className="button-primary" to="/contact">
              Contact me now
            </HashLink>
            <button className="button-secondary" onClick={handleDownloadCV}>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
