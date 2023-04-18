import React from "react";

import { AiOutlineCalendar } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";

import { experience, education } from "../../data/experience";
import "./experience.scss";

const Experience = () => {
  return (
    <div className="experience-container flex-column" id="experience">
      <h1 className="text-center text-uppercase">Experience</h1>
      <h6 className="text-center">
        <span className="color-text text-uppercase">My </span>{" "}
        <span className="coursive-text">journey</span>{" "}
      </h6>
      <div className="row mt-5">
        <div className="col-sm-12 col-md-6 my-4">
          <h5 className="d-flex align-items-center">
            <MdWorkOutline className="me-2" /> Experience
          </h5>
          {experience.map((el, i) => {
            return (
              <div
                className="experience my-4 d-flex flex-column justify-content-between"
                key={i}
              >
                <h5>{el.name}</h5>
                <h6>{el.role}</h6>
                <span className="color-text d-flex align-items-center">
                  <AiOutlineCalendar className="me-2" /> {el.date}
                </span>{" "}
              </div>
            );
          })}
        </div>
        <div className="col-sm-12 col-md-6 mt-4">
          <h5 className="d-flex align-items-center">
            {" "}
            <HiAcademicCap className="me-2" /> Education
          </h5>
          {education.map((el, i) => {
            return (
              <div
                className="experience my-4 d-flex flex-column justify-content-between"
                key={i}
              >
                <h5>{el.name}</h5>
                <h6>{el.role}</h6>
                <span className="color-text d-flex align-items-center">
                  <AiOutlineCalendar className="me-2" /> {el.date}
                </span>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
