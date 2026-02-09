import { useState, useEffect } from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import barbaraGarciaImage from '../Home/assets/img-barbara.webp';
import littleLemonImage from '../Home/assets/logo_litle_lemon.webp';
import seaImage from '../../layout/assets/img_sea.webp';

import './aion.css';

const AionGallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      name: 'SEA Traduction',
      description:
        'Traductrice professionnelle en français, espagnol et italien. Services de traduction, interprétation et cours de langue.',
      industry: 'Curture',
      url: 'https://landing-sabrina.pages.dev/',
      image: seaImage,
      isImageUrl: true,
      color: '#fed7aa',
    },
    {
      id: 2,
      name: 'Bárbara García Torres',
      description:
        'Professional website for lactation support and physiotherapy services, offering personalized care for babies and parents, including postnatal recovery, pelvic floor rehabilitation, and overall family well-being.',
      industry: 'Healthcare',
      url: 'https://www.barbaragarciatorresibclc.com/',
      image: barbaraGarciaImage,
      isImageUrl: true,
      color: '#F4A261',
    },
    {
      id: 3,
      name: 'Little Lemon',
      description: `Project for Meta Front-end developer program on Coursera,
      which contains a detailed and responsive website with table-booking
      functionality.`,
      industry: 'Food & Beverage',
      url: 'https://little-lemon-restaurant-wine.vercel.app/',
      image: littleLemonImage,
      isImageUrl: true,
      color: '#495e57',
    },
  ];

  return (
    <section className="aion-gallery" id="aion-gallery">
      <div className="container">
        <div className="aion-gallery-header">
          <h2>Recent Projects</h2>
          <p>Handpicked landing pages we've created for innovative companies</p>
        </div>

        <div className="aion-gallery-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="aion-project-card"
              style={{ '--card-color': project.color }}
            >
              <div className="aion-project-visual">
                {project.isImageUrl ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      maxWidth: '90%',
                      maxHeight: '90%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                ) : (
                  <div className="aion-project-emoji">{project.image}</div>
                )}
              </div>

              <div className="aion-project-content">
                <div className="aion-project-header">
                  <h3>{project.name}</h3>
                  <span className="aion-industry-badge">{project.industry}</span>
                </div>

                <p className="aion-project-description">{project.description}</p>

                {project.metrics && (
                  <div className="aion-project-metrics">
                    <div className="aion-metric">
                      <span className="aion-metric-value">{project.metrics}</span>
                    </div>
                  </div>
                )}

                <a
                  href={project.url || '#'}
                  target={project.url ? '_blank' : undefined}
                  rel={project.url ? 'noopener noreferrer' : undefined}
                  className="aion-project-link"
                >
                  {project.url ? 'Visit Site' : 'View Case Study'}
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="aion-cta-section">
          <h3>Ready to start your project?</h3>
          <p>Let's create something amazing together</p>
          <a href="/contact" className="button-primary aion-btn-large">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AionGallery;
