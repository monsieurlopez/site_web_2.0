import "./TestimonialCard.css";

const SectionSkills = ({ personalSkills }) => {
  return (
    <article className="testimonial-card">
       {personalSkills.map((skill, index) => (
        <div key={index} className="skill-item">
          <img src={skill.image} alt={skill.name} />
          <h4>{skill.name}</h4>
        </div>
      ))}
    </article>
  );
};

export default SectionSkills;
