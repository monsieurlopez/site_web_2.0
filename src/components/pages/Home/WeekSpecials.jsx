import { HashLink } from "react-router-hash-link";
import bruschettaImage from "./assets/bruschetta.jpg";
import littleLemonImage from "./assets/little-lemon.jpg";
import lemonDessertImage from "./assets/lemon-dessert.jpeg";
import "./WeekSpecials.css";
import MealCard from "./MealCard";

const meals = [
  {
    name: "Little-Lemon",
    image: littleLemonImage,
    url: "https://little-lemon-restaurant-wine.vercel.app/",
    github: "https://github.com/monsieurlopez/little-lemon-restaurant",
    description: `Final capstone project for Meta Front-end developer program on Coursera,
      which contains a detailed and responsive website with table-booking
      functionality.`,
    badges: ["HTML", "CSS", "Javascript", "React", "Fontawesome", "EmailJS", "Formik"],
  },
  {
    name: "Bruschetta",
    image: bruschettaImage,
    url: "",
    github: "https://github.com/monsieurlopez",
    description: `Our Bruschetta is made from grilled bread that has been
      smeared with garlic and seasoned with salt and olive oil.`,
    badges: [],
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    url: "",
    github: "https://github.com/monsieurlopez",
    description: `This comes straight from grandma's recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
    badges: [],
  },
];

const WeekSpecials = () => {

  const handleClick = () => {
    const imageUrl = require("../../layout/assets/CV_Sergio_LOPEZ.pdf");
    window.open(imageUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="container grid week-specials" id="menu">
      <div className="week-specials-header">
        <h2>Portfolio</h2>
        <HashLink className="button-primary" to="/#menu" onClick={handleClick}>
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
