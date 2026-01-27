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
      { name: "Google Cloud", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%234285F4' d='M24 8L12 20h6v16h12V20h6z'/%3E%3C/svg%3E" },
      { name: "Vite", image: viteLogo },
      { name: "Postman", image: postmanLogo },
    ],
  },
  {
    category: "Libraries & Services",
    skills: [
      { name: "Chart.js", image: chartjsLogo },
      { name: "Bootstrap Table", image: bootstrapTableLogo },
      { name: "Resend", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctext x='2' y='18' font-size='12' font-weight='bold' fill='%23000'%3ERESEND%3C/text%3E%3C/svg%3E" },
      { name: "Clerk", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%236366f1' stroke='%236366f1' stroke-width='2'/%3E%3C/svg%3E" },
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
