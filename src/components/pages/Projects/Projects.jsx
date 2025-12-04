import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Cards from "../Home/Cards";
import populationChartImage from "../Home/assets/img-population-chart.webp";
import barbaraGarciaImage from "../Home/assets/img-barbara.webp";
import littleLemonImage from "../Home/assets/logo_litle_lemon.webp";
import inCodeCoin from "../Home/assets/Logo-incodecoin.webp";
import cryptoworldImage from "../Home/assets/img-cryptoworld.webp";
import insidersPulseImage from "../Home/assets/img-insiderspulse.webp";
import timetoImage from "../Home/assets/img-timeto.webp";
import "./Projects.css";

const proyects = [
  {
    name: "Insiders Pulse",
    image: insidersPulseImage,
    url: "https://insiderspulse.com/",
    github: "",
    description: `Web platform designed for track insider trades and ownership changes from EDGAR in real time.`,
    badges: [
      "Nodejs",
      "Express",
      "React",
      "TypeScript",
      "Tailwind",
      "ChakraUI",
      "Postgresql",
      "Resend",
      "Google Cloud",
      "Vercel",
    ],
    type: "Client",
    status: "Online",
    demo: true,
    githubPrive: true,
  },
  {
    name: "Cryptoworld",
    image: cryptoworldImage,
    url: "",
    github: "https://github.com/IN-CODE-COIN/cryptoworld-2.0",
    description: `Web platform designed for searching, tracking, and managing cryptocurrencies.`,
    badges: [
      "PHP",
      "Laravel",
      "React",
      "TypeScript",
      "Tailwind",
      "Axios",
      "MySql",
      "APIs",
      "Docker",
      "Nginx",
    ],
    type: "Capstone",
    status: "Online",
    demo: true,
    githubPrive: false,
  },
  {
    name: "Bárbara García Torres",
    image: barbaraGarciaImage,
    url: "https://www.barbaragarciatorresibclc.com/",
    github: "",
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
    demo: true,
    githubPrive: true,
  },
  {
    name: "Time to the Games",
    image: timetoImage,
    url: "https://timetothegames.com/",
    github: "",
    description: `Countdown to the next Summer Olympic Games 2028. Stay updated with the time remaining until the Olympics begin.`,
    badges: ["HTML", "CSS", "Vanilla Javascript", "Cloudflare", "SEO"],
    type: "Capstone",
    status: "Online",
    demo: true,
    githubPrive: true,
  },
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
    demo: true,
    githubPrive: false,
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
    demo: true,
    githubPrive: false,
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
    demo: true,
    githubPrive: false,
  },
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    const imageUrl = require("../../layout/assets/CV_Sergio_LOPEZ.pdf");
    window.open(imageUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="container projects-section" id="portfolio">
      <div className="portfolio-projects-header">
        <h2>All Projects</h2>
        <HashLink
          className="button-primary"
          to="/#portfolio"
          onClick={handleClick}
        >
          Download CV
        </HashLink>
      </div>

      <div className="projects-grid">
        {isMobile
          ? proyects.map((card, index) => <Cards key={index} card={card} />)
          : proyects.map((card, index) => (
              <article key={index} className="project-horizontal-card">
                <div className="project-horizontal-image">
                  <img src={card.image} alt={card.name} loading="lazy" />
                  <div className="project-horizontal-overlay">
                    {card.demo && (
                      <a
                        type="button"
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-horizontal-link"
                      >
                        Visit the site
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-horizontal-content">
                  <div className="project-horizontal-header">
                    <h3>{card.name}</h3>
                  </div>
                  <div className="project-horizontal-meta">
                    <div className="project-horizontal-badges-meta">
                      <span className={`project-badge type-${card.type}`}>
                        {card.type}
                      </span>
                      <span className={`project-badge status-${card.status}`}>
                        {card.status}
                      </span>
                    </div>
                    <div className="project-horizontal-icons">
                      <a
                        href={card.githubPrive ? undefined : card.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project-horizontal-github-icon ${card.githubPrive ? "disabled" : ""}`}
                        title={`${card.githubPrive ? "Private repository" : "Go to GitHub"}`}
                        onClick={(e) => card.githubPrive && e.preventDefault()}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        href={card.demo ? card.url : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project-horizontal-link-icon ${!card.demo ? "disabled" : ""}`}
                        title={`${!card.demo ? "Site not available" : "Go to site"}`}
                        onClick={(e) => !card.demo && e.preventDefault()}
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </div>
                  </div>
                  <p>{card.description}</p>
                  <div className="project-horizontal-badges">
                    {card.badges.map((badge, index) => (
                      <span key={index} className="project-badge">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
      </div>
    </section>
  );
};

export default Projects;
