import "./aion.css";

const AionServices = () => {
  const services = [
    {
      number: "01",
      title: "Strategy & Planning",
      description:
        "We start by understanding your business goals, target audience, and competitive landscape. A well-planned landing page is the foundation for success.",
      features: ["Market Research", "User Flow Analysis", "Conversion Goals"],
    },
    {
      number: "02",
      title: "Design & Development",
      description:
        "Custom, modern designs that reflect your brand and engage visitors. Built with performance and accessibility in mind.",
      features: ["Responsive Design", "Modern UI/UX", "Fast Loading"],
    },
    {
      number: "03",
      title: "Optimization & Launch",
      description:
        "Tested, optimized, and ready to convert. We ensure your page performs on every device and ranks well in search results.",
      features: ["A/B Testing", "SEO Optimized", "Analytics Ready"],
    },
  ];

  return (
    <section className="aion-services">
      <div className="container">
        <div className="aion-services-header">
          <h2>How We Work</h2>
          <p>A streamlined process to bring your vision to life</p>
        </div>

        <div className="aion-services-grid">
          {services.map((service) => (
            <div key={service.number} className="aion-service-card">
              <div className="aion-service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="aion-service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="aion-feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="aion-services-story">
          <div className="aion-story-content">
            <h3>Our Approach</h3>
            <p>
              Every landing page we create tells your story. We combine strategic thinking with modern design
              and development to create pages that don't just look great—they deliver results.
            </p>
            <p>
              From startups to established businesses, we've helped companies across industries increase
              conversions, build trust, and grow their customer base.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AionServices;
