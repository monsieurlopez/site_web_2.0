const SectionSkills = ({ category, skills }) => {
  return (
    <article className="skill-category">
      <h3 className="skill-category-title">{category}</h3>
      <div className="skill-items">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-item-image">
              <img src={skill.image} alt={skill.name} />
            </div>
            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </article>
  );
};

export default SectionSkills;
