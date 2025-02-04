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
          <a type="button" href={card.url} target="_blank" rel="noopener noreferrer" className="project-card-image-overlay-link">
            Visit the site
          </a>
        </div>
      </div>
      <div className="project-card-header">
        <h3>{card.name}</h3>
        <div className="project-card-icons">
          <a
            href={card.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-github-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link-icon"
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
      <div className="project-card-body-footer">
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

export default Project;
