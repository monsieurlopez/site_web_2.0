import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MealCard.css";

const MealCard = ({ meal }) => {
  return (
    <article className="meal-card">
      <div className="meal-card-image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="meal-card-header">
        <h3>{meal.name}</h3>
        <a href={meal.url} target="_blank" rel="noopener noreferrer" className="meal-card-link-icon">
          <FontAwesomeIcon icon={faLink} />
        </a>
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

export default MealCard;
