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
      { name: "CSS", image: cssLogo },
      { name: "HTML", image: htmlLogo },
      { name: "jQuery", image: jqueryLogo },
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
      { name: "Cloudflare", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23F6821F' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm3.5 9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z'/%3E%3C/svg%3E" },
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
      { name: "Bootstrap", image: bootstrapLogo },
      { name: "Tailwind", image: tailwindLogo },
      { name: "Vuetify", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cpath fill='%231697F6' d='M128 0L256 64v128L128 256L0 192V64L128 0Z'/%3E%3Cpath fill='%23ffffff' d='M128 80L192 120v80L128 200L64 160V120L128 80Z'/%3E%3C/svg%3E" },
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
