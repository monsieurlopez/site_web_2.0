import React from "react";
import PropTypes from "prop-types";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Card.css";

const Project = ({ card }) => {
  return (
    <article className="project-card">
      <div className="project-card-image">
        <img src={card.image} alt={card.name} loading="lazy" />
        <div className="project-card-image-overlay">
          {card.demo && (
            <a
              type="button"
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-image-overlay-link"
            >
              Visit the site
            </a>
          )}
        </div>
      </div>
      <div className="project-card-header">
        <h3>{card.name}</h3>
        <div className="project-card-icons">
          <a
            href={card.githubPrive ? undefined : card.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card-github-icon ${card.githubPrive ? "disabled" : ""}`}
            title={`${card.githubPrive ? "Private repository" : "Go to GitHub"}`}
            onClick={(e) => card.githubPrive && e.preventDefault()}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={card.demo ? card.url : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card-link-icon ${!card.demo ? "disabled" : ""}`}
            title={`${!card.demo ? "Site not available" : "Go to site"}`}
            onClick={(e) => !card.demo && e.preventDefault()}
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
      <div className="project-card-body-footer">
        <div className="project-card-meta">
          <span className={`project-badge type-${card.type}`}>{card.type}</span>
          <span className={`project-badge status-${card.status}`}>
            {card.status}
          </span>
        </div>
        <p>{card.description}</p>
        <div className="project-badges">
          {card.badges.map((badge, index) => (
            <span key={index} className="project-badge">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default React.memo(Project);
