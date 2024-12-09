import PropTypes from "prop-types";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./MealCard.css";

const MealCard = ({ meal }) => {
  return (
    <article className="meal-card">
      <div className="meal-card-image">
        <img src={meal.image} alt={meal.name} loading="lazy" />
        <div className="meal-card-image-overlay">
          <a type="button" href={meal.url} target="_blank" rel="noopener noreferrer" className="meal-card-image-overlay-link">
            Visit the site
          </a>
        </div>
      </div>
      <div className="meal-card-header">
        <h3>{meal.name}</h3>
        <div className="meal-card-icons">
          <a
            href={meal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="meal-card-github-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={meal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="meal-card-link-icon"
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
      <div className="meal-card-body-footer">
        <p>{meal.description}</p>
        <div className="meal-badges">
          {meal.badges.map((badge, index) => (
            <span key={index} className="meal-badge">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

MealCard.propTypes = {
  meal: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default MealCard;
