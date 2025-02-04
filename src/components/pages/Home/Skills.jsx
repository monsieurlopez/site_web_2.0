import "./Skills.css";
import SectionSkills from "./SectionSkills";

import bootstrap_logo from "./assets/logo_bootstrap.svg";
import chartjs_logo from "./assets/logo_chartjs.svg";
import css_logo from "./assets/logo_css.png";
import github_logo from "./assets/logo_github.svg";
import html_logo from "./assets/logo_html.svg";
import jquery_logo from "./assets/logo_jquery.svg";
import js_logo from "./assets/logo_js.svg";
import php_logo from "./assets/logo_php.png";
import postgresql_logo from "./assets/logo_postgresql.svg";
import react_logo from "./assets/logo_react.svg";
import git_logo from "./assets/logo_git.png";
import bootstrapTable_logo from "./assets/logo_bootstrapTable.png";

const personalSkills = [
  { name: "Bootstrap", image: bootstrap_logo },
  { name: "Chart.js", image: chartjs_logo },
  { name: "CSS", image: css_logo },
  { name: "GitHub", image: github_logo },
  { name: "HTML", image: html_logo },
  { name: "jQuery", image: jquery_logo },
  { name: "JavaScript", image: js_logo },
  { name: "PHP", image: php_logo },
  { name: "PostgreSQL", image: postgresql_logo },
  { name: "Bootstrap Table", image: bootstrapTable_logo},
  { name: "React", image: react_logo },
  { name: "Git", image: git_logo },
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
