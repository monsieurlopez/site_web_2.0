import { useNavigate } from "react-router-dom";
import "./aion.css";

const AionHero = () => {
  const navigate = useNavigate();

  return (
    <section className="aion-hero">
      <div className="aion-hero-content">
        <div className="aion-hero-text">
          <h1 className="aion-title">High-Impact Landing Pages</h1>
          <p className="aion-subtitle">
            Beautiful, fast, and conversion-focused landing pages designed to turn visitors into customers.
          </p>
          <div className="aion-hero-cta">
            <button
              className="button-primary aion-btn-primary"
              onClick={() => {
                const element = document.getElementById("aion-gallery");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </button>
            <button
              className="button-secondary aion-btn-secondary"
              onClick={() => navigate("/contact")}
            >
              Let's Talk
            </button>
          </div>
        </div>
        <div className="aion-hero-visual">
          <div className="aion-visual-card aion-visual-1">
            <div className="aion-visual-inner">Design</div>
          </div>
          <div className="aion-visual-card aion-visual-2">
            <div className="aion-visual-inner">Performance</div>
          </div>
          <div className="aion-visual-card aion-visual-3">
            <div className="aion-visual-inner">Conversion</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AionHero;
