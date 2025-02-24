import { HashLink } from "react-router-hash-link";
import populationChartImage from "./assets/img-population-chart.png";
import littleLemonImage from "./assets/logo_litle_lemon.png";
import inCodeCoin from "./assets/Logo-incodecoin.png";
import "./Portfolio.css";
import Cards from "./Cards";

const proyects = [
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
  {
    name: "In Code Coin",
    image: inCodeCoin,
    url: "https://in-code-coin.github.io/in-code-solutions/",
    github: "https://github.com/IN-CODE-COIN/in-code-solutions",
    description: `V 1.0 of the first project from the Fullstack Master's program.
      Where users can access updated information on cryptocurrencies and fiat currencies. The platform provides real-time prices, relevant news, and useful tools such as a currency converter.`,
    badges: ["HTML", "CSS", "Vanilla Javascript", "Bootstrap", "GridJs"],
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
];

const Portfolio = () => {
  const handleClick = () => {
    const imageUrl = require("../../layout/assets/CV_Sergio_LOPEZ.pdf");
    window.open(imageUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="container grid portfolio-projects" id="portfolio">
      <div className="portfolio-projects-header">
        <h2>Portfolio</h2>
        <HashLink
          className="button-primary"
          to="/#portfolio"
          onClick={handleClick}
        >
          Download CV
        </HashLink>
      </div>
      {proyects.map((card, index) => (
        <Cards key={index} card={card} />
      ))}
    </section>
  );
};

export default Portfolio;
