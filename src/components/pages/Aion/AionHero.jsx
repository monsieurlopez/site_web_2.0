import { useNavigate } from "react-router-dom";
import "./aion.css";
import imgAion from "../../layout/assets/img_aion.webp";

const AionHero = () => {
  const navigate = useNavigate();

  return (
    <section className="aion-hero">
      <div className="aion-hero-content">
        <div className="aion-hero-text">
          <h1 className="aion-logo-title">
            <img src={imgAion} alt="AION" />
          </h1>
          <h2 className="aion-subtitle-title">Timeless Web Presence</h2>
          <p className="aion-subtitle">
            Aion represents eternity and timeless quality. We create landing pages that showcase professional expertise and knowledge, 
            designed to highlight your work and experience rather than chase immediate conversions. For professionals and companies ready 
            to make a lasting impression.
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
            <div className="aion-visual-inner">Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AionHero;
