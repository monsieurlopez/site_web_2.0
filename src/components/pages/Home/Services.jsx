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
              <span className="service-badge">Professional Experience</span>
            </div>
            <p className="service-description">
              Experienced in developing full-stack applications with a focus on modern technologies. I specialize in frontend frameworks and backend development with proven professional expertise.
            </p>
            <ul className="service-list">
              <li>Frontend: React, Vue & TypeScript</li>
              <li>Backend: Node.js, Express & PHP Laravel</li>
              <li>Database Architecture</li>
              <li>API Design & Integration</li>
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
              Helping professionals build their online presence with simple, elegant landing pages. Only the essentials, nothing unnecessary—clean design focused on results.
            </p>
            <ul className="service-list">
              <li>Simple & elegant design</li>
              <li>Essential features only</li>
              <li>Mobile-first responsive</li>
              <li>Fast & optimized</li>
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
