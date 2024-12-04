import { HashLink } from "react-router-hash-link";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Sergio López</h1>
          <h2>Front-End Developer</h2>
          <HashLink className="button-primary" to="/contact">
            Contact me now!
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
