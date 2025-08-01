import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import populationChartImage from "./assets/img-population-chart.webp";
import barbaraGarciaImage from "./assets/img-barbara.webp";
import littleLemonImage from "./assets/logo_litle_lemon.webp";
import inCodeCoin from "./assets/Logo-incodecoin.webp";
import "./Portfolio.css";
import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const proyects = [
  {
    name: "Little Lemon",
    image: littleLemonImage,
    url: "https://little-lemon-restaurant-wine.vercel.app/",
    github: "https://github.com/monsieurlopez/little-lemon-restaurant",
    description: `Project for Meta Front-end developer program on Coursera,
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
    type: "Capstone",
    status: "Demo",
  },
  {
    name: "In Code Coin",
    image: inCodeCoin,
    url: "https://in-code-coin.github.io/in-code-solutions/",
    github: "https://github.com/IN-CODE-COIN/in-code-solutions",
    description: `The platform provides real-time prices, relevant news, and useful tools such as a currency converter.`,
    badges: [
      "HTML",
      "CSS",
      "Vanilla Javascript",
      "Bootstrap",
      "GridJs",
      "APIs",
    ],
    type: "Capstone",
    status: "Demo",
  },
  {
    name: "Population Charts",
    image: populationChartImage,
    url: "https://population-charts.vercel.app/",
    github: "https://github.com/monsieurlopez/population-charts",
    description: `An application created to visualize population charts through responsive graphs that adapt to different device sizes and can be downloaded.`,
    badges: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Chartjs",
      "Axios",
      "Bootstrap",
    ],
    type: "Personal",
    status: "Demo",
  },
  {
    name: "Bárbara García Torres",
    image: barbaraGarciaImage,
    url: "https://www.barbaragarciatorresibclc.com/",
    github: "https://github.com/monsieurlopez/barbara-garcia-torres",
    description: `The website provides clear and accessible information on physiotherapy and lactation support offered by a professional certified.`,
    badges: [
      "HTML",
      "CSS",
      "Vanilla Javascript",
      "APIs",
      "Bootstrap",
      "EmailJS",
    ],
    type: "Client",
    status: "Online",
  },
];

const Portfolio = () => {
  const handleClick = () => {
    const imageUrl = require("../../layout/assets/CV_Sergio_LOPEZ.pdf");
    window.open(imageUrl, "_blank", "noopener,noreferrer");
  };

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 tarjetas por slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 tarjetas en tablets
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 1 tarjeta en móviles
        },
      },
    ],
  };

  return (
    <section className="container portfolio-projects" id="portfolio">
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

      {/* Carrusel de tarjetas */}
      <Slider {...settings}>
        {proyects.map((card, index) => (
          <Cards key={index} card={card} />
        ))}
      </Slider>
    </section>
  );
};

export default Portfolio;
