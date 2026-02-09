import './SkillsModern.css';
import SectionSkills from './SectionSkills';

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
  googlecludLogo,
  cloudflareLogo,
  resendLogo,
  vuetifyLogo,
  clerkLogo,
  nginxLogo,
  astroLogo,
} from './assets';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', image: reactLogo },
      { name: 'Vue', image: vueLogo },
      { name: 'TypeScript', image: typescriptLogo },
      { name: 'JavaScript', image: jsLogo },
      { name: 'CSS', image: cssLogo },
      { name: 'HTML', image: htmlLogo },
      { name: 'jQuery', image: jqueryLogo },
      { name: 'Astro', image: astroLogo },
    ],
  },
  {
    category: 'Backend & DB',
    skills: [
      { name: 'Node.js', image: nodejsLogo },
      { name: 'Express', image: expressLogo },
      { name: 'PHP', image: phpLogo },
      { name: 'Laravel', image: laravelLogo },
      { name: 'PostgreSQL', image: postgresqlLogo },
      { name: 'MySql', image: mysqlLogo },
      { name: 'MongoDB', image: mongodbLogo },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', image: gitLogo },
      { name: 'GitHub', image: githubLogo },
      { name: 'Docker', image: dockerLogo },
      { name: 'Vercel', image: vercelLogo },
      { name: 'Cloudflare', image: cloudflareLogo },
      { name: 'Google Cloud', image: googlecludLogo },
      { name: 'Vite', image: viteLogo },
      { name: 'Postman', image: postmanLogo },
      { name: 'Nginx', image: nginxLogo },
    ],
  },
  {
    category: 'Libraries & Services',
    skills: [
      { name: 'Chart.js', image: chartjsLogo },
      { name: 'Bootstrap Table', image: bootstrapTableLogo },
      { name: 'Bootstrap', image: bootstrapLogo },
      { name: 'Tailwind', image: tailwindLogo },
      { name: 'Vuetify', image: vuetifyLogo },
      { name: 'Resend', image: resendLogo },
      { name: 'Clerk', image: clerkLogo },
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
