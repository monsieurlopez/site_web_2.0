import { HashLink } from "react-router-hash-link";
import populationChartImage from "./assets/population-charts-photo.png";
import littleLemonImage from "./assets/little-lemon.jpg";
import serlopez from "./assets/portfolio-photo.png";
import "./WeekSpecials.css";
import MealCard from "./MealCard";

const meals = [
  {
    name: "Personal Website",
    image: serlopez,
    url: "https://serlopez.com/",
    github: "https://github.com/monsieurlopez",
    description: `Dynamic and responsive personal portfolio website. Using modern technologies, it allows you to present your projects, skills, and contact information in a user-friendly and visually engaging way.`,
    badges: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Fontawesome",
      "EmailJS",
      "Formik",
    ],
  },
  {
    name: "Population Charts",
    image: populationChartImage,
    url: "https://population-charts.vercel.app/",
    github: "https://github.com/monsieurlopez/population-charts",
    description: `An application created to visualise population charts of the world.`,
    badges: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Chartjs",
      "Axios",
      "Bootstrap",
    ],
  },
  {
    name: "Little Lemon",
    image: littleLemonImage,
    url: "https://little-lemon-restaurant-wine.vercel.app/",
    github: "https://github.com/monsieurlopez/little-lemon-restaurant",
    description: `Final capstone project for Meta Front-end developer program on Coursera,
      which contains a detailed and responsive website with table-booking
      functionality.`,
    badges: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Fontawesome",
      "EmailJS",
      "Formik",
    ],
  },
];

const WeekSpecials = () => {
  const handleClick = () => {
    const imageUrl = require("../../layout/assets/CV_Sergio_LOPEZ.pdf");
    window.open(imageUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="container grid week-specials" id="portfolio">
      <div className="week-specials-header">
        <h2>Portfolio</h2>
        <HashLink
          className="button-primary"
          to="/#portfolio"
          onClick={handleClick}
        >
          Download CV
        </HashLink>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default WeekSpecials;
