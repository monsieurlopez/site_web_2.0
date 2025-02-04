import "./SectionSkills.css";

const SectionSkills = ({ personalSkills }) => {
  return (
    <article className="personal-skill">
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
