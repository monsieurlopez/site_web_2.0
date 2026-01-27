import React from "react";
import { useNavigate } from "react-router-dom";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import barbaraGarciaImage from "./assets/img-barbara.webp";
import cryptoworldImage from "./assets/img-cryptoworld.webp";
import insidersPulseImage from "./assets/img-insiderspulse.webp";
import euroratesImage from "./assets/img-eurorates.webp";
import "./Portfolio.css";
import "./PortfolioModern.css";

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
    ],
    type: "Client",
    status: "Online",
    demo: true,
    githubPrive: true,
  },
  {
    name: "Cryptoworld",
    image: cryptoworldImage,
    url: "https://cryptoworld.cloud/",
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
  const navigate = useNavigate();

  return (
    <section className="container portfolio-section" id="portfolio">
      <div className="portfolio-header">
        <h2>My Projects</h2>
      </div>

      <div className="featured-projects">
        {featuredProjects.map((card, index) => (
          <article key={index} className="project-card-modern">
            <div className="project-card-modern-image">
              <img src={card.image} alt={card.name} loading="lazy" />
            </div>
            
            <div className="project-card-modern-content">
              <div className="project-card-modern-header">
                <div className="project-card-modern-title-section">
                  <h3>{card.name}</h3>
                  <div className="project-card-modern-badges-inline">
                    <span className={`project-badge type-${card.type}`}>
                      {card.type}
                    </span>
                    <span className={`project-badge status-${card.status}`}>
                      {card.status}
                    </span>
                  </div>
                </div>
                
                <div className="project-card-modern-icons">
                  {card.demo && (
                    <a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-modern-visit-link"
                      title="Visit the site"
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  )}
                  <a
                    href={card.githubPrive ? undefined : card.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-card-modern-github-icon ${card.githubPrive ? "disabled" : ""}`}
                    title={`${card.githubPrive ? "Private repository" : "Go to GitHub"}`}
                    onClick={(e) => card.githubPrive && e.preventDefault()}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>

              <p className="project-card-modern-description">{card.description}</p>

              <div className="project-card-modern-tags">
                {card.badges.map((badge, index) => (
                  <span key={index} className="project-card-modern-tag">
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

            export default React.memo(Portfolio);
