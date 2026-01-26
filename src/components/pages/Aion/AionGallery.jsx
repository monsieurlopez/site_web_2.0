import { useState, useEffect } from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./aion.css";

const AionGallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      name: "TechStart - SaaS Platform",
      description: "Modern landing page for a B2B SaaS startup focusing on cloud solutions.",
      industry: "Technology",
      metrics: "45% CTR Increase",
      color: "#FF6B6B",
      image: "🚀",
    },
    {
      id: 2,
      name: "GreenLeaf - Eco Products",
      description: "E-commerce focused landing page for sustainable lifestyle products.",
      industry: "E-commerce",
      metrics: "38% Conversion Rate",
      color: "#51CF66",
      image: "🌿",
    },
    {
      id: 3,
      name: "FitFlow - Fitness App",
      description: "Engaging landing page for a mobile fitness tracking application.",
      industry: "Health & Fitness",
      metrics: "2.5K Sign-ups",
      color: "#4ECDC4",
      image: "💪",
    },
    {
      id: 4,
      name: "DataViz - Analytics Tool",
      description: "Professional landing page for enterprise analytics and visualization software.",
      industry: "Data & Analytics",
      metrics: "$150K MRR",
      color: "#5C7CFA",
      image: "📊",
    },
    {
      id: 5,
      name: "Creative Studio - Agency",
      description: "Portfolio landing page showcasing creative services and portfolio work.",
      industry: "Creative Services",
      metrics: "30 New Clients",
      color: "#FFB84D",
      image: "🎨",
    },
    {
      id: 6,
      name: "ProLearn - Online Course",
      description: "Educational platform landing page with emphasis on course enrollment.",
      industry: "Education",
      metrics: "1K+ Students",
      image: "📚",
      color: "#A78BFA",
    },
  ];

  return (
    <section className="aion-gallery" id="aion-gallery">
      <div className="container">
        <div className="aion-gallery-header">
          <h2>Recent Projects</h2>
          <p>Handpicked landing pages we've created for innovative companies</p>
        </div>

        <div className="aion-gallery-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="aion-project-card"
              style={{ "--card-color": project.color }}
            >
              <div className="aion-project-visual">
                <div className="aion-project-emoji">{project.image}</div>
              </div>

              <div className="aion-project-content">
                <div className="aion-project-header">
                  <h3>{project.name}</h3>
                  <span className="aion-industry-badge">{project.industry}</span>
                </div>

                <p className="aion-project-description">{project.description}</p>

                <div className="aion-project-metrics">
                  <div className="aion-metric">
                    <span className="aion-metric-value">{project.metrics}</span>
                  </div>
                </div>

                <a href="#" className="aion-project-link">
                  View Case Study
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="aion-cta-section">
          <h3>Ready to start your project?</h3>
          <p>Let's create something amazing together</p>
          <a href="/contact" className="button-primary aion-btn-large">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AionGallery;
