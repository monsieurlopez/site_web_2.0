import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-intro">
          <h2>What I Do</h2>
          <p>Two complementary services to help your business grow</p>
        </div>

        <div className="services-grid">
          {/* Fullstack Developer */}
          <div className="service-card fullstack-card">
            <div className="service-card-header">
              <h3>Fullstack Developer</h3>
              <span className="service-badge">Complete Apps</span>
            </div>
            <p className="service-description">
              Capable of creating complete applications using modern technologies. From database architecture to user interfaces, I deliver high-quality, scalable solutions.
            </p>
            <ul className="service-list">
              <li>Backend with Node.js & Express</li>
              <li>Frontend with React & TypeScript</li>
              <li>Databases (PostgreSQL, MySQL)</li>
              <li>API Design & Integration</li>
              <li>Cloud Deployment</li>
            </ul>
            <button 
              className="service-button"
              onClick={() => {
                document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </button>
          </div>

          {/* Landing Pages Creator */}
          <div className="service-card aion-card">
            <div className="service-card-header">
              <h3>Landing Pages Creator</h3>
              <span className="service-badge">Aion</span>
            </div>
            <p className="service-description">
              Beautiful, high-converting landing pages for businesses and entrepreneurs. Clean design, optimized for conversions, and ready to drive results.
            </p>
            <ul className="service-list">
              <li>Modern, clean design</li>
              <li>Mobile-first approach</li>
              <li>SEO optimized</li>
              <li>Fast loading times</li>
              <li>Conversion focused</li>
            </ul>
            <button 
              className="service-button"
              onClick={() => navigate('/aion')}
            >
              Explore Aion
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
