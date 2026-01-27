import "./aion.css";

const AionServices = () => {
  const services = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We understand your professional background, expertise, and the message you want to convey. We craft a strategy that showcases your knowledge and positions you as an authority in your field.",
      features: ["Brand Positioning", "User Experience Flow", "Content Strategy"],
    },
    {
      number: "02",
      title: "Design & Build",
      description:
        "Custom, elegant design that reflects your professional identity. Built with modern technologies, ensuring fast load times and an exceptional user experience across all devices.",
      features: ["Responsive Design", "Modern Aesthetics", "Performance First"],
    },
    {
      number: "03",
      title: "Deploy & Support",
      description:
        "Your page goes live, optimized and ready. We ensure everything works perfectly and provide ongoing support to keep your digital presence strong.",
      features: ["SEO Ready", "Analytics Setup", "Ongoing Support"],
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
            <h3>The AION Philosophy</h3>
            <p>
              In a world obsessed with immediate conversions, AION takes a different approach. We believe in creating 
              digital spaces that reflect true professional value—showcasing your expertise, work quality, and knowledge 
              rather than pushing for quick sales.
            </p>
            <p>
              When visitors land on an AION page, they experience excellence. They see clean design, understand your 
              expertise, and develop trust through your demonstrated knowledge. The result? Meaningful professional 
              connections instead of empty conversions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AionServices;
