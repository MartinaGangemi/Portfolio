import React from "react";

import { skills } from "../../data/skills";

import "./../../css/style.scss";

const Skills = () => {
  return (
    <div id="skills" className="skills-container ">
      <h1 className="text-center text-uppercase">Professional skill</h1>
      <h6 className="text-center">
        <span className="color-text text-uppercase">My </span>{" "}
        <span className="coursive-text">Talent</span>{" "}
      </h6>

      <div className="row mt-5 justify-content-center">
        {skills.map((skill, i) => {
          return (
            <div
              className="col-4 col-md-3 col-lg-2 p-4 d-flex flex-column align-items-center"
              key={i}
            >
              {skill.icon}
              <span className="text-uppercase"> {skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
