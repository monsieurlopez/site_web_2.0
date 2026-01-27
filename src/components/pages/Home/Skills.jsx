import "./SkillsModern.css";
import SectionSkills from "./SectionSkills";

import {
  bootstrapLogo,
  chartjsLogo,
  cssLogo,
  githubLogo,
  htmlLogo,
  jqueryLogo,
  jsLogo,
  phpLogo,
  postgresqlLogo,
  reactLogo,
  gitLogo,
  bootstrapTableLogo,
  mysqlLogo,
  typescriptLogo,
  mongodbLogo,
  laravelLogo,
  nodejsLogo,
  tailwindLogo,
  viteLogo,
  dockerLogo,
  postmanLogo,
  vercelLogo,
  vueLogo,
  expressLogo,
} from "./assets";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", image: reactLogo },
      { name: "Vue", image: vueLogo },
      { name: "TypeScript", image: typescriptLogo },
      { name: "JavaScript", image: jsLogo },
      { name: "Tailwind", image: tailwindLogo },
      { name: "CSS", image: cssLogo },
      { name: "HTML", image: htmlLogo },
      { name: "Bootstrap", image: bootstrapLogo },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", image: nodejsLogo },
      { name: "Express", image: expressLogo },
      { name: "PHP", image: phpLogo },
      { name: "Laravel", image: laravelLogo },
      { name: "PostgreSQL", image: postgresqlLogo },
      { name: "MySql", image: mysqlLogo },
      { name: "MongoDB", image: mongodbLogo },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", image: gitLogo },
      { name: "GitHub", image: githubLogo },
      { name: "Docker", image: dockerLogo },
      { name: "Vercel", image: vercelLogo },
      { name: "Vite", image: viteLogo },
      { name: "Postman", image: postmanLogo },
    ],
  },
  {
    category: "Libraries",
    skills: [
      { name: "Chart.js", image: chartjsLogo },
      { name: "jQuery", image: jqueryLogo },
      { name: "Bootstrap Table", image: bootstrapTableLogo },
    ],
  },
];

const Skills = () => {
  return (
    <section className="lenguage-container-skills">
      <div className="container">
        <h2>Skills</h2>
        <p className="skills-subtitle">Fullstack technologies and tools I work with</p>
        <div className="skills-categories">
          {skillCategories.map((cat, idx) => (
            <SectionSkills key={idx} category={cat.category} skills={cat.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
