import "./Skills.css";
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

const personalSkills = [
  { name: "Bootstrap", image: bootstrapLogo },
  { name: "Chart.js", image: chartjsLogo },
  { name: "CSS", image: cssLogo },
  { name: "GitHub", image: githubLogo },
  { name: "HTML", image: htmlLogo },
  { name: "jQuery", image: jqueryLogo },
  { name: "JavaScript", image: jsLogo },
  { name: "PHP", image: phpLogo },
  { name: "PostgreSQL", image: postgresqlLogo },
  { name: "Bootstrap Table", image: bootstrapTableLogo },
  { name: "React", image: reactLogo },
  { name: "Git", image: gitLogo },
  { name: "MySql", image: mysqlLogo },
  { name: "Typescript", image: typescriptLogo },
  { name: "MongoDB", image: mongodbLogo },
  { name: "Laravel", image: laravelLogo },
  { name: "Node.js", image: nodejsLogo },
  { name: "Tailwind", image: tailwindLogo },
  { name: "Vite", image: viteLogo },
  { name: "Docker", image: dockerLogo },
  { name: "Postman", image: postmanLogo },
  { name: "Vercel", image: vercelLogo },
  { name: "Vue", image: vueLogo },
  { name: "Express", image: expressLogo },
];

const Skills = () => {
  return (
    <section className="lenguage-container-skills">
      <div className="container grid">
        <h2>Skills</h2>
        <SectionSkills personalSkills={personalSkills} />
      </div>
    </section>
  );
};

export default Skills;
