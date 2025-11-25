import React, { useState, useEffect } from "react";
import cv from "../../layout/assets/CV_Sergio_LOPEZ.pdf";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import barbaraGarciaImage from "./assets/img-barbara.webp";
import cryptoworldImage from "./assets/img-cryptoworld.webp";
import insidersPulseImage from "./assets/img-insiderspulse.webp";
import "./Portfolio.css";
import Cards from "./Cards";

const featuredProjects = [
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
    ],
    type: "Capstone",
    status: "Working",
    demo: false,
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
];

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    window.open("/CV_Sergio_LOPEZ.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="container portfolio-section" id="portfolio">
      <div className="portfolio-header">
        <h2>Portfolio</h2>
        <HashLink className="button-primary" onClick={handleClick}>
          Download CV
        </HashLink>
      </div>

      <div className="featured-projects">
        {isMobile
          ? featuredProjects.map((card, index) => (
              <Cards key={index} card={card} />
            ))
          : featuredProjects.map((card, index) => (
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

      <div className="show-all-container">
        <Link to="/portfolio" className="button-primary">
          Show All Projects
        </Link>
      </div>
    </section>
  );
};

export default React.memo(Portfolio);
