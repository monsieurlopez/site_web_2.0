import { HashLink } from "react-router-hash-link";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Sergio Lopez</h1>
          <h2>Front-End Developer</h2>
          <p>
          Dedicated to crafting seamless and visually engaging user experiences.
          I strive to transform ideas into functional, user-friendly digital solutions.
          </p>
          <HashLink className="button-primary" to="/contact">
            Contact me now!
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
