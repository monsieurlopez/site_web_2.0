import React from "react";
import PropTypes from "prop-types";
import { faLink, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Card.css";

const Project = ({ card }) => {
  return (
    <article className="project-card">
      <div className="project-card-image">
        <img src={card.image} alt={card.name} loading="lazy" />
      </div>

      <div className="project-card-content">
        <div className="project-card-top">
          <div className="project-card-title-section">
            <h3>{card.name}</h3>
            <div className="project-card-badges-inline">
              <span className={`project-badge-inline type-${card.type}`}>
                {card.type}
              </span>
              <span className={`project-badge-inline status-${card.status}`}>
                {card.status}
              </span>
            </div>
          </div>
          <div className="project-card-icons">
            {card.demo && (
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-visit-link"
                title="Visit the site"
              >
                <FontAwesomeIcon icon={faExternalLink} />
              </a>
            )}
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
          </div>
        </div>

        <p className="project-card-description">{card.description}</p>

        <div className="project-card-tags">
          {card.badges.map((badge, index) => (
            <span key={index} className="project-tag">
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
