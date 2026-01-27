//import personalPhoto from "./assets/personal_photo.webp";
import personalPhoto from "./assets/hero_w.webp";
import "./AboutModern.css";

const OurStory = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2>About Me</h2>
            <p className="about-intro">
              I'm a passionate fullstack developer with a unique background bridging business and technology.
            </p>

            <div className="about-story">
              <div className="about-highlight">
                <h3>Career Pivot</h3>
                <p>
                  After 8 years in the financial sector managing marketing, recruitment, and training initiatives, 
                  I realized my true passion was in technology. In 2023, I made the leap into web development.
                </p>
              </div>

              <div className="about-highlight">
                <h3>What Drives Me</h3>
                <p>
                  I build complete solutions—from databases and APIs to responsive interfaces. I believe in creating 
                  applications that are not just functional, but also elegant and user-friendly.
                </p>
              </div>

              <div className="about-highlight">
                <h3>Today</h3>
                <p>
                  Building fullstack applications with modern tech stacks. Recently started offering landing page 
                  creation services through Aion for entrepreneurs and businesses.
                </p>
              </div>
            </div>

            <p className="about-closing">
              Every project is an opportunity to solve real problems and create value.
            </p>
          </div>

          <div className="about-image">
            <img src={personalPhoto} alt="Sergio Lopez" />
            <div className="about-image-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
