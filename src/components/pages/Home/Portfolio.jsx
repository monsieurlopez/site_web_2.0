import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import barbaraGarciaImage from './assets/img-barbara.webp';
import cryptoworldImage from './assets/img-cryptoworld.webp';
import insidersPulseImage from './assets/img-insiderspulse.webp';
import euroratesImage from './assets/img-eurorates.webp';
import './Portfolio.css';
import './PortfolioAionStyle.css';

const featuredProjects = [
  {
    id: 1,
    name: 'Find Your API',
    image: barbaraGarciaImage,
    url: 'https://findyourapi.com/',
    github: '',
    description: `Modern, interactive platform designed to help developers discover, explore, rate, and comment on public APIs.`,
    badges: [
      'PHP',
      'Laravel',
      'React',
      'TypeScript',
      'Tailwind',
      'Resend',
      'Cludflare',
      'Docker',
      'Clerk',
    ],
    type: 'Personal',
    status: 'Online',
    demo: true,
    githubPrive: true,
    color: '#272e2e',
  },
  {
    id: 2,
    name: 'Euro Rates API',
    logo: euroratesImage,
    url: 'https://eurorate.vercel.app/',
    github: 'https://github.com/monsieurlopez/euro-rates-api',
    description: `Real-time currency exchange rates API and web platform for tracking EUR conversions with historical data.`,
    badges: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'REST API',
      'Vercel',
      'APIs',
    ],
    type: 'Personal',
    status: 'Online',
    demo: true,
    githubPrive: false,
    color: '#1e40af',
  },
  {
    id: 3,
    name: 'Insiders Pulse',
    logo: insidersPulseImage,
    url: 'https://insiderspulse.com/',
    github: '',
    description: `Web platform designed for track insider trades and ownership changes from EDGAR in real time.`,
    badges: [
      'Nodejs',
      'Express',
      'React',
      'TypeScript',
      'Tailwind',
      'ChakraUI',
      'Postgresql',
      'Resend',
      'Google Cloud',
    ],
    type: 'Personal',
    status: 'Working',
    demo: true,
    githubPrive: true,
    color: '#f4ce14',
  },
  {
    id: 4,
    name: 'Cryptoworld',
    logo: cryptoworldImage,
    url: 'https://cryptoworld.cloud/',
    github: 'https://github.com/IN-CODE-COIN/cryptoworld-2.0',
    description: `Web platform designed for searching, tracking, and managing cryptocurrencies.`,
    badges: [
      'PHP',
      'Laravel',
      'React',
      'TypeScript',
      'Tailwind',
      'Axios',
      'MySql',
      'APIs',
      'Docker',
      'Nginx',
    ],
    type: 'Capstone',
    status: 'Online',
    demo: false,
    githubPrive: false,
    color: '#272e2e',
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
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className="portfolio-project-card"
            style={{ '--card-color': project.color }}
          >
            <div className="portfolio-project-visual">
              <img
                src={project.logo}
                alt={project.name}
                className="portfolio-project-logo"
                loading="lazy"
              />
            </div>

            <div className="portfolio-project-content">
              <div className="portfolio-project-header">
                <h3>{project.name}</h3>
                <span className="portfolio-type-badge">{project.type}</span>
              </div>

              <p className="portfolio-project-description">{project.description}</p>

              <div className="portfolio-project-meta">
                <span className={`portfolio-status-badge status-${project.status}`}>
                  {project.status}
                </span>
              </div>

              <div className="portfolio-project-tags">
                {project.badges.map((badge, index) => (
                  <span key={index} className="portfolio-project-tag">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="portfolio-project-actions">
                {project.demo && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-project-link"
                  >
                    Visit Site
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                )}
                {!project.githubPrive && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-project-link"
                  >
                    View Code
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Portfolio);
